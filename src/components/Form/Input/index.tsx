import { ChangeEvent } from "react";

type InputProps = {
  label: string;
  id: string;
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  type: string,
  min?: string,
  max?: string,
  error?: string;
}

const Input = ({label, id, value, setValue, type, min, max, error = ''}: InputProps) => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div className="flex-1">
      <label htmlFor={`${id}`} className="block text-xs font-bold mb-2 after:content-['*'] after:text-red-500 md:text-sm">{label}</label>
      <input
        type={type} 
        id={`${id}`} 
        className={`w-full p-2 border border-gray-300 rounded ${error ? 'border-red-500' : ''}`}
        value={value}
        onChange={(e) => onChangeValue(e)}
        min={min}
        max={max}
        required
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}

export default Input