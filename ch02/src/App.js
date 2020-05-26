import React, { Component } from 'react';
import Title 				from './components/Title';
import Control 				from './components/Control';
import Form 				from './components/Form';
import List 				from './components/List';
import {filter, includes} 	from 'lodash';

import tasks 	from './mocks/tasks';
class App extends Component{
	constructor(props){
		super(props);
	
		this.state = {
			items 		: tasks,
			isShowForm  : false,
			strSearch   : ''
		};

		this.handleToggleForm 	= this.handleToggleForm.bind(this);
		this.closeForm 			= this.closeForm.bind(this);
		this.handleSearch 		= this.handleSearch.bind(this);
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

	handleSearch(value){
		this.setState({
			strSearch : value
		})
	}
	
	render(){
		// console.log('strSearch: ' + this.state.strSearch);
		
		let itemsOrigin = [...this.state.items];		// Không chịu ảnh hưởng của itemsOrigin sau khi thay đổi.
		let items 		= [];
		let isShowForm 	= this.state.isShowForm;
		let elmForm 	= null;
		let search 		= this.state.strSearch;

		if (isShowForm) {
			elmForm = <Form onClickCancel={this.closeForm} />;
		}

		// Search thông thường.
		// if (search.length > 0) {
		// 	itemsOrigin.forEach((item) => {
		// 		if (item.name.toLowerCase().indexOf(search) !== -1){
		// 			items.push(item);
		// 		}
		// 	});
		// } else {
		// 	items = itemsOrigin;		
		// }	
		
		// Seach dùng thư viện "Lodash"
		items = filter(itemsOrigin, (item) => {
			return includes(item.name, search);
		});		
		
		return(
			<div>
				{/* TITLE: START */}
					<Title />
				{/* TITLE: END */}
				
				{/* CONTROL: (SEARCH - SORT - ADD): START */}
					<Control
						onClickAdd={this.handleToggleForm}
						onClickSearchGo={this.handleSearch}
						isShowForm={isShowForm}
						
					/>				
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
