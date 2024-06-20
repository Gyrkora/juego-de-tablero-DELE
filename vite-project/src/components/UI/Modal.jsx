import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
	CloseButton,
	ModalOverlay,
	ModalContent,
} from '../../styles.css/Modal.styles';

const Modal = ({ isOpen, children, onClose }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<ModalOverlay className="modal-overlay" onClick={onClose}>
			<ModalContent
				className="modal-content"
				onClick={(e) => e.stopPropagation()}
			>
				<CloseButton className="close-button" onClick={onClose}>
					X
				</CloseButton>
				{children}
			</ModalContent>
		</ModalOverlay>,
		document.getElementById('modal-root')
	);
};

export default Modal;
