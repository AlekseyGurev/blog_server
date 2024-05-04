import styled from 'styled-components';
import { Icon, Input } from '../../../../components';
import PropTypes from 'prop-types';

const SearchContainer = ({ className, onChange }) => {
	return (
		<div className={className}>
			<Input className="text" placeholder="Поиск..." onChange={onChange} />
			<Icon className="search" id="fa-search" size="20px" margin="0 0 0 0" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	justify-content: center;
	position: relative;
	align-items: center;
	padding-top: 30px;

	.text {
		padding-right: 30px;
		width: 290px;
	}

	.search {
		position: absolute;
		left: 90%;
	}
`;

Search.propTypes = {
	onChange: PropTypes.func,
};
