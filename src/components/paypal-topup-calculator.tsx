"use client";

import { useState } from "react";

const formatter = new Intl.NumberFormat("es-PA", {
  style: "currency",
  currency: "USD",
});

export function PaypalTopupCalculator() {
  const [amount, setAmount] = useState("25");
  const value = Number(amount);
  const numericAmount = Number.isFinite(value)
    ? Math.min(Math.max(value, 0), 500)
    : 0;

  const suggestions = [10, 25, 50, 100];

  return (
    <section
      id="calculadora"
      className="pp-card rounded-[2rem] p-5 sm:p-6 lg:p-8"
      aria-labelledby="calculator-title"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4749B6]">
            Calculadora rapida
          </p>
          <h2
            id="calculator-title"
            className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl"
          >
            Visualiza cuanto quieres recargar en PayPal.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Escribe el monto, abre la app de Punto Pago y confirma la recarga
            en la seccion de PayPal. El calculo es referencial y la app muestra
            el detalle final antes de pagar.
          </p>
        </div>

        <div className="rounded-[1.6rem] border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-900/[0.06] sm:p-5">
          <label
            htmlFor="topup-amount"
            className="text-sm font-semibold text-slate-700"
          >
            Monto a recargar
          </label>
          <div className="mt-3 flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#4749B6] focus-within:ring-4 focus-within:ring-[#4749B6]/10">
            <span className="text-lg font-bold text-slate-500">$</span>
            <input
              id="topup-amount"
              type="number"
              inputMode="decimal"
              min="0"
              max="500"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="ml-2 w-full bg-transparent text-3xl font-extrabold tracking-tight text-slate-950 outline-none"
              aria-describedby="calculator-help"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setAmount(String(suggestion))}
                className="pp-touch rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-[#4749B6] hover:text-[#4749B6]"
              >
                {formatter.format(suggestion)}
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-3xl bg-gradient-to-br from-[#EEF4FF] to-[#F5F3FF] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Recarga estimada
                </p>
                <p className="mt-1 text-4xl font-extrabold tracking-[-0.05em] text-slate-950">
                  {formatter.format(numericAmount)}
                </p>
              </div>
              <div className="rounded-2xl bg-white px-3 py-2 text-right shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0070BA]">
                  PayPal
                </p>
                <p className="text-sm font-bold text-slate-800">Fondos</p>
              </div>
            </div>
            <p id="calculator-help" className="mt-4 text-sm text-slate-600">
              Disponible para usuarios que operan desde la app de Punto Pago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
