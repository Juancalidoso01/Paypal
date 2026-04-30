import { PaypalTopupCalculator } from "@/components/paypal-topup-calculator";

export default function Home() {
  const appLink = "https://puntopago.net/applinks/paypalTopup";

  return (
    <div className="pp-page-bg min-h-dvh overflow-hidden">
      <div className="pp-grid-mask" aria-hidden />
      <div className="pp-blob pp-blob-a" aria-hidden />
      <div className="pp-blob pp-blob-b" aria-hidden />
      <div className="pp-blob pp-blob-c" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] shadow-sm shadow-slate-900/[0.04] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 pb-3 sm:px-6 lg:px-8">
          <a
            href="https://puntopago.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="pp-touch group flex items-center gap-3 rounded-xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4749B6] to-[#34369F] text-sm font-extrabold text-white shadow-lg shadow-[#4749B6]/25 transition group-hover:scale-105">
              PP
            </span>
            <span>
              <span className="block text-sm font-extrabold tracking-tight text-slate-950 sm:text-base">
                Punto Pago
              </span>
              <span className="block text-[11px] font-semibold text-slate-500">
                Recargas desde la app
              </span>
            </span>
          </a>

          <nav className="flex items-center gap-2 text-sm font-bold">
            <a
              href="#calculadora"
              className="hidden rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-[#4749B6] sm:inline-flex"
            >
              Calculadora
            </a>
            <a
              href={appLink}
              className="pp-touch inline-flex min-h-11 items-center justify-center rounded-full bg-[#4749B6] px-5 py-2.5 text-white shadow-lg shadow-[#4749B6]/25 transition hover:bg-[#34369F]"
            >
              Abrir app
            </a>
          </nav>
        </div>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#4749B6]/40 to-transparent" />
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#4749B6] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#00A6F0]" />
              PayPal + Punto Pago
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">
              Recarga fondos PayPal desde Punto Pago.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Una experiencia pensada para Panama: abre la app, entra a la
              nueva seccion de PayPal y completa tu recarga en pocos pasos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={appLink}
                className="pp-touch inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#4749B6] px-6 py-3 text-base font-extrabold text-white shadow-xl shadow-[#4749B6]/25 transition hover:-translate-y-0.5 hover:bg-[#34369F]"
              >
                Descargar o abrir Punto Pago
              </a>
              <a
                href="#como-funciona"
                className="pp-touch inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/75 px-6 py-3 text-base font-extrabold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#4749B6]/35 hover:text-[#4749B6]"
              >
                Ver como funciona
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["100%", "desde la app"],
                ["24/7", "disponible"],
                ["3 pasos", "para recargar"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-3xl border border-white/70 bg-white/65 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-extrabold tracking-tight text-slate-950">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-8 top-10 hidden rotate-[-8deg] rounded-[1.6rem] bg-white p-4 shadow-2xl shadow-slate-900/10 sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Nueva seccion
              </p>
              <div className="mt-2 flex items-center gap-2">
                <PayPalLogo />
                <span className="text-sm font-extrabold text-slate-900">
                  en Punto Pago
                </span>
              </div>
            </div>

            <div className="phone-shine mx-auto rounded-[3rem] border-[10px] border-slate-950 p-3 shadow-[0_38px_120px_rgba(15,23,42,0.28)]">
              <div className="overflow-hidden rounded-[2.2rem] bg-[#f7f8ff]">
                <div className="flex items-center justify-between bg-white px-5 py-4">
                  <div>
                    <p className="text-xs font-bold text-slate-400">Punto Pago</p>
                    <p className="text-base font-extrabold text-slate-950">
                      Recargar PayPal
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#4749B6] text-xs font-extrabold text-white">
                    PP
                  </div>
                </div>

                <div className="p-5">
                  <div className="rounded-[1.6rem] bg-gradient-to-br from-[#003087] to-[#0070BA] p-5 text-white shadow-xl shadow-[#0070BA]/25">
                    <PayPalLogo light />
                    <p className="mt-8 text-sm font-semibold text-white/70">
                      Monto a recargar
                    </p>
                    <p className="mt-1 text-5xl font-extrabold tracking-[-0.06em]">
                      $25.00
                    </p>
                    <div className="mt-5 h-2 rounded-full bg-white/20">
                      <div className="h-2 w-2/3 rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {["$10", "$25", "$50", "$100"].map((amount) => (
                      <div
                        key={amount}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-lg font-extrabold text-slate-900"
                      >
                        {amount}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl bg-[#4749B6] px-5 py-4 text-center text-sm font-extrabold text-white">
                    Confirmar recarga
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            [
              "Fondos para PayPal",
              "Promociona la nueva seccion y lleva al usuario directo al flujo de recarga.",
            ],
            [
              "Optimizado para movil",
              "El deeplink abre la experiencia correcta para quien ya usa Punto Pago.",
            ],
            [
              "Simple y confiable",
              "Mensajes claros, pasos cortos y confirmacion final dentro de la app.",
            ],
          ].map(([title, description]) => (
            <article
              key={title}
              className="pp-card rounded-[1.7rem] p-6 transition hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-xl font-extrabold text-[#0070BA]">
                {title.charAt(0)}
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-950">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </section>

        <div className="mt-16">
          <PaypalTopupCalculator />
        </div>

        <section
          id="como-funciona"
          className="mt-16 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4749B6]">
              Como funciona
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.05em] text-slate-950">
              De la promocion a la recarga en tres pasos.
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              [
                "Abre Punto Pago",
                "Usa el boton de esta pagina para descargar o entrar directo a la app.",
              ],
              [
                "Elige PayPal",
                "Selecciona la seccion de recarga PayPal y define el monto que necesitas.",
              ],
              [
                "Confirma",
                "Revisa el resumen en la app y completa la transaccion con Punto Pago.",
              ],
            ].map(([title, description], index) => (
              <article
                key={title}
                className="pp-card flex gap-4 rounded-[1.5rem] p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4749B6] text-sm font-extrabold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-1 leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#34369F] via-[#4749B6] to-[#0070BA] p-6 text-white shadow-2xl shadow-[#4749B6]/25 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <PayPalLogo light />
              <h2 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
                Lleva tus fondos PayPal con Punto Pago.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
                Una landing directa, visual y lista para convertir trafico movil
                en aperturas de app.
              </p>
            </div>
            <a
              href={appLink}
              className="pp-touch inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-7 py-3 text-base font-extrabold text-[#34369F] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#F4F7FF]"
            >
              Ir a Punto Pago
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/60 bg-white/55 px-4 py-8 text-center text-sm font-medium text-slate-500 backdrop-blur">
        <p>
          Punto Pago Panama · Promocion de recarga PayPal desde la app.
        </p>
      </footer>
    </div>
  );
}

function PayPalLogo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`paypal-wordmark inline-flex items-center text-2xl font-extrabold tracking-tighter ${
        light ? "text-white" : "text-[#003087]"
      }`}
      aria-label="PayPal"
    >
      <span>Pay</span>
      <span className={light ? "text-white/78" : "text-[#0070BA]"}>Pal</span>
    </span>
  );
}
