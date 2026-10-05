import React, { useEffect } from "react";
import "./Modal.css";

export interface ModalProps {
  /** Is the modal open? */
  isOpen: boolean;
  /** Callback function triggered when closing the modal */
  onClose: () => void;
  /** The title text displayed in the header */
  title?: string;
  /** The main content inside the modal */
  children: React.ReactNode;
  /** Optional footer content (e.g., action buttons) */
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Optional: Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          {title && <h2 className="modal-title">{title}</h2>}
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </header>

        <main className="modal-content">{children}</main>

        {footer && <footer className="modal-footer">{footer}</footer>}
      </div>
    </div>
  );
};
