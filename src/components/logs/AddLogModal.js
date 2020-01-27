import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

// modal for the form to add new logs
const AddLogModal = ({ addLog }) => {
	const [species, setSpecies] = useState('');
	const [rarity, setRarity] = useState('');
	const [notes, setNotes] = useState('');
	var rarityscale = '';

	const onSubmit = () => {
		switch (rarity) {
			//set rarity to a number scale so sorting isn't alphabetical
			case 'Common':
				rarityscale = 1;
				break;
			case 'Rare':
				rarityscale = 2;
				break;
			case 'Extremely rare':
				rarityscale = 3;
				break;
			default:
				rarityscale = 1;
				break;
		}
		const newLog = {
			species,
			rarity,
			rarityscale,
			notes,
			date: new Date()
		};
		if (species === '' || rarity === '') {
			M.toast({
				html: `Observation not added to the list. Please check values.`
			});
		} else {
			addLog(newLog);

			M.toast({ html: `Observation added to the list.` });
		}
	};

	const onCancel = () => {
		// Clear fields
		setSpecies('');
		setRarity('');
		setNotes('');
	};

	// form
	return (
		<div id='add-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<div className='row'>
					<div className='col s12'>
						<h4 className='orange-text darken-4'>
							ENTER A NEW OBSERVATION
							<a href='#!' className='btn-floating modal-close red right'>
								<i className='material-icons'>close</i>
							</a>
						</h4>
					</div>
				</div>
				<div className='row'>
					<div className='col s6'>
						<div className='input-field'>
							<input
								type='text'
								name='species'
								className='validate'
								placeholder='Species'
								value={species}
								onChange={e => setSpecies(e.target.value)}
								required
							/>
							<label htmlFor='species' className='active orange-text'>
								Species
							</label>
							<span
								className='helper-text'
								data-error='Species name is required'
							></span>
						</div>
					</div>
					<div className='col s6'>
						<div className='input-field'>
							<select
								type='select'
								name='rarity'
								value={rarity}
								className='materialize-select'
								onChange={e => setRarity(e.target.value)}
								required
							>
								<option value='none'>Select Rarity</option>{' '}
								                                
								<option value='Common'>Common</option>{' '}
								                                
								<option value='Rare'>Rare</option>{' '}
								                                
								<option value='Extremely Rare'>Extremely Rare</option>
							</select>

							<label htmlFor='rarity' className='orange-text'>
								Rarity
							</label>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col s12'>
						<div className='input-field'>
							<textarea
								type='textarea'
								className='materialize-textarea'
								name='notes'
								placeholder='Notes'
								value={notes}
								onChange={e => setNotes(e.target.value)}
							/>
							<label htmlFor='notes' className='active orange-text'>
								Notes
							</label>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col s12'>
						<a
							href='#!'
							onClick={onSubmit}
							className='modal-close waves-effect waves-green btn-flat green-text right'
						>
							Save
						</a>
						<a
							href='#!'
							onClick={onCancel}
							className='modal-close waves-effect waves-red btn-flat red-text right'
						>
							CANCEL
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

AddLogModal.propTypes = {
	addLog: PropTypes.func.isRequired
};

// modal size
const modalStyle = {
	width: '75%',
	height: '45%'
};

export default connect(null, { addLog })(AddLogModal);
