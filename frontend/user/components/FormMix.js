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
				validate={required}
			/>
			<br/>
			<Field
				name="email"
				label="e-mail"
				component={Email}
				type="text"
				normalize={lower}
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