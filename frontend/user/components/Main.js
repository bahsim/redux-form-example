import React from 'react';
import { connect } from 'react-redux'
import createReactClass from 'create-react-class';

import FormAntDesign from './FormAntDesign';
import FormMix from './FormMix';

import { Row, Col } from 'antd';
import 'antd/es/col/style/css';
import 'antd/es/row/style/css';

const Main = createReactClass({
	
	componentDidMount() {
		$(".mobilePhoneInput input").inputmask("+7 (999) 999-9999");
		$(".mobileEmailInput input").inputmask({
			mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
			greedy: false,
			onBeforePaste: function (pastedValue, opts) {
				pastedValue = pastedValue.toLowerCase();
				return pastedValue.replace("mailto:", "");
			},
			definitions: {
				'*': {
					validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
					casing: "lower"
				}
			}
		});
	},
	
	render() {
		
		return (
			<div>
				<br/>
				<Row>
					<Col span={12} offset={6}>
						<FormAntDesign />
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
