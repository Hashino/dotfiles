---
name: upload
description: Sobe a produção do dia nos portais — lote de imagens no Adobe Stock, livro no KDP e na Google Play Books, audiolivro auto-narrado. Use no Cowork (Claude Desktop) quando ele pedir "/upload", "sobe o lote", "sobe o livro" ou "faz os uploads de hoje". A produção é da sessão Code; esta skill é só a metade de upload.
---

# /upload — a metade de upload da rotina

Você está no Cowork, no computador dele. O browser embutido tem os logins das
fazendas — quem digita senha, 2FA e captcha é o DONO, nunca você. Você navega,
preenche, arrasta arquivo e confirma; ele autentica. Nunca peça nem repita
senha em conversa.

Fontes em disco (sede: `~/Projects/wilson3`):

| o quê | onde |
|---|---|
| lote de imagens | `stockfarm/upload/lote-AAAAMMDD/` — N `.jpg` + `metadata.csv` |
| livro do dia | `kdpfarm/livros/<slug>/` — ficha `<slug>.md` + `<slug>.epub` |
| o que sobe hoje | pergunte se não óbvio: o lote mais recente em `upload/`, o único livro em `livros/` |

A ficha do livro é a fonte de verdade de tudo que entra no painel: título,
subtítulo, autor, descrição (texto + HTML), categorias e as 7 keywords.
Copie dela, não invente.

## 1. Adobe Stock (contributor.stock.adobe.com)

1. Upload → **Content** → arraste os `.jpg` do lote (só os JPG; o csv não vai).
2. Para cada imagem, abra a linha no `metadata.csv` e preencha:
   **Title** (do csv), **Keywords** (do csv, já em inglês), **Category**
   (número do csv).
3. Em cada imagem: marque **"Created using generative AI"**.
4. Confira contagem (linhas do csv = imagens enviadas) → **Submit**.
5. Se o painel recusar alguma (motivo aparece na tela), anote e NÃO reenvie —
   reporte; a reprovação vira `farm.py reject` na sessão Code.

## 2. KDP (kdp.amazon.com)

1. Bookshelf → **Adicionar novo título** (ou "+"). Idioma: **Português**.
2. Detalhes: título, subtítulo e autor da ficha. Descrição: cole a **versão
   em HTML** da ficha. Palavras-chave: os 7 campos. Categorias: escolha no
   dropdown seguindo as 3 sugestões da ficha (o nó exato é o que aparece lá).
3. **Declaração de IA**: pergunte de IA/texto → **SIM** (texto é gerado por
   IA; capa do Cover Creator não conta como imagem de IA).
4. Manuscrito: upload do `<slug>.epub`. Capa: **Cover Creator** (fundo
   simples, título/subtítulo/autor da ficha).
5. Preço: faixa de royalty de 70%, preço sugerido na ficha se houver;
   territórios: todos os direitos.
6. **Publicar**. A revisão da Amazon leva até 72h — status "Em revisão" é
   sucesso, não erro.

## 3. Google Play Books (play.google.com/books/publish)

1. **Adicionar livro** → upload do mesmo `<slug>.epub` → confira os metadados
   puxados do EPUB contra a ficha → preço (paridade com o KDP) → publicar.
2. Com o ebook ao vivo: **Criar audiolivho auto-narrado** → idioma
   **Português (Brasil)** → voz (uma só, neutra, consistente entre livros) →
   ouça o trecho de 30s → publicar.
3. TRAVA INEGOCIÁVEL: se algum livro estiver inscrito no **KDP Select**, ele
   NÃO pode estar aqui. Livro da fazenda nunca entra em Select.

## Fechamento

Depois que o dono CONFIRMAR que os uploads apareceram nos painéis (fila Adobe,
"Em revisão" no KDP, processando na Play), rode no terminal:

```bash
cd ~/Projects/wilson3/stockfarm && python3 farm.py done lote-AAAAMMDD && python3 farm.py limpar
cd ~/Projects/wilson3/kdpfarm && python3 scripts/limpar.py
```

Isso marca o lote como enviado e apaga o que já cumpriu papel. Sem a
confirmação dele, NÃO rode — upload que falhou em silêncio não pode virar
arquivo apagado.

Relatório: o que subiu, o que foi recusado e o que ficou pendente de conta
(2FA, captcha, dado fiscal). Pendências de produção são da sessão Code — não
tente consertar aqui.
