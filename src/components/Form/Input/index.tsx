type InputProps = {
  label: string;
  id: string;
}

const Input = (props: InputProps) => {
  return (
    <div className="flex-1">
      <label htmlFor={`${props.id}`} className="block text-xs font-bold mb-2 md:text-sm">{props.label}</label>
      <input type="text" id={`${props.id}`} className="w-full p-2 border border-gray-300 rounded" />
    </div>
  )
}

export default Input