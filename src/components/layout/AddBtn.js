import React, { Fragment } from 'react';
// button for opening the form for new logs
const AddBtn = () => {
	return (
		<Fragment>
			<a
				href='#add-log-modal'
				className='btn-large btn-flat orange darken-2 modal-trigger white-text'
			>
				ADD NEW <i className='material-icons right'>add_box</i>
			</a>
		</Fragment>
	);
};

export default AddBtn;
