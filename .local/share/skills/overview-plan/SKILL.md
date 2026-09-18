---
name: overview-plan
description: List every incomplete item in a project's PLAN.md (or equivalent plan file) as an executive list — one name plus one layman-terms paragraph per item, with ready/blocked status. Use when the user asks for a big-picture view of what's left to build, a status overview, or "what remains in the plan".
---

# /overview-plan — executive view of the open plan

Deliverable: a single chat message listing every incomplete plan item so a
non-technical stakeholder understands what each one means. No analysis, no
decisions, no implementation — just the overview.

## 1. Find and inventory

Locate the plan file (`PLAN.md` by default; if several plausible candidates
exist, ask which one). List the open markers:

```
grep -n '^\s*- \[ \]' PLAN.md
```

Adapt to the project's marker convention if it differs. **Read each item's full
block**, not just the headline — and remember: **the newest dated note in a
block wins** over older prose. Note each item's state from those notes:
ready, partially delivered, or gated/blocked on something (name it).

## 2. Write the executive list

Numbered list, one entry per open item. Each entry:

- **The item's ID as the bold name** — the plan's own identifier for the
  item (e.g. `S22`, `§12.2 item 3`), exactly as cross-referenceable in the
  plan file. If an item has no explicit ID, use the shortest unambiguous
  locator (section + number). Add a short plain-words title after the ID
  only if one paragraph of description doesn't already make the topic
  clear.
- **One paragraph in layman's terms.** Translate mechanism into user-visible
  effect: what changes for the person *using* the app, not which module does
  it. No symbol names, no file paths, no architecture vocabulary. If the item
  is a refactor with no user-visible effect, say what it enables or protects
  in one honest sentence.
- **Status tag at the end**: `(pronto)` / `(parcialmente entregue)` /
  `(destravado por <item>)` / `(estacionado até <condição>)` — or the
  equivalent in the conversation's language.

Rules:

- **Write in the user's language** (this user: pt-BR).
- **Merge lines that are literally the same work** into one entry and say so
  in a sentence — an executive list that double-counts one task misleads.
- **Don't drop inconvenient items.** If the plan has 22 open lines, the list
  accounts for all 22, merged or not. Honesty about the count is the point.
- One paragraph each — resist multi-paragraph depth. Detail lives in the
  plan, not here.

## 3. Deliver in chat

The list is the reply — no file written unless asked, no follow-up questions,
no starting the work. If the plan was recently reviewed (/review-plan), the
status tags should be consistent with that review's notes.
