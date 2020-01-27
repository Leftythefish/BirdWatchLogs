import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

//search bar for logs
export const AppNavbar = ({ searchLogs }) => {
	const text = useRef('');

	const onChange = e => {
		searchLogs(text.current.value);
	};

	return (
		<nav className='orange lighten-2 no-shadows'>
			<div className='nav-wrapper'>
				<form>
					<div className='input-field'>
						<input
							id='search'
							type='search'
							placeholder='Search Observations...'
							ref={text}
							onChange={onChange}
						/>
						<label className='label-icon' htmlFor='search'>
							<i className='material-icons'>search</i>
						</label>
					</div>
				</form>
			</div>
		</nav>
	);
};

AppNavbar.propTypes = {
	searchLogs: PropTypes.func.isRequired
};
export default connect(null, { searchLogs })(AppNavbar);
