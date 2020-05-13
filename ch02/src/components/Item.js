import React, { Component } from 'react';
class Item extends Component{
	render(){	
		return(
			<tr>
				<td style={{ width: "10%" }} className="text-center">1</td>
				<td>Run Barry, Run! - Team Flash</td>
				<td style={{ width: "20%" }} className="text-center">
					<span className="label label-info">Medium</span>
				</td>
				<td>
					<button type="button" className="btn btn-warning">Edit</button>
					<button type="button" className="btn btn-danger">Delete</button>
				</td>
			</tr>
		);
	}
};

export default Item;
