#!/bin/bash
# Sela a chave do git-crypt deste repo com uma SENHA.
#
# Por que existe: o git-crypt não tem modo "senha". Ele usa uma chave simétrica
# binária que vive em .git/git-crypt/keys/default e NUNCA é versionada. Numa
# máquina recém-formatada essa chave não existe — e sem ela o conteúdo cifrado
# é inútil até para o dono.
#
# A saída daqui é essa mesma chave, cifrada com uma senha (GPG simétrico,
# AES-256), guardada NO PRÓPRIO REPO PÚBLICO. Quem tem a senha destranca em
# qualquer máquina; quem não tem, tem um blob.
#
# Consequência direta: a senha É a segurança inteira. O blob é público, então
# um atacante pode tentar quebrá-la offline, sem limite de tentativas e sem
# ninguém perceber. Use uma frase longa (4+ palavras aleatórias), não uma senha
# de site. Trocar a senha depois NÃO invalida o blob antigo: ele continua no
# histórico do git para sempre.
#
# Uso: ./.scripts/seal_secrets.sh
set -euo pipefail

repo="$(git rev-parse --show-toplevel)"
saida="${repo}/.scripts/git-crypt.key.gpg"

command -v git-crypt >/dev/null || { echo "git-crypt não instalado: sudo pacman -S git-crypt"; exit 1; }
[ -f "${repo}/.git/git-crypt/keys/default" ] || { echo "este repo não tem git-crypt iniciado (git-crypt init)"; exit 1; }

chave="$(mktemp)"
trap 'shred -u "${chave}" 2>/dev/null || rm -f "${chave}"' EXIT

git -C "${repo}" crypt export-key "${chave}"

echo "Escolha a senha que vai destrancar este repo numa máquina nova."
gpg --symmetric --armor \
    --cipher-algo AES256 \
    --s2k-mode 3 --s2k-digest-algo SHA512 --s2k-count 65011712 \
    --output "${saida}" --yes "${chave}"

echo
echo "selado em: ${saida}"
echo "commite esse arquivo — ele é a única cópia recuperável da chave."
