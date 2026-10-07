import { X } from 'lucide-react';

export default function Modal({ children, onClose, className = '' }) {
  return <div className="modal-backdrop" onMouseDown={event => event.target === event.currentTarget && onClose()}>
    <section className={`modal ${className}`} role="dialog" aria-modal="true">
      <button className="modal-close" onClick={onClose} aria-label="Close"><X/></button>
      {children}
    </section>
  </div>;
}
