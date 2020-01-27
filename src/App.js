import React, { Fragment, useEffect } from 'react';
import AppNavbar from './components/layout/AppNavbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import SortBtn from './components/layout/SortBtn';

import AddLogModal from './components/logs/AddLogModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
	useEffect(() => {
		//Initialize Materialize JS
		M.AutoInit();
	});
	return (
		<Provider store={store}>
			<Fragment>
				<div className='container'>
					<div className='nav-wrapper orange'>
						<AddBtn />
						<SortBtn />
					</div>
					<AppNavbar />
					<AddLogModal />
					<Logs />
				</div>
			</Fragment>
		</Provider>
	);
};

export default App;
