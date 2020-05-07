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
    showButtonFree() {
        const isFree = this.props.free;
        // console.log("isFree", isFree);
        if (isFree) {
          return <div className="panel-footer">                            
                    <button type="button" className="btn btn-info">View</button>                            
                </div>;
        }
        return "";
    }

    render() {
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
                            <ul className="list-group">
                                <Lesson />
                            </ul>							
                        </div>
                            {this.showButtonFree()}
                        {/* <button type="button" className="btn btn-primary center-block">Register</button> */}
                    </div>
                </div>
            </div>
        );
    };
};

export default Course;
