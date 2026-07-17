"use client";

import { useState } from "react";
import { Sparkles, SendHorizonal } from "lucide-react";
import { faqs } from "@/lib/data";

const suggestions = [
  "How do I start playing?",
  "What are the basic rules?",
  "How do I become a member?",
  "Is it good for kids?",
];

/** Lightweight on-device assistant: keyword-matches the question to our FAQ
 *  knowledge base. No external API — instant, private, always available. */
function answer(query: string): string {
  const q = query.toLowerCase();
  let best = faqs[0];
  let bestScore = 0;
  for (const f of faqs) {
    const words = (f.q + " " + f.a).toLowerCase();
    let score = 0;
    for (const tok of q.split(/\W+/).filter((w) => w.length > 2)) {
      if (words.includes(tok)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }
  if (bestScore === 0)
    return "Great question! I'd point you to our FAQs below, or the rulebook above. For anything specific, reach the RPA team via the Join Us page.";
  return best.a;
}

export function AskRpa() {
  const [input, setInput] = useState("");
  const [thread, setThread] = useState<{ role: "you" | "rpa"; text: string }[]>([
    { role: "rpa", text: "Hi! I'm the RPA assistant. Ask me anything about pickleball or getting started in Rajasthan." },
  ]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setThread((prev) => [...prev, { role: "you", text: t }, { role: "rpa", text: answer(t) }]);
    setInput("");
  };

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-line bg-paper shadow-sm">
      <div className="flex items-center gap-2 border-b border-line bg-teal px-5 py-3.5 text-paper">
        <Sparkles className="size-4" />
        <span className="font-display font-bold">Ask RPA</span>
        <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide">
          Beta
        </span>
      </div>

      <div className="flex max-h-72 flex-col gap-3 overflow-y-auto p-5">
        {thread.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              m.role === "you"
                ? "ml-auto bg-ink text-paper"
                : "bg-mist text-ink"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 px-5">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-orange/40 hover:text-ink"
          >
            {s}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="m-4 flex items-center gap-2 rounded-xl bg-mist px-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
          className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-ink-muted"
        />
        <button
          type="submit"
          className="grid size-9 shrink-0 place-items-center rounded-lg bg-orange text-paper transition-colors hover:bg-orange-deep"
          aria-label="Send"
        >
          <SendHorizonal className="size-4" />
        </button>
      </form>
    </div>
  );
}
