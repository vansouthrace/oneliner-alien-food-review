import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Star, Five Stars for the Food: an alien tourist's one-star review of
// Earth that still slips in a real compliment about the food. The grievance
// is genuinely alien — free air, billed water — and the turn is the joke:
// the broth is so good it justifies the invasion.
const ENTRY =
  "One star: Earth makes me breathe its air for free then bills me for water, but the ramen broth alone justifies the invasion.";

// The gate wants 1-200 characters, a single sentence, nothing else.
if (ENTRY.length > 200 || ENTRY.split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("entry must be one sentence of at most 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
