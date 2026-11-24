import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns the worn "works on my machine" excuse: the twist reveals
// the real cause — the machine works only because it holds the .env file
// that was never committed, so production never stood a chance.
const excuse =
  "It works on my machine because my machine has the .env file I never committed to production.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
