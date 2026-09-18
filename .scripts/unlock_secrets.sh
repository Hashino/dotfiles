#!/bin/bash
# Destranca o conteúdo cifrado deste repo (git-crypt) pedindo a senha.
# Contraparte do seal_secrets.sh. Roda sozinho ou chamado pelo install.
#
# Uso: ./.scripts/unlock_secrets.sh [caminho-do-repo]
set -euo pipefail

repo="${1:-$(git rev-parse --show-toplevel)}"
blob="${repo}/.scripts/git-crypt.key.gpg"

[ -f "${blob}" ] || { echo "nada selado neste repo (${blob} não existe)"; exit 1; }

if ! command -v git-crypt >/dev/null; then
  echo "instalando git-crypt…"
  sudo pacman -S --noconfirm --needed git-crypt
fi

# git-crypt unlock exige árvore limpa: ele reescreve os arquivos cifrados.
if [ -n "$(git -C "${repo}" status --porcelain)" ]; then
  echo "árvore suja — commite ou guarde as mudanças antes de destrancar"
  exit 1
fi

chave="$(mktemp)"
trap 'shred -u "${chave}" 2>/dev/null || rm -f "${chave}"' EXIT

read -rsp "Senha do repo: " senha
echo

# --passphrase-fd 0 em vez de --passphrase: senha em argumento aparece no ps.
if ! printf '%s' "${senha}" | gpg --batch --quiet --pinentry-mode loopback \
      --passphrase-fd 0 --output "${chave}" --yes --decrypt "${blob}" 2>/dev/null; then
  echo "senha errada — nada foi destrancado"
  exit 1
fi
unset senha

git -C "${repo}" crypt unlock "${chave}"
echo "destrancado."
