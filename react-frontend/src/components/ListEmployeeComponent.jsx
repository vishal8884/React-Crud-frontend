import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this); //bind this method to component
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`)
    }

    deleteEmployee(id){
         //deleting from here itself as no new page for this
         EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
         });
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
             this.setState({ employees: res.data});
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className = "row">
                  <center><button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button> </center> 
                </div>
                <div className = "row">
                    <table className = "table table-striped table bordered">
                      <thead>
                         <tr>
                            <th> Employee Id</th>
                            <th> Employee First Name </th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                         </tr>
                      </thead>

                      <tbody>
                         {
                            this.state.employees.map(
                                employee => 
                                <tr key = {employee.id}>
                                    <td> {employee.id}</td>
                                    <td> {employee.firstName} </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.emailId} </td>
                                    <td> 
                                        <button onClick = { () => this.editEmployee(employee.id) } className="btn btn-info">Update</button>
                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.deleteEmployee(employee.id) } className="btn btn-danger">Delete</button>
                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.viewEmployee(employee.id) } className="btn btn-info">View</button>
                                    </td>
                                </tr>
                            )
                         }
                      </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;