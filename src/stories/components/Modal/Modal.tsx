import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import "./Modal.css";
import { Heading } from "../../foundations/typography/Heading";
import { Button } from "../Button/Button";

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bmd-modal__overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.25 } }}
        >
          <motion.div
            className="bmd-modal__container"
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 0,
              // scale: mobile ? 1.0 : 0.7,
              // y: mobile ? 40 : 0,
            }}
            animate={{
              opacity: 1,
              scale: 1.0,
              transition: { delay: 0.15 },
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 0,
              //  scale: mobile ? 1.0 : 0.7,
              // y: mobile ? 40 : 0,
            }}
          >
            <header className="bmd-modal__header">
              {title && <Heading level={1}>{title}</Heading>}
              <Button
                icon={{ name: "x" }}
                onClick={onClose}
                variant="solid"
                tone="primary"
                shape="rounded"
              />
            </header>

            <main className="bmd-modal__content">{children}</main>

            {footer && <footer className="bmd-modal__footer">{footer}</footer>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
