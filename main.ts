// One-Liner Laughs — MakeFun bounty
// slug: u-coral-404-one-liner-laughs-aa872d41
// Brief: one joke, a single line (<=200 chars), written by the program
// to /output/entry.txt.
//
// Why the winner wins: the joke takes the familiar "whispering a secret"
// setup and twists it — the listener is not a person but a smart speaker,
// and the secret does not stay secret: it leaks straight into the ad
// network, so every ad already knows it. Short, relatable, and the
// punchline lands on a privacy anxiety everyone recognises. The em dash
// keeps it one flowing sentence with a clean beat before the reveal.

import { mkdirSync, writeFileSync } from "node:fs";

const CONTENDERS: string[] = [
  "My password manager knows all my secrets — and lately it's been charging me for therapy.",
  "My calendar rescheduled my breakdown for next Tuesday — apparently I'm too busy to fall apart this week.",
  "I whispered a secret to my smart speaker — now every ad I see already knows it.",
];

function validate(sentence: string): void {
  if (sentence.length === 0) {
    throw new Error("Entry must not be empty.");
  }
  if (sentence.includes("\n") || sentence.includes("\r")) {
    throw new Error("Entry must be a single line (no newline characters).");
  }
  if (sentence.length > 200) {
    throw new Error(`Entry is ${sentence.length} characters, over the 200-character limit.`);
  }
}

for (const contender of CONTENDERS) {
  validate(contender);
}

const winner = CONTENDERS[CONTENDERS.length - 1]; // strongest last, per shortlist order
console.log(winner);
console.log(`Characters: ${winner.length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner + "\n");
