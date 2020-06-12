import React, { Component } from 'react';
import Title 	from './components/Title';
import Control 	from './components/Control';
import Form 	from './components/Form';
import List 	from './components/List';
import {filter, includes, orderBy as funcOrderBy, remove, reject} from "lodash";
import tasks 	from './mocks/tasks';
const { v4: uuidv4 } = require('uuid');
class App extends Component{
	constructor(props){
		super(props);
	
		this.state = {
			items 			: tasks,
			isShowForm  	: false,
			strSearch   	: '',
			orderBy			: 'name',
			orderDir		: 'asc',
			itemSelected	: null
		};

		this.handleToggleForm 	= this.handleToggleForm.bind(this);
		this.closeForm 			= this.closeForm.bind(this);
		this.handleSearch 		= this.handleSearch.bind(this);
		this.handleSort 		= this.handleSort.bind(this);
		this.handleDelete 		= this.handleDelete.bind(this);
		this.handleSubmit 		= this.handleSubmit.bind(this);
		this.handleEdit 		= this.handleEdit.bind(this);
	}

	handleToggleForm(){
		this.setState({
			isShowForm 		: !this.state.isShowForm,
			itemSelected	: null
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

	handleSort(orderBy, orderDir){
		this.setState({
			orderBy : orderBy,
			orderDir: orderDir
		})
	}

	handleDelete(id){
		let items = this.state.items;
		remove(items, (item) => {
			return item.id === id;
		});

		this.setState({
			items: items
		});
	}

	handleEdit(item){
		this.setState({
			itemSelected	: item,
			isShowForm  	: true
		});
		console.log(item);
		
	}

	handleSubmit(item){
		// console.log(item);
		let {items} = this.state;
		let id = '';
		if (item.id !== '') { //edit
			items = reject(items, { id: item.id});
			id 	  = item.id;
		} else { //add
			id = uuidv4();
		}
		
		items.push({
			id 		: id,
			name	: item.name,
			level	: +item.level
		});

		this.setState({
			items : items,
			isShowForm: false
		});
	}
	
	render(){
		// console.log('strSearch: ' + this.state.strSearch);
				
		let elmForm 	 = null;
		let itemsOrigin  = [...this.state.items];
		let items 		 = [];
		let {isShowForm, strSearch, orderBy, orderDir, itemSelected} = this.state;

		if (isShowForm) {
			elmForm = <Form itemSelected={itemSelected} onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm} />;
		}

		// console.log(orderBy + ' - ' + orderDir);

		// ============ Search cách thông thường ===============
		// if (strSearch.length > 0) {
		// 	itemsOrigin.forEach((item) => {
		// 		if(item.name.toLowerCase().indexOf(strSearch) !== -1){
		// 			items.push(item);
		// 		}
		// 	});
		// } else {
		// 	items = itemsOrigin;
		// }

		// ============ Search sử dụng thư viện Lodash
		items = filter(itemsOrigin, (item) =>{
			return includes(item.name.toLowerCase(), strSearch.toLowerCase());
		});
		// ============ End Search

	//=====================================================

		// ============== Sort sử dụng thư viện Lodash
		items = funcOrderBy(items, [orderBy], [orderDir]);
		// ============ End Sort
		
		return(
			<div>
				{/* TITLE: START */}
					<Title />
				{/* TITLE: END */}
				
				{/* CONTROL: (SEARCH - SORT - ADD): START */}
					<Control
						orderBy={orderBy}
						orderDir={orderDir}
						onClickAdd={this.handleToggleForm}
						onClickSearchGo={this.handleSearch}
						onClickSort={this.handleSort}
						isShowForm={isShowForm}						
					/>				
				{/* CONTROL: (SEARCH - SORT - ADD): END */}

				{/* FORM: START */}
					{elmForm}
				{/* FORM: END */}

				{/* LIST: START */}
					<List
						onClickEdit={this.handleEdit}
						items={items}
						onClickDelete={this.handleDelete}
					/>					
				{/* LIST: END */}
			</div>
		);
	}
};

export default App;
