import React, { Component }  from 'react';
import Lesson from './Lesson';



// Cách 1
// function Course(props) {
//     return (     
//         <div className="Course">
//             <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//                 <div className="panel panel-info">
//                     <div className="panel-heading">
//                         <h3 className="panel-title">{props.name}</h3>
//                     </div>
//                     <div className="panel-body">
//                         <ul className="list-group">
//                             <Lesson />
//                             <Lesson />
//                             <Lesson />
//                         </ul>							
//                     </div>
//                     <button type="button" class="btn btn-primary center-block">Register</button>
//                 </div>
//             </div>
//         </div>
// 	);
// }

// Cách 2
class Course extends Component{
    constructor(props){
        super(props);

        this.state = {
            isShowOutline : true,
            totalStudent  : 69
        }

        this.handleClick3   = this.handleClick3.bind(this);
        this.registerCourse = this.registerCourse.bind(this);
        this.handleToogleOutline = this.handleToogleOutline.bind(this);
    };

    handleClick1() {
        alert("View 1");
    };

    handleClick2(content) {
        alert(content);
    };

    handleClick3() {
        alert(this.props.name);
    };

    registerCourse() {
        console.log(this.refs.username.value);
        alert(this.refs.username.value);
    };

    showButtonFree() {
        const isFree = this.props.free;
        if (isFree) {
            return (
                <div className="btn-group">
                    <button onClick={this.handleClick1} type="button" className="btn btn-danger">View 1</button>
                    <button onClick={() => this.handleClick2("View 2")} type="button" className="btn btn-success">View 2</button>
                    <button onClick={this.handleClick3} type="button" className="btn btn-info">View 3</button>
                </div>    
            );
        } else {
            return (
                <div className="input-group">
                    <span className="input-group-btn">
                        <button onClick={this.registerCourse} className="btn btn-default" type="button">Resister</button>
                    </span>
                    <input type="text" className="form-control" placeholder="Username..." ref="username" />
                </div>
            );
        };
    };

    handleToogleOutline() {
        this.setState({
            isShowOutline : !this.state.isShowOutline
        });
    };

    render() {
        let elmOutline = null;
        if (this.state.isShowOutline) {
            elmOutline = <ul className="list-group">
                            <Lesson />
                            <Lesson />
                            <Lesson />
                        </ul>;
        };
        return(
            <div className="Course">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">{this.props.name}</h3>
                        </div>
                        <div className="panel-body">
                            <h4>{this.props.time}</h4>
                            <p>{this.props.children}</p>
                            <button onClick={this.handleToogleOutline} type="button" className="btn btn-success">Toogle Outline</button>
                            {elmOutline}
                        </div>
                        <div className="panel-footer">
                            {this.showButtonFree()}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Course;
