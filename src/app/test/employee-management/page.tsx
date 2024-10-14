import React from 'react';

const EmployeeManagement = ({ employees }: any) => {
    const confirmDelete = () => {
        return window.confirm('Are you sure you want to delete this employee?');
    };

    return (
        <div className="container">
            <h3 className="mt-4 mb-4 text-center">Welcome to Employee Management Page</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Sex</th>
                        <th>Address</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee: any) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.contact}</td>
                            <td>{employee.sex}</td>
                            <td>{employee.address}</td>
                            <td>
                                <a href={`/update_employee_form?EmployeeID=${employee.id}`} target="_self">
                                    <i className="pencil-icon">edit</i>
                                </a>
                            </td>
                            <td>
                                <form action="/delete_employee" method="POST" onSubmit={confirmDelete}>
                                    <input type="hidden" name="employee_id" value={employee.id} />
                                    <input style={{ color: 'brown' }} type="submit" value="Delete" />
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeManagement;
