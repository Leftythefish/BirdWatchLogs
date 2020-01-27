import React from 'react';
//materialize loading-component to show when loading data from server
const Preloader = () => {
	return (
		<div className='progress orange lighten-4'>
			<div className='indeterminate orange'></div>
		</div>
	);
};

export default Preloader;
