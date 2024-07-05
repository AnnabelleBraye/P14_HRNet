import { ReactNode } from "react"

type SelectProps = {
  label: string,
  id: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  optsList: Iterable<ReactNode>,
  error?: string,
}

const Select = ({
  label,
  id,
  value,
  setValue,
  optsList,
  error = '',
}: SelectProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold w-full after:content-['*'] after:text-red-500 mb-2 md:text-sm">{label}</label>
      <select
        id={id} 
        className={`w-full p-2 border border-gray-300 rounded ${error ? 'border-red-500' : ''}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {optsList}
      </select>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}

export default Select