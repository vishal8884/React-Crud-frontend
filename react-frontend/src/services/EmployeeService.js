import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    getEmployeeById(employeeId){
        console.log("EMPLOYEE_API_BASE_URL+'/'+employeeId :: "+EMPLOYEE_API_BASE_URL+'/'+employeeId)
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    //host/api/v1/employees/1
    updateEmployee(employee,employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}


export default new EmployeeService()