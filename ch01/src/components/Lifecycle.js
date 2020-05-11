import React, { Component }  from 'react';
import $ from 'jquery';

class Lifecycle extends Component{
    constructor(props){
        super(props);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);

        console.log('constructor');

        this.state = {
            title : 'LifeCycle'
        }
    };

    handleChangeTitle(){
        this.setState({
            title : "LifeCycle: Changed"
        })
    }

    componentWillMount(){
        console.log('componentWillMount');
        this.setState({
            title : "LifeCycle: componentWillMount"
        })
    }

    componentDidMount(){
        console.log('componentDidMount');
        $('h3.panel-title').css('color', 'red');
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps');
    } 

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        console.log(nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        return(
            <div className="Course">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.title}</h3>
                    </div>
                    <div className="panel-body">
                        <button onClick={this.handleChangeTitle} type="button" className="btn btn-success">Toogle Outline</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default Lifecycle;
