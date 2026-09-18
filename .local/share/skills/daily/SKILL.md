---
name: daily
description: Rotina diária de produção do Hashino — publica N ferramentas novas em hashino.xyz (repo ferramentas), gera o lote de imagens do dia para o Adobe Stock (repo stockfarm) e escreve um livro novo para o KDP (repo kdpfarm). Use quando ele pedir "/daily", "roda o diário", "faz as ferramentas e as imagens de hoje", "gera o lote de hoje" ou "escreve o livro do dia".
---

# /daily — a rotina de produção do dia

Três linhas de produção independentes: **ferramentas**, **imagens** e
**livro**. O trabalho é meu; o dele é só **subir os arquivos** — no portal do
Adobe e no painel do KDP. Nunca peça a ele para rodar `git push` — eu commito
e publico (ver memória `deploy-eu-que-faco`).

**Argumento:** número de ferramentas a publicar (padrão 10).
`/daily 3` = 3 ferramentas + o lote de imagens + o livro do dia.

**Ordem:** comece a geração das imagens em background **antes** das
ferramentas — são ~20 chamadas de API que levam minutos e não competem com o
meu tempo. Depois construa as ferramentas enquanto isso roda, e só então faça
o QC das imagens (que exige minha leitura, uma a uma). O livro fica por
último: é o item mais longo e o único que não depende de cota externa depois
que o nicho está escolhido.

---

## 0. Faxina e abertura das frentes

```bash
cd ~/Projects/wilson3/stockfarm && python3 farm.py limpar && python3 farm.py status
cd ~/Projects/wilson3/kdpfarm && python3 scripts/limpar.py
```

`farm.py limpar` apaga os JPG que já cumpriram o papel — os de lote
**enviado** e os reprovados no QC. `scripts/limpar.py` do kdpfarm apaga todo
livro que não seja o do dia (mesma doutrina, pedido dele em 18/09/2026: o que
já foi entregue não ocupa disco). É seguro por construção (o que espera QC ou está em lote não
enviado não é tocado) e o `manifest.jsonl` continua com o histórico inteiro;
some só o binário. `--seco` mostra antes de apagar. Em dois dias de operação
`images/` já tinha 48 MB.

Se o orçamento do dia couber imagens, dispare já em background
(`run_in_background: true`, timeout alto — leva ~15-25 min):

```bash
cd ~/Projects/wilson3/stockfarm && python3 farm.py batch
```

Antes de disparar o lote, **sonde com uma imagem**
(`python3 farm.py generate 1`): responde em segundos e diz a verdade sobre a
cota, que o `status` não sabe (ver "a janela é rolante", abaixo). Se voltar
4006, a linha de imagens está fechada por agora — diga isso e siga com as
ferramentas e o livro.

**Ritmo medido (18/09/2026): ~3 imagens a cada 9 minutos** — um lote de 20
leva cerca de uma hora e o processo não imprime nada até o fim. Não fique
esperando e não conclua que travou: confira o progresso com
`python3 farm.py status` (a linha "geradas" sobe) em vez de ler o output.

**O contador local de neurons mente — a Cloudflare é a autoridade.** Em
18/09/2026 o lote tomou 429 em quase tudo com o contador local em 2085/9500;
o corpo do erro dizia *"you have used up your daily free allocation of 10,000
neurons"*, código **4006**. Ou seja: a janela da Cloudflare é de 24h corridas
(carrega a conta do dia anterior) e tentativa que falha depois de rodar
inferência também consome. Três correções já estão no `farm.py`:

- 5 tentativas com espera de 5/15/40/90s e 8s entre imagens (429 de ritmo);
- falha transitória **não** consome o prompt (um 429 chegou a queimar 19
  prompts do backlog de uma vez);
- erro 4006 / "daily free allocation" **para o lote na hora** e marca o dia
  como esgotado, em vez de gastar minutos em backoff inútil.

