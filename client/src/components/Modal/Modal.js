import React from "react";
import PropTypes from "prop-types";

import "./styled/Modal.css";

const Modal = ({
  title,
  confirmText,
  canCancel,
  canConfirm,
  onCancel,
  onConfirm,
  children,
}) => (
  <div className="modal">
    <header className="modal_header">
      <h1>{title}</h1>
    </header>
    <section className="modal_content">{children}</section>
    <section className="modal_actions">
      {canCancel && (
        <button className="btn" onClick={onCancel}>
          Cancel
        </button>
      )}
      {canConfirm && (
        <button className="btn" onClick={onConfirm}>
          {confirmText}
        </button>
      )}
    </section>
  </div>
);

Modal.propTypes = {
  /**
   * Modal title
   */
  title: PropTypes.string.isRequired,
  /**
   * Modal confirm text
   */
  confirmText: PropTypes.string.isRequired,
  /**
   * To cancel status
   */
  canCancel: PropTypes.bool.isRequired,
  /**
   * To confirm status
   */
  canConfirm: PropTypes.bool.isRequired,
  /**
   * Modal cancel onClick func
   */
  onCancel: PropTypes.func.isRequired,
  /**
   * Modal confirm onClick func
   */
  onConfirm: PropTypes.func.isRequired,
  /**
   * React children object
   */
  children: PropTypes.object.isRequired,
};

export default Modal;
