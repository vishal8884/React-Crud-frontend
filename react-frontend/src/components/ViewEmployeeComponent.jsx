import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,  //http://localhost:3000/view-employee/6  gets id from here
            employee: {}
        }
    }

    componentDidMount(){
         EmployeeService.getEmployeeById(this.state.id).then( res => {
            console.log("res :: "+res);
            this.setState({employee: res.data});
         })
        // console.log("employee :: "+employee);
    }
     
    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Employee First Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;