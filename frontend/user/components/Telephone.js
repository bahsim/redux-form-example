import React from 'react'

import { Icon, Input } from 'antd';
import 'antd/es/icon/style/css';
import 'antd/es/input/style/css';

export default ({
  label,
	input,
  type,
  meta: { touched, error, warning }
}) => (
	<div>
		<Input 
			className='mobilePhoneInput'
			{...input} 
			type={type} 
			prefix={<Icon type="phone" 
			style={{ color: 'rgba(0,0,0,.25)' }} />} 
			placeholder={label} 
		/>
		{touched &&
			((error && <span>{error}</span>) ||
				(warning && <span>{warning}</span>))}
  </div>
)
