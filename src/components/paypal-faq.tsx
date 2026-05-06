import type { ReactNode } from "react";

import { computeTopupFees } from "@/lib/paypal-topup-fees";

const FAQ_EXAMPLE_RECEIVED = 10;
const faqFees = computeTopupFees(FAQ_EXAMPLE_RECEIVED);

function fmtBalboa(n: number) {
  return `B/.${n.toFixed(2)}`;
}

type FaqItem = {
  question: string;
  children: ReactNode;
};

type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "general",
    title: "Generalidades y registro",
    items: [
      {
        question: "¿Qué es el servicio de PayPal en Punto Pago?",
        children: (
          <p>
            Es una integración que permite a los usuarios de Punto Pago gestionar
            recargas y transacciones de PayPal directamente desde nuestra app,
            cumpliendo con las normativas locales de Panamá.
          </p>
        ),
      },
      {
        question: "¿Cuáles son los requisitos para usar el servicio?",
        children: (
          <>
            <p>Para utilizar esta función, debes cumplir con lo siguiente:</p>
            <ul className="mt-3 list-disc space-y-2 ps-5">
              <li>Ser mayor de edad.</li>
              <li>Tener información precisa y actualizada en tu perfil.</li>
              <li>
                Registrar solo un usuario de PayPal asociado a tu número de
                cuenta.
              </li>
              <li>
                Aceptar el contrato actualizado de «Términos de Uso de PayPal»
                en la sección de Contratos de la app.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    id: "recargas",
    title: "Recargas y comisiones",
    items: [
      {
        question: "¿Cómo puedo recargar mi cuenta?",
        children: (
          <p>
            Las recargas solo están permitidas a través de la app de Punto Pago.
            No se aceptan recargas o transferencias gestionadas directamente desde
            la plataforma externa de PayPal hacia Punto Pago.
          </p>
        ),
      },
      {
        question: "¿Cuáles son las comisiones por recarga?",
        children: (
          <>
            <p>
              El costo incluye{" "}
              <strong>6,75&nbsp;%</strong> sobre el monto que recibes en Punto
              Pago, más <strong>B/.0.50</strong> de comisión fija. El{" "}
              <strong>ITBMS (7&nbsp;%)</strong> se aplica sobre la suma de esas
              dos comisiones, con el mismo criterio que nuestra{" "}
              <a
                href="#calculadora"
                className="font-semibold text-[#4749B6] underline-offset-2 hover:underline"
              >
                calculadora
              </a>
              .
            </p>
            <p className="mt-3">
              <strong>Ejemplo práctico:</strong> si recibes{" "}
              {fmtBalboa(FAQ_EXAMPLE_RECEIVED)} en tu billetera, el cargo total
              por comisiones e impuesto es de {fmtBalboa(faqFees.totalFee)}; el
              total a pagar con PayPal sería {fmtBalboa(faqFees.totalToPay)}.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              En la app verás el desglose y el monto final antes de confirmar.
            </p>
          </>
        ),
      },
      {
        question: "¿Existen límites de montos para recargar?",
        children: (
          <>
            <p>
              Sí. Por seguridad y regulación, aplicamos los siguientes límites:
            </p>
            <ul className="mt-3 list-disc space-y-2 ps-5">
              <li>
                <strong>Diario:</strong> hasta USD&nbsp;1.000.
              </li>
              <li>
                <strong>Mensual (cada 30 días):</strong> hasta USD&nbsp;4.500.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad y contracargos",
    items: [
      {
        question: "¿Qué sucede si hay un contracargo en mi cuenta?",
        children: (
          <>
            <p>
              Si PayPal ejecuta un contracargo sobre fondos que ya utilizaste,
              Punto Pago trasladará dicho cargo a tu cuenta como un producto de
              crédito sin intereses (BCL).
            </p>
            <p className="mt-3">
              Este saldo se registrará como una deuda pendiente.
            </p>
            <p className="mt-3 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm text-slate-800">
              <strong>Importante:</strong> esta obligación puede ser reportada a
              la APC (Asociación Panameña de Crédito) como parte de tu historial
              crediticio.
            </p>
          </>
        ),
      },
      {
        question: "¿Cómo protegen mis transacciones?",
        children: (
          <p>
            Contamos con sistemas de resolución de disputas para transacciones
            no autorizadas. Para activar esta protección, debes presentar tu
            reclamación dentro de los <strong>180 días</strong> posteriores a la
            operación. Además, aplicamos medidas de seguridad como la
            autenticación de dos factores.
          </p>
        ),
      },
    ],
  },
  {
    id: "limitaciones",
    title: "Limitaciones y responsabilidades",
    items: [
      {
        question: "¿Por qué mi recarga no aparece de inmediato?",
        children: (
          <p>
            Punto Pago acredita las recargas únicamente cuando los fondos son
            recibidos efectivamente en nuestra cuenta. No somos responsables por
            demoras causadas por interrupciones bancarias o fallos externos de
            internet.
          </p>
        ),
      },
      {
        question: "¿Pueden suspender mi cuenta?",
        children: (
          <p>
            Sí. Nos reservamos el derecho de suspender o cerrar cuentas en caso de
            detectar actividad sospechosa, violación de los términos de uso o por
            orden judicial o regulatoria.
          </p>
        ),
      },
    ],
  },
  {
    id: "soporte",
    title: "Soporte y contacto",
    items: [
      {
        question: "¿Dónde puedo resolver dudas adicionales?",
        children: (
          <>
            <p>
              Si tienes inconvenientes técnicos o consultas específicas, puedes
              contactarnos por:
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="font-semibold text-slate-800">WhatsApp: </span>
                <a
                  href="https://wa.me/50762456852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pp-touch font-bold text-[#4749B6] underline-offset-2 hover:underline"
                >
                  +507 6245-6852
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-800">
                  Correo electrónico:{" "}
                </span>
                <a
                  href="mailto:hola@puntopago.net"
                  className="pp-touch font-bold text-[#4749B6] underline-offset-2 hover:underline"
                >
                  hola@puntopago.net
                </a>
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
];

function FaqDetails({ question, children }: FaqItem) {
  return (
    <details className="group border-b border-slate-200/90 last:border-b-0">
      <summary className="pp-faq-summary pp-touch flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left text-base font-bold text-slate-950 sm:text-[17px]">
        <span className="min-w-0 flex-1">{question}</span>
        <span
          className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-sm font-bold text-[#4749B6] transition group-open:rotate-180"
          aria-hidden
        >
          ▼
        </span>
      </summary>
      <div className="pb-5 text-pretty text-sm leading-7 text-slate-600 hyphens-auto sm:text-base sm:text-justify [&_strong]:font-semibold [&_strong]:text-slate-800">
        {children}
      </div>
    </details>
  );
}

export function PaypalFaq() {
  return (
    <section
      id="preguntas-frecuentes"
      className="pp-faq mt-16 scroll-mt-28"
      aria-labelledby="faq-heading"
    >
      <div className="pp-card rounded-[2rem] p-5 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4749B6]">
            Ayuda
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl"
          >
            PayPal en Punto Pago: preguntas frecuentes
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-slate-600 hyphens-auto sm:text-justify">
            Aquí encontrarás lo esencial sobre el nuevo método para recargar con
            PayPal a través de nuestra plataforma.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {FAQ_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="mb-1 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
                {group.title}
              </h3>
              <div className="rounded-[1.35rem] border border-slate-200/80 bg-white/60 px-4 sm:px-5">
                {group.items.map((item) => (
                  <FaqDetails key={item.question} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.35rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50/90 to-[#EEF4FF] p-5 sm:p-6">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-800">
            Tips de seguridad
          </p>
          <ul className="mt-3 list-disc space-y-2 ps-5 text-pretty text-sm leading-7 text-slate-700 sm:text-base">
            <li>Nunca compartas tus credenciales de acceso.</li>
            <li>
              Punto Pago cumple con la Ley 23 de 2015 para la prevención de
              lavado de activos; tu información está protegida y monitoreada bajo
              estándares legales.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
