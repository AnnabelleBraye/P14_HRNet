import Input from "./Input";

const Form = () => {
  const createEmployee = () => {
    alert("Employee Created!");
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 flex-1 sm:p-4 md:p-8 lg:justify-center">
      <div className="flex flex-col w-full bg-white p-3 rounded shadow-md md:max-w-2xl lg:m-12">
        <h2 className="text-xl mb-6 md:text-3xl lg:mb-10 lg:text-4xl">Create Employee</h2>
        <form className="space-y-4 md:space-y-6">
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <Input label='First Name' id='firstname' />
            <Input label='Last Name' id='lastname' />
          </div>
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <Input label='Date of Birth' id='date_of_birth' />
            <Input label='Start Date' id='start_date' />
          </div>
          <fieldset className="border border-gray-300 p-4 rounded">
            <legend className="text-lg font-bold">Address</legend>
            <div className="flex flex-col flex-wrap gap-4 mt-4 sm:grid sm:grid-cols-2 md:flex-row">
              <Input label='Street' id='street' />
              <Input label='City' id='city' />
              <div className="flex-1">
                <label htmlFor="state" className="block text-xs font-bold mb-2 md:text-sm">State</label>
                <select id="state" className="w-full p-2 border border-gray-300 rounded">
                  <option>State 1</option>
                  <option>State 2</option>
                  <option>State 3</option>
                </select>
              </div>
              <Input label='Zip Code' id='zip_code' />
            </div>
          </fieldset>
          <div>
            <label htmlFor="department" className="block text-xs font-bold mb-2 md:text-sm">Department</label>
            <select id="department" className="w-full p-2 border border-gray-300 rounded">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>
        </form>
        <button 
          onClick={createEmployee} 
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 md:w-fit md:self-end"
        >
          Save
        </button>
      </div>
    </div>

  )
}

export default Form