import { CONTACT } from '../data.js';

export default function WhatsAppFab() {
  return (
    <a className="fab" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer"><b>WA</b>Chat with us</a>
  );
}
