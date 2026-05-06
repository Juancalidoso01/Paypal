"use client";

import { useState } from "react";

const formatter = new Intl.NumberFormat("es-PA", {
  style: "currency",
  currency: "USD",
});

const PERCENT_COMMISSION_RATE = 0.0675;
const FIXED_COMMISSION = 0.5;
const ITBMS_RATE = 0.07;
const MAX_TOPUP_AMOUNT = 500;

function roundMoney(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function PaypalTopupCalculator() {
  const [amount, setAmount] = useState("25");
  const value = Number(amount);
  const numericAmount = Number.isFinite(value)
    ? Math.min(Math.max(value, 0), MAX_TOPUP_AMOUNT)
    : 0;
  const percentCommission = roundMoney(
    numericAmount * PERCENT_COMMISSION_RATE,
  );
  const fixedCommission = FIXED_COMMISSION;
  const commissionSubtotal = roundMoney(percentCommission + fixedCommission);
  const commissionTax = roundMoney(commissionSubtotal * ITBMS_RATE);
  const totalFee = roundMoney(commissionSubtotal + commissionTax);
  const totalToPay = roundMoney(numericAmount + totalFee);

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
            Calculadora rápida
          </p>
          <h2
            id="calculator-title"
            className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl"
          >
            Calcula cuánto pagas para recargar Punto Pago.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600 hyphens-auto sm:text-justify">
            Escribe cuánto quieres recibir en tu billetera Punto Pago. La
            calculadora suma la comisión 6.75%, la comisión fija y el ITBMS
            sobre la comisión para estimar el total a pagar con PayPal.
          </p>
        </div>

        <div className="rounded-[1.6rem] border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-900/[0.06] sm:p-5">
          <label
            htmlFor="topup-amount"
            className="text-sm font-semibold text-slate-700"
          >
            Monto que recibes en Punto Pago
          </label>
          <div className="mt-3 flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#4749B6] focus-within:ring-4 focus-within:ring-[#4749B6]/10">
            <span className="text-lg font-bold text-slate-500">$</span>
            <input
              id="topup-amount"
              type="number"
              inputMode="decimal"
              min="0"
              max={MAX_TOPUP_AMOUNT}
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
                  A billetera Punto Pago
                </p>
                <p className="mt-1 text-4xl font-extrabold tracking-[-0.05em] text-slate-950">
                  {formatter.format(numericAmount)}
                </p>
              </div>
              <div className="rounded-2xl bg-white px-3 py-2 text-right shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0070BA]">
                  PayPal
                </p>
                <p className="text-sm font-bold text-slate-800">Origen</p>
              </div>
            </div>

            <div className="mt-5 rounded-[1.35rem] border border-white/80 bg-white/90 p-4 text-sm shadow-lg shadow-slate-900/[0.06]">
              <FeeRow
                label="Comisión 6.75%"
                value={formatter.format(percentCommission)}
              />
              <FeeRow
                label="Comisión fija"
                value={formatter.format(fixedCommission)}
              />
              <FeeRow
                label="ITBMS de comisión 7%"
                value={formatter.format(commissionTax)}
              />
              <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 font-extrabold text-slate-900">
                <span>Cargo total</span>
                <span>{formatter.format(totalFee)}</span>
              </div>
            </div>

            <div className="mt-4 rounded-[1.35rem] bg-[#343A6D] p-4 text-white shadow-xl shadow-[#343A6D]/20">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-white/70">
                  Total a pagar con PayPal
                </span>
                <span className="text-2xl font-extrabold tracking-tight">
                  {formatter.format(totalToPay)}
                </span>
              </div>
            </div>

            <p id="calculator-help" className="mt-4 text-sm text-slate-600">
              Cálculo referencial. La app muestra el resumen final antes de
              confirmar la recarga a tu billetera Punto Pago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-slate-600">
      <span>{label}</span>
      <span className="font-semibold text-slate-700">{value}</span>
    </div>
  );
}
