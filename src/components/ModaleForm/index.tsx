import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Input from "../Form/Input"
import { User } from "../../pages/EmployeesList"
import { states } from "../../data/states"
import Select from "../Form/Select"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import AlertModal from "../AlertModal"


type ModaleFormProps = {
  onCancel: () => void,
  onValidate: (user: User) => void,
}

const ModaleForm = ({onCancel, onValidate}: ModaleFormProps) => {
  const {
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    state,
    zipCode,
    department,
    errors,
    departmentsOpt,
    statesOpt,
    showAlert,
    setFirstName,
    setLastName,
    setBirthDate,
    setStartDate,
    setStreet,
    setCity,
    setState,
    setZipCode,
    setDepartment,
    setShowAlert,
    cancel,
    addUser,
  } = useModalForm({onCancel, onValidate});

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full md:max-h-full overflow-y-auto sm:fixed sm:inset-0 sm:backdrop-blur-sm sm:bg-dark-blue/40">
      <div className="flex flex-col items-center bg-white w-full md:h-max sm:bg-gray-100 p-4 sm:p-4 md:p-8 md:max-w-3xl lg:justify-center">
        <div className="flex px-3 sm:px-0 justify-between items-center w-full mb-6 lg:mb-10">
          <FontAwesomeIcon 
            size="xl" 
            className="sm:hidden" 
            icon={faArrowLeft} 
            onClick={cancel}
          />
          <h2 className="text-xl w-full text-center sm:text-left sm:text-2xl md:text-3xl lg:text-4xl">Add an employee</h2>
          <FontAwesomeIcon 
            size="xl" 
            className="hidden sm:block" 
            icon={faXmark} 
            onClick={cancel}
          />
        </div>
        <div className="w-full p-3 bg-white sm:flex sm:flex-col sm:rounded sm:shadow-md lg:m-5">
          <form className="space-y-4 md:space-y-6">
            <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
              <Input 
                label='First Name' 
                id='firstname' 
                value={firstName} 
                setValue={setFirstName} 
                type='string' 
                error={errors.firstName}
              />
              <Input
                label='Last Name' 
                id='lastname' 
                value={lastName} 
                setValue={setLastName} 
                type='string' 
                error={errors.lastName}
              />
            </div>
            <div className="flex flex-col w-full flex-wrap gap-4 sm:flex-row">
              <Input 
                label='Birth date' 
                id='birth_date' 
                value={birthDate} 
                setValue={setBirthDate} 
                max={startDate}
                type='date' 
                error={errors.birthDate}
              />
              <Input 
                label='Start date' 
                id='start_date' 
                value={startDate} 
                setValue={setStartDate} 
                min={birthDate}
                type='date'  
                error={errors.startDate}
              />
            </div>
            <fieldset className="border border-gray-300 p-4 rounded">
              <legend className="text-lg font-bold">Address</legend>
              <div className="flex flex-col flex-wrap gap-4 mt-4 sm:grid sm:grid-cols-2 md:flex-row">
                <Input
                  label='Street' 
                  id='street' 
                  value={street} 
                  setValue={setStreet} 
                  type='string' 
                  error={errors.street}
                />
                <Input 
                  label='City' 
                  id='city' 
                  value={city} 
                  setValue={setCity} 
                  type='string'
                  error={errors.city}
                />
                <Input 
                  label='Zip Code' 
                  id='zip_code' 
                  value={zipCode}
                  setValue={setZipCode} 
                  type='string'  
                  error={errors.zipCode}
                />
                <Select 
                  label='Department' 
                  id='department' 
                  value={department} 
                  setValue={setDepartment} 
                  optsList={departmentsOpt} 
                  error={errors.department}
                />
              </div>
            </fieldset>
            <Select 
              label='State' 
              id='state' 
              value={state} 
              setValue={setState} 
              optsList={statesOpt}  
              error={errors.state} 
            />
            
            <div className="flex justify-end items-center w-full gap-2 md:gap-4">
              <button
                type="button"
                className="mt-6 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 md:w-fit md:self-end"
                onClick={cancel}
              >
                Cancel
              </button>
              <button 
                type='submit'
                onClick={addUser} 
                className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 md:w-fit md:self-end"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        {showAlert && (
          <AlertModal
            title="Unsaved Changes"
            text="You have unsaved changes. Are you sure you want to close the form?"
            onValidate={{
              label: 'Yes, Close',
              onClick: () => {
                setShowAlert(false);
                onCancel();
              }
            }}
            onCancel={{
              label: 'No, Keep Editing',
              onClick: () => setShowAlert(false)
            }}
          />
        )}
      </div>
    </div>
  )
}

const useModalForm = ({onCancel, onValidate}: ModaleFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('Sales');
  const [state, setState] = useState(states[0].abbreviation);
  const [zipCode, setZipCode] = useState('');

  const [showAlert, setShowAlert] = useState(false);

  const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    department: "",
    state: "",
    zipCode: ""
  });

  const validateForm = (user: User) => {
    const newErrors: typeof errors = {
      firstName: user.firstName === '' ? 'First Name is required' : '',
      lastName: user.lastName === '' ? 'Last Name is required' : '',
      birthDate: user.birthDate === '' ? 'Birth Date is required' : '',
      startDate: user.startDate === '' ? 'Start Date is required' : '',
      street: user.street === '' ? 'Street is required' : '',
      city: user.city === '' ? 'City is required' : '',
      department: user.department === '' ? 'Department is required' : '',
      state: user.state === '' ? 'State is required' : '',
      zipCode: user.zipCode === '' ? 'Zip Code is required' : ''
    };

    return newErrors;
  };

  const statesOpt = states.map((state, index) => (
    <option key={index} value={state.abbreviation}>{state.name}</option>
  ))

  const departmentsOpt = departments.map((department, index) => (
    <option key={index} value={department}>{department}</option>
  ))

  const addUser = () => {
    const user: User = {
      firstName,
      lastName,
      birthDate,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    }
    const newErrors = validateForm(user);

    if (Object.values(newErrors).every((error) => error === '')) {
      onValidate(user);
      onCancel();
    } else {
      setErrors(newErrors);
    }
  }

  const cancel = () => {
    if (firstName || lastName || street || city || zipCode) {
      setShowAlert(true);
    } else {
      onCancel();
    }
  }

  return {
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    state,
    zipCode,
    department,
    statesOpt,
    departmentsOpt,
    showAlert,
    errors,
    setFirstName,
    setLastName,
    setBirthDate,
    setStartDate,
    setStreet,
    setCity,
    setState,
    setZipCode,
    setDepartment,
    setShowAlert,
    cancel,
    addUser,
  }
}

export default ModaleForm