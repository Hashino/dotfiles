---
name: review-plan
description: Audit a project's PLAN.md (or equivalent plan/checklist file) against the actual code — mark delivered/obsolete items complete, resolve obvious decisions yourself, and bring only the real user decisions — until every open item is ready for unsupervised implementation. Use when asked to review/clean the plan, prepare it for autonomous execution, or after a big refactor/pivot that may have invalidated plan items.
---

# /review-plan — make the plan execution-ready

Goal state: after this skill runs, the plan file contains **only items ready to be
executed without supervision**. Everything else is marked complete with a dated
note saying why.

## 1. Inventory the open items

```
grep -n '^\s*- \[ \]' PLAN.md
```

Then **read each item's full block**, not just the line — plan items are long, and
**the newest dated note in a block wins over older prose**. If the project uses a
different marker convention (`[~]`, plain TODO lists), adapt; ask which file if
there's more than one candidate.

If the project has a CLAUDE.md that describes a plan/spec relationship, read it
first — some projects require SPEC and PLAN to stay in sync.

## 2. Verify against the code, never the plan text

Plan text goes stale in **both directions**: items claiming work is pending when
it has since been built, and items describing machinery that a later decision
**deleted**. For each item:

- Grep for the symbols/files/functions the item names. If the item says
  "`foo()` does X", check `foo` still exists and still does X.
- Check whether a dated decision note elsewhere in the plan (or in the SPEC)
  already invalidated the item's premise — pivots routinely orphan whole slices.
- Prefer live evidence over inference: read the function, run the test list,
  look at persisted data if the item is about behavior.

Never mark an item complete based on the plan's own claims about what was
"implemented" — verify the symbol exists.

## 3. Classify each open item

| class | meaning | action |
|---|---|---|
| DELIVERED | the work exists in code (verified) | tick `[x]`, dated one-line note naming the slice/commit |
| OBSOLETE | a later dated decision removed its premise | tick `[x]`, note **which decision** superseded it — keep the original text for history |
| READY | actionable now, no open decision | leave `[ ]`, append a short note recording any resolution made in step 4 |
| GATED | actionable only after X | leave `[ ]`, note the explicit precondition (e.g. "blocked on instrumentation") |
| NEEDS-USER | genuine product decision | collect for step 5 |

**What to resolve yourself (obvious decisions):** engineering shape only,
semantics already co-designed earlier in the plan, spec-mandated gaps, low-risk
reversible knobs, choice between equivalent implementations. Record the
resolution as a dated note so the user can veto it later.

**What always goes to the user:** anything that changes spend/user cost, changes
a product surface or UX behavior, has legal or monetization implications,
reverses an earlier explicit user decision, or that a memory file explicitly
says "needs sign-off". When in doubt on a reversal — ask; when in doubt on
plumbing — decide.

## 4. Ask the real decisions

Batch the NEEDS-USER items into `AskUserQuestion` rounds (max 4 questions per
round). For each question:

- **Layman's terms**: describe the decision so someone with zero familiarity
  with the codebase's architecture understands what changes for them. No symbol
  names, no module jargon in the question text.
- **At least 2 concrete one-line suggestions** as the options. Option label =
  a few words; description = the one-line trade-off (what you get / what it
  costs). Include a "status quo / decide later" option when keeping the item
  parked is legitimate.
- **Ask in the user's language** (this user: pt-BR).
- If there are more than 4 real decisions, rank by how much they unblock and
  ask the top 4 first — but don't manufacture decisions to fill the batch.

## 5. Apply everything

- Tick `[x]` on DELIVERED/OBSOLETE with a dated note: one bolded sentence of
  *why* (which slice/commit/decision), not paragraphs. Strike through the item
  text with `~~` only when the item is cancelled (never when delivered).
- Append resolution notes to items that stay open.
- If a decision also resolves an entry in the project's open-decisions section
  (SPEC §16-style), record it **there too** — docs must not diverge.
- Respect the file's existing conventions: dated notes, ENTREGUE/OBSOLETA
  markers, language (this project: Portuguese with English terms inline).

## 6. Commit and report

Commit the plan (and spec, if touched) with the repo's message conventions.
Then report, in three short lists:

1. **Marked complete** — item + one-line reason.
2. **Self-resolved** — the decisions you made yourself, stated plainly so the
   user can veto any of them.
3. **Still open** — each with its state: ready / gated-on-what.

Don't start implementing the open items — this skill's deliverable is the
cleaned plan, not the work itself.
