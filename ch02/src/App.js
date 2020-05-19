import React, { Component } from 'react';
import Title 	from './components/Title';
import Control 	from './components/Control';
import Form 	from './components/Form';
import List 	from './components/List';

import tasks 	from './mocks/tasks';
class App extends Component{
	constructor(props){
		super(props);
	
		this.state = {
			items : tasks,
			isShowForm : false
		};

		this.handleToggleForm = this.handleToggleForm.bind(this);
		this.closeForm = this.closeForm.bind(this);
	};

	handleToggleForm(){
		this.setState({
			isShowForm : !this.state.isShowForm
		})
	}

	closeForm(){
		this.setState({
			isShowForm : false
		})
	}
	
	render(){
		let items 		= this.state.items;
		let isShowForm 	= this.state.isShowForm;
		let elmForm 	= null;

		if (isShowForm) {
			elmForm = <Form onClickCancel={this.closeForm} />;
		}
		
		return(
			<div>
				{/* TITLE: START */}
					<Title />
				{/* TITLE: END */}
				
				{/* CONTROL: (SEARCH - SORT - ADD): START */}
					<Control onClickAdd={this.handleToggleForm} isShowForm={isShowForm} />				
				{/* CONTROL: (SEARCH - SORT - ADD): END */}

				{/* FORM: START */}
					{elmForm}
				{/* FORM: END */}

				{/* LIST: START */}
					<List items={items}></List>
				{/* LIST: END */}
			</div>
		);
	}
};

export default App;
