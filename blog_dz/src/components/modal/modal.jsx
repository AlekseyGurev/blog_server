import { useSelector } from 'react-redux';
import { Button } from '../button/button';
import {
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalTitle,
	selectModalIsOpen,
} from '../../selectors';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const title = useSelector(selectModalTitle);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	const isOpen = useSelector(selectModalIsOpen);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay">
				<div className="modal">
					<h3>{title}</h3>
					<div className="buttons">
						<Button onClick={onConfirm}>Да</Button>
						<Button onClick={onCancel}>Отмена</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	& h3 {
		text-align: center;
		margin: 0;
		margin-bottom: 20px;
		font-size: 22px;
	}

	& Button {
		width: 150px;
		cursor: pointer;
	}

	.buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.overlay {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
	}

	.modal {
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
		margin: auto;
		width: 400px;
		padding: 30px 30px;
		background-color: #ffffff;
		border-radius: 4px;
	}
`;
