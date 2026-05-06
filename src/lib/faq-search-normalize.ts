/** Normaliza texto para búsqueda insensible a mayúsculas y tildes. */
export function faqNormalizeForSearch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function faqNeedleFromGroupAndQuestion(
  groupTitle: string,
  question: string,
) {
  return faqNormalizeForSearch(`${groupTitle} ${question}`);
}
