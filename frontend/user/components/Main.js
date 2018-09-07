import React from 'react';
import { connect } from 'react-redux'
import createReactClass from 'create-react-class';

import FormMix from './FormMix';
import { Row, Col } from 'antd';
import 'antd/es/col/style/css';
import 'antd/es/row/style/css';

const Main = createReactClass({
	
	render() {
		
		return (
			<div>
				<br/>
				<Row>
					<Col span={12} offset={6}>
						<br/>
						<FormMix />
					</Col>
				</Row>
			</div>
		)
		
	}
});

const mapStateToProps = (state) => {
	return { 
		//
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			//
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
