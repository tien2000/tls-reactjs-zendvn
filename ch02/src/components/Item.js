import React, { Component } from 'react';
class Item extends Component{
	constructor(props){
		super(props);
	
		this.state = {
			
		};

		this.handleDelete = this.handleDelete.bind(this);
	};

	showElementLevel(level){
		let elmLevel = <span className="label label-info">Small</span>;

		if(level === 1) {
			elmLevel = <span className="label label-warning">Medium</span>;
		}else if(level === 2) {
			elmLevel = <span className="label label-danger">High</span>;
		}
		return elmLevel;
	};

	handleDelete(id){
		this.props.onClickDelete(id);
	}
	
	render(){
		const {item}  = this.props; 
		const {index} = this.props;
		
		return(
			<tr>
				<td style={{ width: "10%" }} className="text-center">{index + 1}</td>
				<td>{item.name}</td>
				<td style={{ width: "20%" }} className="text-center">{this.showElementLevel(item.level)}</td>
				<td>
					<button type="button" className="btn btn-warning">Edit</button>
					<button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
				</td>
			</tr>
		);
	};	
};

export default Item;
