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
          Buscar en preguntas frecuentes
        </label>
        <input
          id={inputId}
          type="search"
          name="faq-search"
          autoComplete="off"
          enterKeyHint="search"
          placeholder="Ej.: comisión, límite, contracargo, WhatsApp…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pp-touch mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-[#4749B6]/0 transition placeholder:text-slate-400 focus:border-[#4749B6] focus:ring-4 focus:ring-[#4749B6]/15"
          aria-describedby={statusId}
        />
        <p id={statusId} className="mt-2 text-xs text-slate-500" aria-live="polite">
          {noResults
            ? `Sin resultados para «${query.trim()}». Prueba otra palabra.`
            : query.trim()
              ? "Mostrando coincidencias. Borra el texto para ver todo de nuevo."
              : "Escribe una palabra para acotar las preguntas; borra el texto para ver la lista completa otra vez."}
        </p>
      </div>

      <div ref={rootRef} className={noResults ? "hidden" : "mt-10"}>
        {children}
      </div>
    </div>
  );
}
