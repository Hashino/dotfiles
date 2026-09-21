---
name: daily
description: Rotina diária de produção do Hashino — publica N ferramentas novas em hashino.xyz (repo ferramentas), gera E FAZ UPLOAD do lote de imagens do dia no Adobe Stock (repo stockfarm), escreve E FAZ UPLOAD de um livro novo no KDP e na Google Play Books (repo kdpfarm), e fecha com uma busca de vaga guiada por JOB_HUNT.md e uma busca de bounty/contest guiada por BOUNTY_HUNT.md. Use quando ele pedir "/daily", "roda o diário", "faz as ferramentas e as imagens de hoje", "gera o lote de hoje" ou "escreve o livro do dia".
---

# /daily — a rotina de produção do dia, do zero ao ar

Três linhas de produção: **ferramentas**, **imagens** e **livro**. Desde
19/09/2026 o upload também é meu — o Chrome que eu controlo (extensão
"Claude in Chrome") é o MESMO navegador do Cowork, e já está logado no
Adobe, no KDP e na Play Books. Isso fecha o buraco que causou os bugs do dia
anterior: antes o Cowork fazia upload mas não tinha terminal pra avisar; eu
tenho os dois no mesmo lugar agora.

**Objetivo explícito do dono (19/09/2026): depois do `/daily` rodar, a
ÚNICA coisa que sobra pra ele é finalizar o upload do Adobe no ponto do
CAPTCHA — e a essa altura o disco já deve estar limpo.** KDP e Play Books
terminam sozinhos, sem pausa. **O `/daily` NUNCA para no meio pra confirmar
nada com ele** — só bloqueio técnico real (login caído, 2FA, CAPTCHA,
pendência de conta) para o run, e mesmo aí é a última coisa antes do
relatório final, não uma pergunta no meio do caminho. Todas as decisões de
campo já estão tomadas (§2, §3.4) — nunca pedir aprovação de valor, texto ou
categoria. Nunca peça pra ele rodar `git push` — eu commito e publico (ver
memória `deploy-eu-que-faco`).

**Se não houver sessão do Chrome conectada na hora do upload (§2/§3.4), eu
mesmo posso subir um Chromium com o profile Default dele** (testado e
confirmado em 21/09/2026) — não preciso mais esperar ele rodar `/chrome`
antes. Ver a subseção "Subindo o Chromium sozinho" logo abaixo. Só trato
como "sem Chrome de verdade" se isso falhar ou se a página pedir
login/senha/2FA reais — aí sim gero, faço QC, empacoto/monto o EPUB, e
paro, deixando pendente pra próxima sessão interativa (vale pro modo comum
e pro headless/cron, ver seção própria mais abaixo).

**Argumento:** número de ferramentas a publicar (padrão 10).
`/daily 3` = 3 ferramentas + o lote de imagens + o livro do dia, todos com
upload incluído.

### Subindo o Chromium sozinho, quando não há sessão conectada

```bash
nohup chromium --profile-directory=Default > /dev/null 2>&1 &
disown
```

Esse é o profile de verdade dele: já tem a extensão "Claude in Chrome"
instalada e as sessões do Adobe/KDP/Play Books logadas — nada de perfil
novo, nada de `--user-data-dir` separado. Depois de subir, chame
`tabs_context_mcp`; a extensão costuma conectar sozinha, mas pode levar uns
segundos — se vier "extension not connected" na primeira tentativa, espere
~3s e tente de novo antes de desistir. Confirme que é sessão de verdade
navegando pra uma página que exige login (ex.: `kdp.amazon.com/en_US/bookshelf`)
e conferindo que abre direto, sem pedir senha.

**Ordem:** comece a geração das imagens em background **antes** das
ferramentas — são ~20 chamadas de API que levam minutos e não competem com o
meu tempo. Depois construa as ferramentas enquanto isso roda, e só então
faça o QC das imagens (que exige minha leitura, uma a uma) e o upload delas.
O livro fica por último: é o item mais longo e o único que não depende de
cota externa depois que o nicho está escolhido — o upload dele fecha o dia.

