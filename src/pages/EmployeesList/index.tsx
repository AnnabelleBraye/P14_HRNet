import { useEffect, useState } from "react"
import Table, { ColType } from "../../components/Table"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus"
import ModaleForm from "../../components/ModaleForm"
import { userData } from "../../data/employees"
import Notification from "../../components/Notification"

export type User = {
  firstName: string,
  lastName: string,
  department: string,
  birthDate: string,
  startDate: string,
  street: string,
  city: string,
  state: string, 
  zipCode: string
}
const EmployeesList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);  
  const [data, setData] = useState<User[]>(localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees') || '') : userData);
  const [showNotification, setShowNotification] = useState<boolean>(false); 

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(data));
  }, [data]);

  const columns: ColType<User>[] = [
    {title: 'First Name', property: 'firstName'},
    {title: 'Last Name', property: 'lastName'},
    {title: 'Department', property: 'department'}, 
    {title: 'Date of Birth', property: 'birthDate'},
    {title: 'Street', property: 'street'},
    {title: 'City', property: 'city'},
    {title: 'State', property: 'state'},
    {title: 'Zip Code', property: 'zipCode'}
  ];

  const addUser = (user: User) => {
    setData((data) => [...data, user]);
    localStorage.setItem('employees', JSON.stringify(data));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  }

  return (
    <div className="m-2 md:m-6 lg:m-12">
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <h2 className="text-3xl text-blue-grey font-bold">Employees list</h2>
        <button
          type="button"
          className="flex items-center border border-blue-grey bg-blue-grey text-white font-semibold p-2 h-fit rounded"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
          <span className="hidden sm:block">
            Add an employee
          </span>
        </button>
      </div>
      <Table data={data} columns={columns} />
      {isOpen && 
        <ModaleForm onValidate={addUser} onCancel={() => setIsOpen(false)} />
      }
      {showNotification && <Notification message="Employee added successfully!" />} {/* Notification */}
    </div>
  )
}

export default EmployeesList