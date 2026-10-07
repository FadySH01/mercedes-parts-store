const number = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '');
export const contactHref = number ? `https://wa.me/${number}` : '/request-part';
export const contactLabel = number ? 'WhatsApp' : 'Contact team';
