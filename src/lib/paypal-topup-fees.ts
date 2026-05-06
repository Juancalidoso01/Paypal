export const PERCENT_COMMISSION_RATE = 0.0675;
export const FIXED_COMMISSION = 0.5;
export const ITBMS_RATE = 0.07;

export function roundMoney(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function computeTopupFees(amountReceived: number) {
  const percentCommission = roundMoney(
    amountReceived * PERCENT_COMMISSION_RATE,
  );
  const fixedCommission = FIXED_COMMISSION;
  const commissionSubtotal = roundMoney(percentCommission + fixedCommission);
  const commissionTax = roundMoney(commissionSubtotal * ITBMS_RATE);
  const totalFee = roundMoney(commissionSubtotal + commissionTax);
  const totalToPay = roundMoney(amountReceived + totalFee);
  return {
    percentCommission,
    fixedCommission,
    commissionSubtotal,
    commissionTax,
    totalFee,
    totalToPay,
  };
}
