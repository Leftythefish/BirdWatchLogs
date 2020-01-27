import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { sortLogs } from '../../actions/logActions';
import PropTypes from 'prop-types';

// buttons for sorting by rarity
export const SortBtn = ({ sortLogs }) => {
	const onSort = e => {
		//sorting function
		sortLogs(e.target.id);
	};

	return (
		<Fragment>
			<button
				href='#!'
				id='rarityscale'
				onClick={onSort}
				className='btn-large btn-flat waves-effect orange white-text'
			>
				SORT: RARITY
			</button>
			<button
				href='#!'
				id='date'
				onClick={onSort}
				className='btn-large btn-flat waves-effect orange white-text'
			>
				SORT: DATE
			</button>
			<button
				href='#!'
				id='species'
				onClick={onSort}
				className='btn-large btn-flat waves-effect orange white-text'
			>
				SORT: SPECIES
			</button>
		</Fragment>
	);
};
SortBtn.propTypes = {
	sortLogs: PropTypes.func.isRequired
};
export default connect(null, { sortLogs })(SortBtn);