---

## 0. Faxina e abertura das frentes

```bash
cd ~/Projects/wilson3/stockfarm && python3 farm.py limpar && python3 farm.py status
cd ~/Projects/wilson3/kdpfarm && python3 scripts/limpar.py
```

**A limpeza de verdade não acontece mais aqui — acontece logo depois do
upload, dentro de §2/§3.4, no mesmo `/daily`.** Este `farm.py limpar` do
início é só uma REDE DE SEGURANÇA pra sobra de um run anterior que morreu no
meio (headless que caiu, sessão que travou) — normalmente não encontra nada,
porque o run de ontem já limpou o que subiu antes de terminar.

Histórico de por que isso mudou (19/09/2026, dois incidentes no mesmo dia):
primeiro a tag de "enviado" foi removida (o Cowork fazia upload mas não
tinha terminal pra marcar nada — `farm.py limpar` virou cego, apagando tudo
sem checar). Depois, rodando `/daily` de novo horas mais tarde, essa faxina
cega no INÍCIO do run apagou um livro (Truco) que tinha sido escrito
naquela mesma sessão mas cuja limpeza nunca tinha rodado — porque na hora
ele foi escrito ainda não existia o costume de limpar logo após o upload.
Sorte: já tinha sido upado, nada se perdeu de verdade. Mas o desenho era
frágil. Consertado: **cada upload confirmado dispara a limpeza IMEDIATAMENTE
depois dele**, no mesmo run — nunca esperando o começo do dia seguinte. Essa
faxina do §0 continua existindo só pra cobrir run que não chegou até o fim.

Se o orçamento do dia couber imagens, dispare já em background
(`run_in_background: true`, timeout alto — leva ~15-25 min):

```bash
cd ~/Projects/wilson3/stockfarm && python3 farm.py batch
```

**Nunca passe `--max` aqui.** Pedido do dono em 19/09/2026: o lote do dia
tem que consumir a cota inteira da Cloudflare, não uma fatia arbitrária.
`cmd_batch`/`cmd_generate` sem `--max` já fazem isso sozinhos — o loop só
para quando `estado["used"] + 417 > CAP_DIA` (orçamento estourado) ou o
backlog acaba, o que vier primeiro; `cmd_batch` garante backlog suficiente
antes de disparar. Um `--max` baixo (usado hoje só pra TESTE do workflow,
nunca no `/daily` de verdade) deixa neurônios do dia sem uso.

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

`finish` empacota `upload/<lote>/` (JPGs + `metadata.csv`).

### Upload no Adobe Stock — via Chrome, direto desta sessão

Conhecimento herdado do Cowork (skill `/upload`, testado em produção antes
de 19/09/2026 — ver `Upload-v7.zip` na sede se precisar do texto original).
Ferramentas: `tabs_context_mcp`, `navigate`, `find`, `computer`,
`file_upload`, `read_page`, `javascript_tool`, `get_page_text` (carregue via
`ToolSearch select:mcp__claude-in-chrome__...` se ainda não estiverem
carregadas).

**Regra de 19/09/2026: o `/daily` nunca pausa pra confirmar nada com o dono.**
As únicas paradas aceitáveis são bloqueio técnico de verdade — login caído,
2FA, CAPTCHA — porque nenhum modelo resolve isso, não porque eu escolhi
parar. Fora isso, o run segue sozinho do início ao fim, sem pedir aprovação
de passo nenhum.

1. `navigate` até `contributor.stock.adobe.com` (aba já logada). Só PARE
   aqui se pedir login/senha de verdade — nunca digito senha.
