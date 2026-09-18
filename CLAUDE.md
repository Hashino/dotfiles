# Regra inegociável deste repo: nada sensível em claro

Este repo é **público**. Arquivos cifrados com git-crypt vivem nele em blob, e a
chave é selada com uma senha em `.scripts/git-crypt.key.gpg` — ou seja, a
proteção real de tudo que entra cifrado é a força daquela senha.

## No commit, sempre

Antes de commitar, olhe o diff procurando:

- **chave de API** — `API_KEY`, `TOKEN`, `SECRET`, string base64/hex longa, `sk-`, `Bearer`;
- **informação pessoal** — nome real, CPF, endereço, e-mail, telefone, conta bancária;
- **o que identifica o dono** — URL com login, nome de usuário único, caminho com hostname, print com barra de título.

Encontrou em arquivo que deveria entrar no repo: **não commite em claro**.

## Como cifrar em vez de excluir

1. Adicione o caminho ao bloco git-crypt do `.gitattributes`:
   `filter=git-crypt diff=git-crypt`
2. Tire a rota da lista de ignorados no `.gitignore` / `.gitignore` do subdir.
3. `git add` o arquivo — confira com `git show :caminho | head -c 32`: começa com
   `\0GITCRYPT\0` (cifrado) e não com o conteúdo.
4. Commit junto com a regra do `.gitattributes`, senão o próximo clone cifra
   errado.

Rotas já cifradas: `.config/claude/projects/*/memory/**`, `.private/**`,
`*.secret`, `config/nvim/.env`, `.config/fish/conf.d/secrets.fish`.

Se o arquivo é machine-local e não precisa viajar (cache, histórico, estado de
runtime), ignorar continua sendo a resposta certa — cifrar é para o que precisa
existir numa reinstalação.

## Verificações periódicas

`git-crypt status` lista o que está sob o filtro. `git log -p -- <caminho>`
num arquivo cifrado deve mostrar blob, nunca conteúdo.
