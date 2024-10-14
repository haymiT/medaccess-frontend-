import React from 'react';

const EmployeeUpdateSuccess = ({ employeeID }: any) => {
    return (
        <div className="container">
            <h1 className="text-center mt-2 mb-4">Updated</h1>
            <h4>Employee {employeeID} updated successfully</h4>
        </div>
    );
};

export default EmployeeUpdateSuccess;