**A janela é rolante, não é meia-noite.** Em 18/09/2026 o lote morreu por
4006 às 13h; no dia seguinte, às 14h30, ainda era 4006 — o contador local
tinha zerado com a data e mentia "cabem mais 17 imagens". Regra prática: se o
lote de ontem morreu por cota na hora X, a cota de hoje só abre depois da
hora X. Uma sonda de uma imagem (`python3 farm.py generate 1`) responde em
segundos e evita começar um lote inteiro contra uma cota morta.

**Bug corrigido em 18/09/2026:** `gerarUma` chamava `urlopen` sem ler o CORPO
do erro, então todo 429 virava "HTTP Error 429: Too Many Requests" e o
detector de cota nunca via o 4006. O lote passou mais de uma hora em backoff
de 5/15/40/90s contra uma cota esgotada. Agora o corpo é lido e a parada é
imediata. Se algum dia esse padrão voltar (log só com "429" genérico e
nenhuma imagem saindo), é este bug.

Quando a cota estourar, **entregue o lote parcial** — 5 imagens embaladas
valem mais do que esperar o dia virar. Diagnóstico rápido, se desconfiar:
faça uma chamada solta à API e **leia o corpo do 429**; ele distingue ritmo
de cota. Sinal de que o bug do prompt queimado voltou: o `backlog de prompts`
cair muito mais do que o número de imagens geradas.

---

## 1. Ferramentas (repo `~/Projects/wilson3/ferramentas`)

A fonte da verdade é o `CLAUDE.md` do repo. **Leia-o antes**; o resumo abaixo
existe para não pular etapa, não para substituí-lo.

Repita N vezes, **uma ferramenta por ciclo, um commit por ciclo**:

```bash
cd ~/Projects/wilson3/ferramentas
python3 scripts/proxima.py --n 12   # fila inteira num passe só
```

- Peça a fila **de uma vez**, com folga sobre o N pedido (algumas você vai
  descartar no filtro abaixo). Um passe leva minutos; dez passes desperdiçam
  a tarde. O `--n` foi adicionado em 18/09/2026 exatamente para isso.
- Se imprimir `NENHUMA: ...`, siga a instrução da mensagem e pare o ciclo.
- Use o SLUG que ele deu, **sem alterar**. Nunca escolha keyword "no olho" —
  foi assim que 264 páginas viraram lixo.

**Dois vetos que a `proxima.py` não faz e eu tenho que fazer** (descobertos em
18/09/2026, quando ela aprovou `calculadora de arcano pessoal personare`):

1. **Keyword com marca de concorrente** (`... personare`, `... binance`) —
   quem busca isso quer o site daquela marca, não o meu. Não converte e ainda
   cheira a carona de marca.
2. **Terceira variante do mesmo cálculo** — já existiam `arcano-pessoal-2026`
   e `arcano-pessoal-anual`. Mais uma é página quase duplicada, que é
   literalmente o rótulo que derrubou o AdSense.
