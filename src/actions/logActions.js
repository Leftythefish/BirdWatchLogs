import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	SEARCH_LOGS,
	SORT_LOGS
} from './types';

// get logs from json-server
export const getLogs = () => async dispatch => {
	try {
		setLoading();
		const res = await fetch('/logs?_sort=date&_order=desc');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// add new log
export const addLog = log => async dispatch => {
	try {
		setLoading();
		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// search logs
export const searchLogs = text => async dispatch => {
	try {
		setLoading();
		const res = await fetch(`logs?q=${text}&_sort=date&_order=desc`);
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// sort logs
export const sortLogs = text => async dispatch => {
	try {
		setLoading();
		const res = await fetch(`logs?_sort=${text}&_order=desc`);
		const data = await res.json();

		dispatch({
			type: SORT_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

//set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
