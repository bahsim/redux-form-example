import React from 'react';
import { connect } from 'react-redux'
import createReactClass from 'create-react-class';

import * as actions from '../actions/registry';

import { Layout } from 'antd';

const Main = createReactClass({
	
	componentDidMount() {
		this.props.actions.loadApp();
	},
	
	render() {
		return (
			<div className="container">
				<Layout>
				</Layout>
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
			loadApp: () => dispatch(actions.loadApp()),
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
