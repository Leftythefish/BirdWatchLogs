import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

// observation log component for the list of logs
const LogItem = ({ log }) => {
	return (
		<li className='collection-item'>
			<div>
				<h6 className='orange-text'>{log.species}</h6>
				<span className='orange-text text-darken-4'>
					Rarity: <span className='black-text'> {log.rarity} </span>
					<br />
					Details: <span className='black-text'> {log.notes} </span>
					<br />
					Date:{' '}
					<span className='black-text'>
						<Moment format='DD/MM/YYYY hh:mm'>{log.date}</Moment>
					</span>
				</span>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired
};

export default LogItem;
