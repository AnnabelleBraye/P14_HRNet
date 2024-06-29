import List, { ColType } from "../../components/Table"

type User = {
  firstName: string,
  lastName: string,
  department: string,
  birthDate: string,
  street: string,
  city: string,
  state: string, 
  zipCode: string
}
const EmployeesList = () => {
  // Exemple de données typées
  const exampleData = [
    {firstName: 'John', lastName: 'Doe', department: 'Sales', birthDate: '1990-01-01', street: '123 Main Stoooooooooooooooooooooooooooooooooooooo', city: 'Anytownoooooooooooooooooooooooooooo', state: 'CACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', zipCode: '12345'},
    {firstName: 'John', lastName: 'Doe', department: 'Sales', birthDate: '1990-01-01', street: '123 Main St', city: 'Anytown', state: 'CA', zipCode: '12345'},
    {firstName: 'John', lastName: 'Doe', department: 'Sales', birthDate: '1990-01-01', street: '123 Main St', city: 'Anytown', state: 'CA', zipCode: '12345'},
    {firstName: 'Jane', lastName: 'Smith', department: 'Engineering', birthDate: '1985-05-15', street: '456 Oak St', city: 'Othertown', state: 'NY', zipCode: '67890'},
    {firstName: 'Jane', lastName: 'Smith', department: 'Engineering', birthDate: '1985-05-15', street: '456 Oak St', city: 'Othertown', state: 'NY', zipCode: '67890'},
    {firstName: 'Jane', lastName: 'Smith', department: 'Engineering', birthDate: '1985-05-15', street: '456 Oak St', city: 'Othertown', state: 'NY', zipCode: '67890'},
  ];

  // Assurez-vous que cols correspond bien au type des données fournies
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

  return (
    <List data={exampleData} columns={columns} />
  )
}

export default EmployeesList