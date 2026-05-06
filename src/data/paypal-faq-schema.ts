import { computeTopupFees } from "@/lib/paypal-topup-fees";

function commissionAnswerPlain() {
  const f = computeTopupFees(10);
  return [
    "El costo incluye 6,75 % sobre el monto que recibes en Punto Pago, más B/.0.50 de comisión fija.",
    "El ITBMS (7 %) se aplica sobre la suma de esas dos comisiones, con el mismo criterio que la calculadora de esta página.",
    `Ejemplo práctico: si recibes B/.10.00 en tu billetera, el cargo total por comisiones e impuesto es de B/.${f.totalFee.toFixed(2)}; el total a pagar con PayPal sería B/.${f.totalToPay.toFixed(2)}.`,
    "En la app verás el desglose y el monto final antes de confirmar.",
  ].join(" ");
}

/**
 * Textos alineados con el FAQ visible en pantalla (Schema.org FAQPage).
 */
export const PAYPAL_FAQ_SCHEMA_ITEMS: { question: string; answer: string }[] =
  [
    {
      question: "¿Qué es el servicio de PayPal en Punto Pago?",
      answer:
        "Es una integración que permite a los usuarios de Punto Pago gestionar recargas y transacciones de PayPal directamente desde nuestra app, cumpliendo con las normativas locales de Panamá.",
    },
    {
      question: "¿Cuáles son los requisitos para usar el servicio?",
      answer:
        "Para utilizar esta función debes cumplir con lo siguiente: ser mayor de edad; tener información precisa y actualizada en tu perfil; registrar solo un usuario de PayPal asociado a tu número de cuenta; y aceptar el contrato actualizado de «Términos de Uso de PayPal» en la sección de Contratos de la app.",
    },
    {
      question: "¿Cómo puedo recargar mi cuenta?",
      answer:
        "Las recargas solo están permitidas a través de la app de Punto Pago. No se aceptan recargas o transferencias gestionadas directamente desde la plataforma externa de PayPal hacia Punto Pago.",
    },
    {
      question: "¿Cuáles son las comisiones por recarga?",
      answer: commissionAnswerPlain(),
    },
    {
      question: "¿Existen límites de montos para recargar?",
      answer:
        "Sí. Por seguridad y regulación aplicamos los siguientes límites: diario hasta USD 1.000; mensual (cada 30 días) hasta USD 4.500.",
    },
    {
      question: "¿Qué sucede si hay un contracargo en mi cuenta?",
      answer:
        "Si PayPal ejecuta un contracargo sobre fondos que ya utilizaste, Punto Pago trasladará dicho cargo a tu cuenta como un producto de crédito sin intereses (BCL). Este saldo se registrará como una deuda pendiente. Importante: esta obligación puede ser reportada a la APC (Asociación Panameña de Crédito) como parte de tu historial crediticio.",
    },
    {
      question: "¿Cómo protegen mis transacciones?",
      answer:
        "Contamos con sistemas de resolución de disputas para transacciones no autorizadas. Para activar esta protección debes presentar tu reclamación dentro de los 180 días posteriores a la operación. Además aplicamos medidas de seguridad como la autenticación de dos factores.",
    },
    {
      question: "¿Por qué mi recarga no aparece de inmediato?",
      answer:
        "Punto Pago acredita las recargas únicamente cuando los fondos son recibidos efectivamente en nuestra cuenta. No somos responsables por demoras causadas por interrupciones bancarias o fallos externos de internet.",
    },
    {
      question: "¿Pueden suspender mi cuenta?",
      answer:
        "Sí. Nos reservamos el derecho de suspender o cerrar cuentas en caso de detectar actividad sospechosa, violación de los términos de uso o por orden judicial o regulatoria.",
    },
    {
      question: "¿Dónde puedo resolver dudas adicionales?",
      answer:
        "Si tienes inconvenientes técnicos o consultas específicas puedes contactarnos por WhatsApp +507 6245-6852 o por correo electrónico hola@puntopago.net.",
    },
  ];
