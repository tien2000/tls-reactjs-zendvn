import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Course from './components/Course';

function App() {
	return (
		<div>
			<div className="row">
				<Course name="ReactJS" time="30h" free={false}>ReactJS is very crazy!!!</Course>
				<Course name="AngularJS" time="50h" free={false}/>
				<Course name="NodeJS" time="70h" free={true}/>
			</div>
		</div>
	);
}

export default App;
