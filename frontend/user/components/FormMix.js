import React from 'react';
import { Field, reduxForm } from 'redux-form';

import axios from 'axios';

import Telephone 	from './Telephone';
import Email 			from './Email';

import Inputmask from "inputmask";

import { Button } from 'antd';
import 'antd/es/button/style/css';

const required = value => (
	(value || typeof value === 'number') ? 
		(undefined) 
	: 
		('Required')
)

const formSubmit = (e) =>{
	console.log(e);
	axios.post('mix', { body: e })
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

const normalizePhone = (value, previousValue) => {
  if (!value) return value
	const onlyNums = value.replace(/[^\d]/g, '')	
	switch(onlyNums.length) {
		case 	1: return onlyNums.slice(0, 1)
		case 	2: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 2)
		case 	3: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 3)
		case 	4: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 4)
		case 	5: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 4) + ') ' + onlyNums.slice(4, 5)
		case 	6: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 4) + ') ' + onlyNums.slice(4, 6)
		case 	7: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 4) + ') ' + onlyNums.slice(4, 7)
		case 	8: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 4) + ') ' + onlyNums.slice(4, 7) + '-' + onlyNums.slice(7, 8)
		case 	9: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 4) + ') ' + onlyNums.slice(4, 7) + '-' + onlyNums.slice(7, 9)
		case 10: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 4) + ') ' + onlyNums.slice(4, 7) + '-' + onlyNums.slice(7, 9) + '-' + onlyNums.slice(9, 10)
		default: return onlyNums.slice(0, 1) + ' (' + onlyNums.slice(1, 4) + ') ' + onlyNums.slice(4, 7) + '-' + onlyNums.slice(7, 9) + '-' + onlyNums.slice(9, 11)
	}
}

const normalizeEmail = (value, previousValue) => {
	if (!value) return value
	//value.toLowerCase()
	return value.replace(/[^0-9A-Za-z@.]/g, '').toLowerCase();
	//"a100.dfwe".replace(/[^0-9]+/g, "");
	//return value.replace(/[^0-9A-Za-z]+/g, '')
	
}
const lower = value => value && value.toLowerCase();

const FormMix = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<Field
				name="telephone"
				label="Телефон"
				component={Telephone}
				type="text"
				normalize={normalizePhone}
			/>
			<br/>
			<Field
				name="email"
				label="e-mail"
				component={Email}
				type="text"
				normalize={normalizeEmail}
			/>
			<br/>
			<Button htmlType="submit" type="primary" disabled={pristine || submitting}>
				ГОТОВО
			</Button>
			<Button type="button" disabled={pristine || submitting} onClick={reset}>
				ОЧИСТИТЬ
			</Button>
    </form>
  )
}

export default reduxForm({
  form: 'form-redux'
})(FormMix)