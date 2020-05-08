import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Course from './components/Course';

// function App() {
// 	return (
		// <div>
		// 	<div className="row">
		// 		<Course name="ReactJS" time="30h" free={false}>ReactJS is very crazy!!!</Course>
		// 		<Course name="AngularJS" time="50h" free={false}/>
		// 		<Course name="NodeJS" time="70h" free={true}/>
		// 	</div>
		// </div>
// 	);
// }

class App extends Component{
	render(){
		const items = [
			{
				name: 'ReactJS',
				time: '30h',
				free: false,
				desc: 'ReactJS is very crazy!!!'
			},
			{
				name: 'Angular 4X',
				time: '50h',
				free: true,
				desc: 'Angular 4X is very nood!!!'
			},
			{
				name: 'NodeJS',
				time: '90h',
				free: true
			}
		];

		const courseItems = items.map((item, index) =>
			<Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
		);

		return(
			<div>
				<div className="row">
					{courseItems}
				</div>
			</div>
		);
	}
};

export default App;
