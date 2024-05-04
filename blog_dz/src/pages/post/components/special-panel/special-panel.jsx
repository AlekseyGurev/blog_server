import styled from 'styled-components';
import { Icon } from '../../../../components';
import PropTypes from 'prop-types';

const SpecialPanelContainer = ({ className, publishedAt }) => {
	return (
		<div className={className}>
			<div className="icon-container">
				<Icon id="fa-calendar-o" size="24px" margin="0 0 0 0" />
				{publishedAt}
			</div>
			<div className="icon-container">
				<a onClick={() => {}}>
					<Icon id="fa-floppy-o" size="24px" margin="0 0 0 0" />
				</a>
				<a onClick={() => {}}>
					<Icon id="fa-trash-o" size="24px" margin="0 0 0 0" />
				</a>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	font-size: 20px;

	margin-top: ${({ margin }) => margin};

	.icon-container {
		display: flex;
		gap: 5px;
		align-items: center;
	}
`;

SpecialPanel.propTypes = {
	publishedAt: PropTypes.string,
};
