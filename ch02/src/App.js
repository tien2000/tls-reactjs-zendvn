import React, { Component } from 'react';
class App extends Component{
	render(){	
		return(
			<div className="row">
				<div className="page-header">
					<h1>Project 01 - Todo List <small>ReactJS</small></h1>
				</div>
				<div className="row">
				{/* CONTROL: (SEARCH - SORT - ADD): START */}
					{/* SEARCH: START */}
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Search for..." />
							<span className="input-group-btn">
								<button className="btn btn-info" type="button"> Go! </button>
							</span>
						</div>
					</div>
					{/* SEARCH: END */}
					{/* SORT: START */}
					<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
						<div className="dropdown">
							<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" > Sort by <span className="caret" /></button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
								<li> <a href="#">Name ASC</a> </li>
								<li> <a href="#">Name DESC</a> </li>
								<li role="separator" className="divider" />
								<li> <a href="#">Level ASC</a> </li>
								<li> <a href="#">Level DESC</a> </li>
							</ul>
							<span className="label label-success label-medium">Name - ASC</span>
						</div>
					</div>
					{/* SORT: END */}
					{/* ADD: START */}
					<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<button type="button" className="btn btn-info btn-block"> Add Task </button>
					</div>
					{/* ADD: END */}
				{/* CONTROL: (SEARCH - SORT - ADD): END */}
				</div>
				{/* FORM: START */}
				<div className="row">
					<div className="col-md-offset-7 col-md-5">
						<form className="form-inline">
							<div className="form-group">
								<label className="sr-only" htmlFor> label </label>
								<input name="task_name" type="text" className="form-control" placeholder="Task Name" />
							</div>
							<div className="form-group">
								<label className="sr-only" htmlFor> label </label>
								<select name="task_level" className="form-control" required="required">
									<option value="{0}">Small</option>
									<option value="{1}">Medium</option>
									<option value="{2}">High</option>
								</select>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
							<button type="button" className="btn btn-default">Cancel</button>
						</form>
					</div>
				</div>
				{/* FORM: END */}
				{/* LIST: START */}
				<div className="panel panel-success">
					<div className="panel-heading">
						<h3 className="panel-title">List Task</h3>
					</div>
					<table className="table table-hover">
						<thead>
							<tr>
								<th style={{ width: "10%" }} className="text-center">#</th>
								<th>Task</th>
								<th style={{ width: "20%" }} className="text-center">Level</th>
								<th style={{ width: "20%" }}>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ width: "10%" }} className="text-center">1</td>
								<td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 1</td>
								<td style={{ width: "20%" }} className="text-center">
									<span className="label label-info">Medium</span>
								</td>
								<td>
									<button type="button" className="btn btn-warning">Edit</button>
									<button type="button" className="btn btn-danger">Delete</button>
								</td>
							</tr>
							<tr>
								<td style={{ width: "10%" }} className="text-center">2</td>
								<td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 2</td>
								<td style={{ width: "20%" }} className="text-center">
									<span className="label label-danger">High</span>
								</td>
								<td>
									<button type="button" className="btn btn-warning">Edit</button>
									<button type="button" className="btn btn-danger">Delete</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				{/* LIST: END */}
			</div>
		);
	}
};

export default App;
