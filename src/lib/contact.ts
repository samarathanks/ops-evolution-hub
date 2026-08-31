export const WHATSAPP_NUMBER = "5511996443300";
export const WHATSAPP_DISPLAY = "+55 11 99644-3300";
export const CONTACT_EMAIL = "contato@grupothanks.com";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const SOLUTION_EVENT = "thanksup:solution";

/** Seleciona a solução no formulário e rola até o contato. */
export function selectSolution(solution: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(SOLUTION_EVENT, { detail: solution }));
}