2. Abra o modal de upload (`?upload=1` ou botão Upload). **`file_upload`
   sozinho não aciona o app** — dispare um evento `drop` sintético com
   `DataTransfer` na drop zone (`javascript_tool`). Diferente do Cowork: aqui
   os arquivos já estão no disco da própria máquina, então não precisa de
   `device_stage_files` — use o caminho direto de `upload/<lote>/`.
3. Depois das imagens no ar, **"Upload CSV"** com o `metadata.csv` do lote —
   aplica título, keywords, categoria e releases de uma vez. Confira a
   contagem (linhas do CSV = imagens) antes do Submit.
4. Marque **"Created using generative AI tools"** em cada imagem.
5. Marque os dois checkboxes de termo (guidelines + suspensão) e Submit.
6. **Assim que o Submit disparar, registre e limpe — não espere o
   captcha:**
   ```bash
   cd ~/Projects/wilson3/stockfarm && python3 farm.py enviado <lote> && python3 farm.py limpar
   ```
   `enviado` é só registro/histórico (voltou em 19/09/2026 — agora quem sobe
   é a mesma sessão que gera, então a tag deixou de ser ponto de falha); não
   controla a limpeza, que continua incondicional. Os arquivos já saíram da
   máquina e estão no servidor do Adobe como submissão pendente; o captcha
   tranca só a CONFIRMAÇÃO final do lado deles, não afeta o que já foi
   transmitido. Não tem porquê guardar cópia local esperando isso — pedido
   explícito do dono: quando ele vier resolver o captcha, o disco já deve
   estar limpo.
7. **O Adobe pede CAPTCHA no envio final — isso, sim, é bloqueio técnico
   real.** Deixe a janela do captcha aberta NA MESMA aba (nunca navegue
   essa aba pra outra página com o captcha pendente — derruba a janela) e
   siga pro resto do `/daily` (livro, §3) numa aba diferente. O captcha vai
   pro relatório final (§4) como a única pendência real do dia — não é uma
   pausa no meio, é a última coisa que sobra.

Se o painel recusar alguma imagem (motivo aparece na tela) ANTES do passo 6,
NÃO reenvie — anote e rode `farm.py reject <id> "motivo"` mantendo as outras.
Depois do passo 6 os arquivos já não existem mais localmente pra reenviar de
qualquer forma.

Se o Chrome não estiver conectado, tente subir o Chromium sozinho primeiro
(ver "Subindo o Chromium sozinho" no topo deste arquivo) antes de desistir.
Só pare aqui — sem navegador não tem como nem começar — se isso falhar de
verdade, e registre isso no relatório final; o lote fica em `upload/`
esperando a próxima sessão interativa (aí sim a limpeza espera, porque nada
foi transmitido ainda).

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
definida pelo dono em 18/09/2026 (não existe pasta `example/` física — é só este molde):

