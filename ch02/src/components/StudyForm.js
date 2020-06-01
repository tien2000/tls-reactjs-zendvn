import React, { Component } from 'react';
class StudyForm extends Component{
	constructor(props){
		super(props);
	
		this.state = {
			fullName 	: '',
			course		: 'php',
			opject		: 'nkt',
			sendMail	: false
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(event) {
		const target = event.target;
		const value = target.name === 'sendMail' ? target.checked : target.value;
		const name   = target.name;

		this.setState({
			[name]: value
		});
		
	}
	
	  handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.fullName);
		console.log(this.state);
		event.preventDefault();
	};

	render(){	
		return(
			<div className="row">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Study Form</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <legend>Form Register</legend>

                            <div className="form-group">
                                <label htmlFor="">Họ tên</label>
                                <input value={this.state.fullName} onChange={this.handleChange} name="fullName" type="text" className="form-control" placeholder="Fullname" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Khóa học</label>
                                <select value={this.state.course} onChange={this.handleChange} name="course" id="input" className="form-control" required="required">
                                    <option value="angular">Angular</option>
                                    <option value="react">React</option>
                                    <option value="nodejs">NodeJS</option>
                                    <option value="php">PHP</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Đối tượng</label>
                                <div className="radio">
                                    <label>
                                        <input checked={this.state.opject === 'old_student'} onChange={this.handleChange} value="old_student" type="radio" name="opject"/>Học viên cũ
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input checked={this.state.opject === 'student'} onChange={this.handleChange} value="student"  type="radio" name="opject"/>Học sinh Sinh viên
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input checked={this.state.opject === 'nkt'} onChange={this.handleChange} value="nkt" type="radio" name="opject"/>Người khuyết tật
                                    </label>
                                </div>
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input checked={this.state.sendMail} onChange={this.handleChange} name="sendMail" type="checkbox" /> Send mail
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
		);
	}
};

export default StudyForm;
