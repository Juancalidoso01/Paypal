"use client";

import {
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { faqNormalizeForSearch } from "@/lib/faq-search-normalize";

export function PaypalFaqSearchShell({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const inputId = useId();
  const statusId = useId();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const needle = faqNormalizeForSearch(query.trim());
    const items = root.querySelectorAll<HTMLElement>("[data-faq-item]");
    let anyVisible = false;

    items.forEach((item) => {
      const hay = item.getAttribute("data-faq-needle") ?? "";
      const show = !needle || hay.includes(needle);
      item.classList.toggle("hidden", !show);
      if (show) anyVisible = true;
    });

    root.querySelectorAll<HTMLElement>("[data-faq-group]").forEach((groupEl) => {
      const hasVisible = groupEl.querySelector("[data-faq-item]:not(.hidden)");
      groupEl.classList.toggle("hidden", !hasVisible);
    });

    setNoResults(needle.length > 0 && !anyVisible);
  }, [query]);

  return (
    <div className="mt-8">
      <div className="rounded-2xl border border-slate-200/90 bg-white/80 p-4 shadow-sm shadow-slate-900/[0.04] sm:p-5">
        <label
          htmlFor={inputId}
          className="text-sm font-bold text-slate-800"
        >
          Buscar en estas preguntas
        </label>
        <input
          id={inputId}
          type="search"
          name="faq-search"
          autoComplete="off"
          enterKeyHint="search"
          placeholder="Ejemplo: cobro, WhatsApp, cuenta…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pp-touch mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-[#4749B6]/0 transition placeholder:text-slate-400 focus:border-[#4749B6] focus:ring-4 focus:ring-[#4749B6]/15"
          aria-describedby={statusId}
        />
        <p id={statusId} className="mt-2 text-xs text-slate-500" aria-live="polite">
          {noResults
            ? `No hay ninguna pregunta con «${query.trim()}». Prueba otra cosa o borra lo que escribiste para ver todas.`
            : query.trim()
              ? "Solo ves las que tienen lo que escribiste. Borra todo de aquí para ver todas otra vez."
              : "Escribe lo que buscas y te salen las preguntas donde sale eso. Si borras todo, vuelves a ver la lista entera."}
        </p>
      </div>

      <div ref={rootRef} className={noResults ? "hidden" : "mt-10"}>
        {children}
      </div>
    </div>
  );
}
