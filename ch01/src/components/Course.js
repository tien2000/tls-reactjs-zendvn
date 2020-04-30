import React  from 'react';
import Lesson from './Lesson';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Tien',
    lastName: 'Le'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function Course() {
	return (     
        <div className="Course">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">ReactJS</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {element}
                            
                            <h1>
                                Hello, {formatName(user)}! {2+2}
                            </h1>
                            <Lesson />
                        </ul>							
                    </div>
                    <button type="button" class="btn btn-primary center-block">Register</button>
                </div>
            </div>
        </div>
	);
}

export default Course;
