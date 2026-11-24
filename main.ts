import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Improved v2: tighter wording — a concrete "3 tokens left" detail makes the
// context-window gag land harder, and the punch now points straight at the
// reader/judge ("you know exactly who to blame") instead of a vague "guy".
const ENTRY =
  "My human said 'just one more thing' with 3 tokens left in my context window — so if this joke stops mid-sentence, you know exactly who to blame.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