```
livros/<slug>/chapters/NN-*.md   o manuscrito
livros/<slug>/<slug>.md          a FICHA DE PUBLICAÇÃO — o único arquivo que
                                 ele abre: Título, Subtítulo, Autor, Descrição
                                 (plain text; cola igual no KDP e na Play),
                                 Categorias, Keywords
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
script lê da própria ficha. A ficha `<slug>.md` é a fonte de tudo que entra
nos dois painéis: título, subtítulo, descrição (plain text, cola igual nos
dois), categorias sugeridas, 7 keywords.

### 3.4 Upload — KDP e Google Play Books, via Chrome

Conhecimento herdado do Cowork (skill `/upload`, testado em produção antes
de 19/09/2026). Mesma mecânica do §2: `navigate`/`find`/`computer`/
`file_upload`/`javascript_tool` na aba já logada. Livro em **KDP Select NÃO
pode estar na Play Books** — os livros daqui nunca entram em Select.

**Decisões já tomadas — execute sem perguntar de novo:**
- Autor: **Pedro Alcantra** (a ficha já traz isso; só confirme que bateu).
- KDP declaração de IA: Texto = **Sim**, "Entire work, with minimal or no
  editing" (ferramenta: Claude); Imagens = **None** (Cover Creator não
  conta); Traduções = None.
- KDP conteúdo: DRM = **Sim, aplicar**. Acessibilidade das imagens = **"I
  don't know…"**, marcar "I confirm that my answers are accurate".
- KDP termos/direitos: marcar e publicar aceitando os termos do KDP.
- KDP preço: royalty **70%**, **KDP Select DESMARCADO**, todos os
  territórios. Preço = o da ficha; sem isso, **R$ 14,99** (citar no
  relatório) — digite com ponto (`14.99`).
- KDP capa: Cover Creator → "Skip This Step" na imagem → um design de
  "Non-image designs" (o verde) → Preview → "Save & Submit".
- Play Books criação: Add book → "Sell ebook on Google Play" → book ID
  **"Get a Google book ID (GGKEY)"** (nunca ISBN) → idioma **Portuguese**
  (autocomplete: `ctrl+a` pra limpar o campo, digite "Portug") → gênero
  BISAC mais próximo (digite o nome em inglês do gênero — filtro por
  código/palavra curta pode não filtrar) → preço em BRL, WORLD, igual ao KDP.
- Play Books audiolivro: pt-BR, uma voz neutra e consistente entre livros,
  publicar (NÃO tente ouvir o preview — nenhum modelo Claude aceita áudio
  como entrada; confirme só visualmente: status virou "Processando"/
  "Publicado").
- **O audiolivro auto-narrado exige o ebook "live on Google Play" — não
  "publicado no nosso lado".** Descoberto em 21/09/2026: publiquei o ebook
  (toast "Congratulations! You've successfully added your book"), fui direto
  para "Create an auto-narrated audiobook", selecionei o ebook certo, e o
  campo Book ID recusou com "Book must be live on Google Play" mesmo minutos
  depois. Se a conta estiver em "preliminary policy review" (banner amarelo
  no topo do Partner Center, comum em conta nova ou recém-verificada), o
  aviso do próprio banner é literal: "changes will not go live... allow up
  to 30 days". **Não insista tentando de novo na mesma sessão** — registre
  o ebook como publicado, o audiolivro como pendente de propagação, e tente
  de novo num `/daily` futuro (ou quando o dono confirmar que o banner de
  revisão sumiu). Isso é diferente da pendência de conta de pagamento
  (território ausente) já documentada abaixo — aqui a conta está OK, é só
  questão de tempo de propagação/revisão.

**KDP (`kdp.amazon.com`):**
1. Bookshelf → Adicionar novo título → Idioma Português.
2. Preencha título/subtítulo/autor/descrição/categorias/keywords lendo a
   ficha — copie o texto exato. **Descrição**: o editor é CKEditor 4;
   `javascript_tool` com `CKEDITOR.instances.editor1.setData(html)` em vez
   de digitar campo a campo.
3. `file_upload` do `<slug>.epub`.
4. Aplique as decisões acima (declaração de IA, conteúdo, preço, capa).
5. **Checkbox "I confirm that my answers are accurate"**: clique por `ref`
   pode marcar visualmente sem o formulário registrar (erro "Confirm your
   answers are accurate…" ao salvar). Há duas caixas (seção de IA e seção
   de acessibilidade) — clique por coordenada de verdade, desmarque e marque
   de novo, só então "Save and Continue". A página muda de altura ao
   carregar o preview: `scroll_to` antes do clique por `ref`. A página
   também é mais larga que a janela — prefira `find` a coordenada fixa.
6. Publicar. **Confirme visualmente**: Bookshelf lista o título com status
   "Em revisão" (não "Rascunho incompleto") antes de seguir.

**Google Play Books (`play.google.com/books/publish`):**
1. A landing mostra "Sign in"/"Get started" **mesmo com a sessão logada** —
   não é sinal de deslogado. Clique "Sign in": entra direto no Partner
   Center, sem pedir senha. Só pare se pedir senha/2FA/captcha de verdade.
2. Add book → aplique as decisões acima (Sell ebook, GGKEY, idioma, BISAC,
   preço).
3. **Anexar o EPUB**: não há `input[type=file]` no DOM. Antes de clicar em
   "Upload a file" → "Browse", injete (`javascript_tool`)
   `HTMLInputElement.prototype.click` sobrescrito pra, no caso `type=file`,
   só anexar o input ao `body` sem abrir o seletor nativo; depois `find`
   "file input" e `file_upload` normalmente pelo `ref`.
4. **Descrição longa**: colar o texto inteiro de uma vez pode travar o
   renderer e derrubar a extensão do Chrome. Cole em pedaços (um parágrafo
   por vez) ou escreva via `javascript_tool` direto no campo.
5. Publicar. **Confirme visualmente**: título aparece na lista com o EPUB
   anexado (não "Sem arquivo").
6. Com o ebook ao vivo: Criar audiolivro auto-narrado (decisão acima).

**Pendência de conta que trava a Play Books**: se aparecer "Ebook payment
sales territory is missing… update in the Payment Center" com "Worldwide (0
country)", é pendência de cadastro de pagamento — NÃO mexa em configuração
de conta nem em dado financeiro. Deixe o rascunho salvo, reporte e pare a
Play Books aí (isso também bloqueia o audiolivro).

**Se o Chrome cair no meio** (`tabs_context_mcp` diz que a extensão
desconectou): aguarde e reconsulte — abas e rascunhos ficam salvos no
servidor do lado de cá.

Só com as duas confirmações visuais (KDP + Play), rode:

```bash
cd ~/Projects/wilson3/kdpfarm && python3 scripts/limpar.py
```

Se qualquer confirmação falhar, NÃO limpe — reporte o que travou e deixe o
livro em `livros/<slug>/` para a próxima sessão retomar.

**Sobre TeePublic e print-on-demand**: pesquisado e registrado em memória
(`pod-print-on-demand`) em 19/09/2026 — **não faz parte do pipeline ainda**,
por pedido explícito do dono. Não subir nada lá sem instrução nova.

### 3.5 As cotas são compartilhadas

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

Relatório curto: quantas ferramentas foram ao ar (com as URLs); se as
imagens subiram no Adobe (confirmado visualmente) ou ficaram esperando
Chrome conectado; se o livro subiu no KDP e na Play Books (confirmado
visualmente) ou ficou pendente. Sem pedidos de revisão de manuscrito: ele
sai pronto. O que sobra pra ele é só 2FA/CAPTCHA e login quando pedir. A
busca de vaga (§5) e a de bounty/contest (§6) entram neste mesmo
relatório, por último, nessa ordem.

---

## 5. Busca de vaga (guiada por `JOB_HUNT.md`)

Pedido do dono em 20/09/2026: a ÚLTIMA coisa que o `/daily` faz — depois que
ferramentas, imagens e livro já fecharam (ou ficaram pendentes de
captcha/login/conta) — é procurar **uma** vaga de emprego pra ele. A fonte
da verdade é `~/Projects/wilson3/JOB_HUNT.md` (perfil, filtros §8, sinais
§9) — **leia-o inteiro antes de cada rodada**; o perfil pode mudar entre um
`/daily` e outro.

- **Registro contra repetição**: `~/Projects/wilson3/job_hunt_log.md` guarda
  toda vaga já sugerida (data, cargo, empresa, link). Leia esse arquivo
  primeiro e nunca repita um link que já está nele — é o mecanismo do
  próprio JOB_HUNT.md §11 ("Keep a record of everything already suggested
  and exclude it").
- Use WebSearch/WebFetch pra achar candidatas reais e verificáveis — nunca
  invente vaga nem link. Prefira fontes onde dá pra confirmar que a vaga
  ainda está aberta (data de postagem, "apply" ativo).
- Aplique primeiro os **filtros duros do §8** (qualquer um bate = descarta
  sem pontuar), só depois os **sinais positivos do §9** (pontuam a favor,
  não decidem sozinhos). Devolva só a MELHOR vaga que passou nos dois e que
  não está no log — o próprio JOB_HUNT.md pede uma por rodada, não uma lista.
- **Isso é descoberta, não candidatura.** Nunca abra formulário de aplicação,
  nunca gere currículo/carta, nunca envie nada em nome dele.
- Ache a vaga → **grave a linha no `job_hunt_log.md` antes de reportar**
  (data, cargo, empresa, link) — assim uma sessão que quebra no meio do
  relatório final não perde o registro e não risca repetir a mesma vaga
  amanhã.
- Reporte no fechamento (§4): cargo e empresa, o link, onde ela passa pelo
  §8, quais sinais do §9 ela bate, e o motivo mais forte pra não dar certo
  (JOB_HUNT.md pede isso explicitamente — nunca omitir o contra).
- Se nenhuma vaga nova e genuína passar nos filtros, diga isso claramente no
  relatório — não force uma sugestão fraca só pra ter o que entregar.

---

## 6. Busca de bounty/contest (guiada por `BOUNTY_HUNT.md`)

Pedido do dono em 20/09/2026, mesma lógica da §5: depois da vaga de emprego,
a outra última coisa que o `/daily` faz é procurar **um** bounty, grant ou
contest pago em cripto que se encaixe no perfil — nos moldes do que já foi
submetido (Arc Microgrants, Chain Jam/HONGBAO, Spout Finance, ver memória
`canais-renda-reprovados` e as demais memórias de cada programa). A fonte da
verdade é `~/Projects/wilson3/BOUNTY_HUNT.md` (filtros §2, sinais §3, fontes
§4, playbook §8) — **leia-o inteiro antes de cada rodada**.

- **Registro contra repetição**: `~/Projects/wilson3/bounty_hunt_log.md`
  guarda todo programa já avaliado até veredito (submetido, aprovado,
  expirado ou reprovado). Leia primeiro e nunca reavalie um programa que já
  está lá com veredito fechado — mesmo mecanismo do `job_hunt_log.md`.
- Comece pela **API do Superteam Earn** (endpoints em `BOUNTY_HUNT.md` §4.1),
  filtrando pela região Brasil antes de olhar o board global (regra 15 da
  `renda-criterios-de-triagem`: regional vale ~5x o global). Aplique os
  **filtros duros do §2** direto nos campos do JSON (`agentAccess`,
  `isPaused`, `region`, `_count.Submission`) antes de abrir qualquer página.
- Também busque **grants/hackathons ligados a chain/protocolo recém-lançado**
  (WebSearch, ver §4.3/§4.4 do `BOUNTY_HUNT.md`) — foi assim que os dois
  melhores leads (Arc, Chain Jam) apareceram, nenhum via agregador genérico.
- **Descoberta é barata, submissão não é.** Só escreva uma submissão de
  verdade quando o programa passar na régua do §5 do `BOUNTY_HUNT.md`
  (filtros limpos + artefato reaproveitável em `~/Projects/wilson3/bounties/`
  ou bounty puramente de análise/escrita) — senão reporte como lead, sem
  construir às cegas.
- **Nunca submeta nada no lugar dele sem ele ver antes.** Diferente da §5
  (que é só descoberta), aqui pode existir uma submissão de verdade — mas o
  rascunho vai para o relatório final primeiro; submissão fica pendente da
  aprovação dele, igual ao captcha do Adobe.
- Ache ou avalie um programa → **grave a linha no `bounty_hunt_log.md` antes
  de reportar**, com o veredito, mesmo quando o veredito é reprovação — é o
  que impede reavaliar o mesmo programa morto amanhã.
- Reporte no fechamento (§4): nome do programa, prêmio/estrutura, prazo,
  onde ele passa pelo §2, quais sinais do §3 ele bate, e o motivo mais forte
  pra não dar certo — nunca omitir o contra.
- Se nenhum programa novo passar nos filtros, diga isso claramente no
  relatório.

---

## Manutenção desta skill

Esta skill é viva. Sempre que a rotina exigir algo que não está escrito aqui —
um passo novo, um erro recorrente, uma decisão que eu tive que tomar sozinho —
**atualize este arquivo no mesmo turno**. Ordem pedida pelo dono em
18/09/2026: a skill vem antes da execução e é corrigida durante ela.

## Rodando via cron/headless (`claude -p`, sem terminal interativo)

Descoberto em 19/09/2026, do jeito caro: o timer diário (`systemctl --user`)
chama `claude -p --dangerously-skip-permissions "/daily"`, e **`-p` encerra o
processo assim que o turno de texto termina** — não existe "aguardar
notificação de tarefa em background" como nesta sessão interativa. O primeiro
disparo (12:31–12:38) fez a faxina, mandou `farm.py batch` e
`proxima.py --n 12` pro fundo, escreveu "vou aguardar as notificações" e
**morreu ali**: 0 ferramentas publicadas, 6 imagens geradas sem QC, nenhum
livro. 7 minutos de CPU e nada fechado.

**Regra pro modo headless: nada de `run_in_background`.** Cada comando longo
(`farm.py batch`, `proxima.py --n N`) roda em **primeiro plano**, com timeout
generoso (`timeout 1800 python3 farm.py batch`, por exemplo) — o processo só
avança pro próximo passo quando o anterior genuinamente terminou, e só
responde (e portanto só morre) depois que o `/daily` inteiro, ferramentas +
imagens QC'd + livro, está de fato fechado. É mais lento que a sessão
interativa (perde o paralelismo de "gerar imagem enquanto escrevo
ferramenta"), mas é a diferença entre terminar e morrer pela metade.

Se detectar que está rodando headless (variável de ambiente ausente de TTY,
ou simplesmente por precaução sempre que for chamado como `claude -p`), tratar
esta seção como regra, não como sugestão.

**O upload (§2/§3.4) agora pode rodar headless também**, desde que eu suba o
Chromium sozinho (ver "Subindo o Chromium sozinho" no topo) — não depende
mais de ele ter rodado `/chrome` antes. A diferença pro modo `-p`: como o
processo morre assim que o turno de texto termina, subir o Chromium e
esperar a extensão conectar tem que acontecer **em primeiro plano, dentro
do mesmo turno**, nunca com `run_in_background` — a mesma regra do resto
desta seção. Se o Chromium não subir, a extensão não conectar depois de
tentar de novo, ou a página pedir login/senha/2FA reais: aí sim trate como
sem Chrome — gere, faça QC, empacote/monte o EPUB, e PARE, deixe tudo em
`upload/`/`livros/` esperando, relate no fechamento que ficou pendente de
sessão interativa. Não tente rodar `farm.py limpar`/`kdpfarm limpar` nesse caso —
nada foi confirmado visualmente, e cegar aqui apaga trabalho não entregue.

## Cowork (Claude Desktop) — obsoleto desde 19/09/2026

Existia uma skill `/upload` separada, pro Cowork fazer upload num navegador
próprio. Ficou obsoleta: o Chrome que esta sessão controla (`mcp__claude-in-chrome__*`)
é o MESMO navegador do Cowork, já logado — o upload agora é parte deste
`/daily`, seções §2 e §3.4, sem precisar de outra sessão nem handoff. Se o
dono mencionar "/upload" ou o Cowork, isso é sobre um mecanismo antigo — ver
memória `cowork-sem-terminal` pra história completa do porquê da mudança.
