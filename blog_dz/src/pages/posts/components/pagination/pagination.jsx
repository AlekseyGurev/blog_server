import styled from 'styled-components';
import { Button } from '../../../../components';
import PropTypes from 'prop-types';

const PaginationContainer = ({ className, page, setPage, lastPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} className="button" onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button
				disabled={page === 1}
				className="button"
				onClick={() => setPage(page - 1)}
			>
				Предидущая
			</Button>
			<span className="current-page">{page}</span>
			<Button
				disabled={page === lastPage}
				className="button"
				onClick={() => setPage(page + 1)}
			>
				Следующая
			</Button>
			<Button
				disabled={page === lastPage}
				className="button"
				onClick={() => setPage(lastPage)}
			>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	gap: 10px;
	align-items: center;

	.button {
		padding: 5px 10px;
	}

	.current-page {
		border: 1px solid #000000;
		border-radius: 4px;
		padding: 5px 10px;
		font-size: 17px;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number,
	lastPage: PropTypes.number,
	setPage: PropTypes.func,
};