3. **SERP de loja = intenção de compra** (`calculadora de bolso`, aprovada em
   18/09/2026 com o motivo "os resultados são páginas de venda de
   calculadoras"). A `triagem.py` lê "nenhuma ferramenta no top-3" como espaço
   livre, mas top-3 de e-commerce significa que quem busca quer **comprar um
   objeto**, não fazer uma conta. Se o próprio MOTIVO citar loja, preço de
   produto ou marca de fabricante, descarte.

Nos dois casos: marque a keyword como `descartada` no `keywords.csv` e siga
para a próxima da fila.

Construa `tools/<SLUG>/index.html` a partir de `templates/tool/index.html`,
preenchendo os tokens. O molde começa com um comentário HTML de instruções
para o agente — **corte-o**: recorte a partir de `<html lang=` e prefixe
`<!doctype html>`. Feito isso, confira que não sobrou nenhum `{{`. Regras que o revisor do AdSense e o usuário cobram:

- JS puro, sem CDN, sem `fetch`, funciona offline.
- Nada de `<html>`/`<head>`/topnav/rodapé/`<details>` escrito à mão — o
  template e o `chrome.js` cuidam disso.
- **Pelo menos um input numérico que só o usuário sabe.** Ferramenta que dá
  resultado sem ninguém digitar nada é tabela de médias disfarçada.
- Recalcula a cada tecla; campo vazio mostra vazio, nunca `NaN`.
- PT-BR, `toLocaleString("pt-BR")`.

Marque a keyword como `feita` em `backlog/keywords.csv` (o arquivo é
`keyword,status,adicionada_em,origem`; ache a linha com `grep -n` e troque só
ela, `sed -i '<N>s/,candidata,/,feita,/'`).

Publique, nesta ordem, sem pular:

```bash
python3 scripts/lint_fake_calculator.py <SLUG>
python3 scripts/backfill_explicacao.py
python3 scripts/conteudo.py <SLUG>
python3 scripts/build.py
git add -A && git commit -m "tool: <SLUG>" && git push
```

`conteudo.py` é obrigatório: pular publica uma página de ~80 palavras, que foi
exatamente o que derrubou a conta do AdSense em 17/09/2026.

### O orçamento de tokens da Groq é o recurso escasso do dia

Medido em 18/09/2026, e é a restrição que define quantas ferramentas cabem:
a conta grátis tem **200.000 tokens por DIA por modelo** (TPD). A mensagem
honesta só aparece no corpo do 429:

```
Rate limit reached for model `openai/gpt-oss-120b` ... on tokens per day (TPD):
Limit 200000, Used 198234, Requested 2234. Please try again in 3m22.176s.
```

Consequências práticas:

- **A triagem é a gastadora.** Um `proxima.py --n 12` julgando centenas de
  candidatas consumiu quase o dia inteiro de tokens e deixou o `conteudo.py`
  sem orçamento — a ferramenta foi ao ar **sem a seção de conteúdo**, que é o
  defeito exato que derrubou o AdSense. Peça fila pequena (`--n 3` ou `--n 4`)
  e **pause a triagem antes de publicar**.
- **Reserve o orçamento na ordem certa:** conteúdo primeiro, triagem depois.
  Página sem texto é dano; keyword a menos é só um dia mais curto.
- **Nunca rode as duas coisas ao mesmo tempo** — nem duas instâncias da mesma.
- Se o `conteudo.py` falhar mesmo assim, a ferramenta não pode ficar no ar sem
  texto: repita com `--force` até sair `[ok]`. O `ai.py` agora entende
  "3m22s" (antes a regex só lia segundos e dormia 2s, queimando as 6
  tentativas em 12 segundos) e tira do rodízio o modelo cuja cota diária
  estourou.

### Quando a cota da Groq acaba, o modelo sou eu

Descoberto em 18/09/2026, com os dois modelos em 198k/200k. **Cota estourada
não é motivo para parar o dia** — os dois scripts que dependem de IA têm uma
porta de entrada manual:

- **`conteudo.py` lê o cache antes de chamar a IA.** Escreva você mesmo
  `backlog/conteudo/<slug>.json` no schema do `MOLDE` (intro, formula, como,
  exemplo, tabela, cuidados, faq) e rode `python3 scripts/conteudo.py <slug>`
  **sem `--force`** — ele acha o cache e só renderiza. Confira os números do
  exemplo rodando a fórmula da própria ferramenta no `node` antes de escrever;
  é o que o passo de revisão faria. Resultado prático: duas páginas saíram com
  ~1.100 e ~1.360 palavras sem gastar um token.
- **`triagem.py` também é cache-first** (`backlog/triagem.json`). Antes de
  minerar, veja o que já foi aprovado e não construído:
  `grep CONSTRUIR` no cache e cruze com `tools/`. Em 18/09/2026 havia 23
  vereditos CONSTRUIR — e todos os 23 já estavam no ar.
- O julgamento da triagem também pode ser meu: a SERP fica em
  `backlog/serp.json` e a régua está no `MOLDE` do `scripts/triagem.py`
  (quer_ferramenta / ferramentas_top3 == 0 / respondida_por_ia == false).
  Leia os top-3 e escreva o veredito no cache no mesmo formato.

O que **não** é aceitável: publicar a ferramenta sem a seção de conteúdo e
"voltar depois". Foi assim que o AdSense caiu.

### A fila da mineração: filtre por forma de cálculo, não por palavra

`mine.py check` ganhou `--filtro` em 18/09/2026 (casa com a keyword ou com a
origem, ex.: `--filtro matrix:tinta`). Sem ele a fila sai em ordem alfabética
e, com 3.000 candidatas, o crédito da Serper morre inteiro dentro de
"calculadora de ..." — a família mais saturada.

Mas filtrar por `quant` também não salva: 45 créditos voltaram com "quanto
tempo dura o cartão virtual", "divida quantos anos caduca", "quantas
aposentadorias o Lula tem". **"Quanto tempo / quantos anos / quantas vezes"
é pergunta informacional**, que o AI Overview responde. O que rende é a forma
de CÁLCULO com medida do usuário: "quanto gasta", "quantos litros", "quantos
sacos", "quantos metros", "quanto rende", "quantas latas".

Domínios financeiros do `seeds.json` (dívida, cheque especial, IPCA, cripto,
consórcio) já foram varridos e não rendem — os que rendem são obra, consumo
doméstico, agro e jogos (recurso/XP que só o jogador sabe). Reordenar
`seeds.json["dominios"]` para o `matrix` varrer os bons primeiro é barato e
legítimo.

**Grave os DESCARTAR mesmo quando são óbvios.** `triagem.familias_condenadas()`
lê o cache e corta famílias inteiras antes de gastar crédito: 67 vereditos
manuais de uma sentada levaram o placar a 18 famílias condenadas.

### O backlog com SERP pode estar todo condenado

Em 18/09/2026 restavam 411 candidatas com SERP e sem veredito, e ao ler as
SERPs **todas** eram trabalhistas (férias, hora extra, 13º, salário) com o
top-3 tomado por calculadoras de grandes portais. Descartar 411 uma a uma é
desperdício: quando a família inteira está saturada, o caminho é
`python3 scripts/mine.py matrix <n>` (domínios novos do `seeds.json`, via
autocomplete do Google, sem IA) seguido de `python3 scripts/mine.py check
<n>` (SERP pela Serper, crédito próprio, também sem IA). Só então triar.

**Pegadinha de shell que já custou três jobs:** `pkill -f`/`pgrep -f` com um
padrão que também aparece na minha própria linha de comando mata o meu shell
(exit 144). O truque do colchete (`pgrep -f "proxima[.]py"`) só resolve
metade: se o MESMO comando também invocar `scripts/proxima.py` depois, a linha
casa de novo. Regra simples: **o kill vai sozinho, numa chamada só dele**.

Nunca rode dois `proxima.py` ao mesmo tempo: enquanto a keyword não está
marcada como `feita`, ele devolve a mesma de novo.

---

### O ciclo que funcionou em 18/09/2026, do zero às 10 ferramentas

Com IA nenhuma disponível (Groq no teto diário), a rotina que rendeu 10
páginas publicadas foi esta, em ondas:

1. `mine.py matrix <n>` nos domínios bons — reordene `seeds.json` antes, se os
   próximos da fila forem financeiros. Obra, consumo doméstico, agro e jogos
   rendem; dívida/cripto/consórcio não renderam nada.
2. `mine.py check <n> --filtro "<forma1>,<forma2>"` com formas de cálculo, não
   com o nome do domínio: `rende por metro quadrado`, `quantos litros`,
   `quantas <coisa> por metro quadrado`. A cabeça "calculadora de X" é sempre
   a mais saturada da família.
3. `triagem_manual.py --listar <n> --filtro "..."`, julgar lendo o top-3, e
   `--veredito` (ou um script curto que grava vários de uma vez).
4. Construir, escrever o JSON do conteúdo à mão, rodar a pipeline e commitar.

Rendimento real da onda: de ~45 keywords com SERP nova saíram 7 aprovadas.
Dois terços do custo foram créditos de Serper gastos em famílias erradas —
é aí que a escolha do filtro paga.

**Quando a ferramenta precisa de um coeficiente que ninguém publica** (o caso
da calibragem de pneu: pressão em função de peso e largura), escolha o
coeficiente calibrando contra faixas publicadas, deixe a calibragem escrita
num comentário do JS e repita em "o que essa conta não considera" que o número
é estimativa de partida, não especificação. Nunca apresente heurística como
norma.

**Pegadinha de log:** quando eu mesmo mando a saída para um arquivo com
`nohup ... > log`, o arquivo de output da task fica VAZIO até o comando
terminar. Leia o log diretamente (`tail -f` não, `tail` normal) em vez de
concluir que o processo travou.

---

## 2. Imagens (repo `~/Projects/wilson3/stockfarm`)

Quando o `batch` terminar:

```bash
cd ~/Projects/wilson3/stockfarm
python3 farm.py qc-pending      # caminhos das imagens novas
```

**Leia cada imagem** (ferramenta Read) com cabeça de moderador do Adobe.
Régua: reprove só defeito **claro** — geometria fundida, objeto
irreconhecível, padrão cortado no meio, peça derretida. Na dúvida, aprove:
rejeição é por asset e não pune a conta; o que mata a conta é banimento por
spam (variação do mesmo prompt).

```bash
python3 farm.py qc-ok <id> <id> ...
python3 farm.py reject <id> "motivo curto"
python3 farm.py finish           # keywords via Groq + empacota o lote
```

Entregue `upload/<lote>/` (JPGs + `metadata.csv`) e as linhas do portal que o
`finish` imprime. Quando ele confirmar o envio:

```bash
python3 farm.py done <lote>
python3 farm.py limpar
```

---

## 3. Um livro novo (repo `~/Projects/wilson3/kdpfarm`)

Um livro por dia, pedido dele em 18/09/2026. A fonte da verdade é o
`CLAUDE.md` do repo — **leia antes**; o resumo abaixo é para não pular etapa.
O repo **não é git** (nada de commit/push lá; o manuscrito só existe em
disco). O upload no KDP é manual e é dele.

### 3.1 Escolher o nicho

```bash
cd ~/Projects/wilson3/kdpfarm
python3 scripts/descobrir.py 5 --checar 120
python3 scripts/conferir.py "<a frase do topo>"
```

- `descobrir.py` **não tem `--help`**: qualquer argumento cai no fluxo normal
  e já gasta triagem de IA. Chame com os parâmetros de verdade.
- O ranking ORDENA, não prova. `conferir.py` vai na busca da Loja Kindle e é
  ele que decide: sem o aviso *"Nenhum resultado para X em Loja Kindle"*, os
  itens listados são concorrentes de verdade. **Na validação do repo, 2 de 3
  candidatos do topo caíram nessa etapa** — não pule.
- Os três vetos do farm de ferramentas valem aqui também, mais um: **demanda
  altíssima com zero oferta é o mercado avisando que o produto não deve
  existir** ("como desativar o instagram"). Tarefa de um minuto não vira
  livro.

### 3.2 Escrever

Um livro tem ~16 mil palavras em ~15 capítulos — é o item mais caro do
dia, mais caro que as 10 ferramentas juntas. A estrutura é o template
`livros/example/` (definida por ele em 18/09/2026):

```
livros/<slug>/chapters/NN-*.md   o manuscrito
livros/<slug>/<slug>.md          a FICHA DE PUBLICAÇÃO — o único arquivo que
                                 ele abre: Título, Subtítulo, Autor, Descrição
                                 (texto + HTML do KDP), Categorias, Keywords
livros/<slug>/<slug>.epub        sai do montar_epub.py
```

Sem meta.json, README, ficha de pesquisa nem descrição em arquivo separado.
**O trabalho dele é só o upload**: o manuscrito sai pronto — nunca pedir
revisão de capítulo, nunca deixar pendência editorial na ficha. Categorias: a
árvore da loja brasileira só existe no dropdown do painel do KDP — a ficha
sugere o caminho (ex.: Loja Kindle › Saúde, família e desenvolvimento pessoal
› Psicologia e aconselhamento) e ele confirma o nó.

Regras que o KDP cobra e que mudam o texto: conteúdo original paga 70% de
royalty (domínio público paga 35%), o teto é de 3 livros/dia por conta, e a
declaração de IA é obrigatória na caixinha interna do upload — **texto: sim**;
capa do Cover Creator não conta como imagem de IA.

### 3.3 Fechar o entregável

```bash
python3 scripts/montar_epub.py livros/<slug>
```

EPUB, não DOCX: é o formato que o Kindle já fala. Título, subtítulo e autor o
script lê da própria ficha. Entregue a ele o caminho da pasta do livro — a
ficha `<slug>.md` é o único arquivo que ele precisa abrir para copiar tudo
nas telas do painel.

**O mesmo EPUB sobe também na Google Play Books** (Partner Center,
`play.google.com/books/publish`) — ebook + **audiolivro auto-narrado em pt-BR
de graça** (um clique por título; ver memória `google-play-books-canal`).
Trava: livro em KDP Select NÃO pode estar lá — os livros daqui nunca entram
em Select. Depois do ebook ao vivo na conta dele, o audiolivro é criar e
publicar.

### 3.4 As cotas são compartilhadas

A triagem do kdpfarm usa a **mesma conta Groq** do ferramentas e o **mesmo
crédito de Serper**. Com 200.000 tokens/dia por modelo, as três frentes
competem. Ordem de prioridade quando o orçamento apertar:

1. conteúdo das ferramentas que já estão no ar (página sem texto é dano);
2. triagem do livro (uma rodada pequena, `--checar 60`);
3. triagem de keywords novas (é a que mais gasta e a mais adiável).

Se a Groq estiver no teto, vale aqui a mesma saída do §1: `cache/triagem.json`
é cache-first e a SERP da Amazon (`conferir.py`) **não usa IA nem Serper** —
dá para escolher o nicho na mão lendo as frases colhidas.

---

## 4. Fechamento

Relatório curto: quantas ferramentas foram ao ar (com as URLs), quantas
imagens passaram no QC e onde está a pasta do lote, e o caminho da pasta do
livro do dia. O que sobra para ele é **só o upload** — Adobe e KDP. Sem
pedidos de revisão: o manuscrito sai pronto.

---

## Manutenção desta skill

Esta skill é viva. Sempre que a rotina exigir algo que não está escrito aqui —
um passo novo, um erro recorrente, uma decisão que eu tive que tomar sozinho —
**atualize este arquivo no mesmo turno**. Ordem pedida pelo dono em
18/09/2026: a skill vem antes da execução e é corrigida durante ela.

## Rodando no Cowork (Claude Desktop)

Os passos acima foram escritos pro Claude Code; no Cowork a mecânica muda em
três pontos, o resto é igual:

- **Sem `run_in_background`**: comandos longos (`farm.py batch`) vão num
  terminal próprio, com o log aberto em arquivo — não confie em output de
  tarefa viva. O mesmo vale pro `kill`: terminal próprio, um comando só.
- **Memória é pasta em disco**: não existe a memória do Claude Code aqui. Os
  arquivos estão em
  `~/.config/claude/projects/-home-hashino-Projects-wilson3/memory/` — ler
  antes, escrever depois, atualizar o `MEMORY.md`.
- **Deploy é terminal normal**: `git add/commit/push` no repo que mudou, sem
  worktree nem permissão automática. Segurança de senha do git-crypt segue no
  `CLAUDE.md` do repo dotfiles.

Se esta sessão Cowork **não tiver terminal**, ela é só a metade do upload
(browser no portal do Adobe/KDP/Play com o login do dono) — a produção
continua na sessão Code.
