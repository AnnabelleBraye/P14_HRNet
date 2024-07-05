type AlertModalProps = {
  title: string,
  text?: string,
  onValidate: {
    label: string,
    onClick: () => void,
  }
  onCancel: {
    label: string,
    onClick: () => void,
  }
}

const AlertModal = ({
  title,
  text,
  onValidate,
  onCancel
}: AlertModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50">
      <div className="bg-white shadow-lg rounded-lg w-4/5 md:w-1/2 lg:w-1/3 ">
        <h3 className="text-lg bg-gray-300 font-semibold rounded-t-lg p-3 mb-4">{title}</h3>
        {text && <p className="mb-4 p-3">{text}</p>}
        <div className="flex justify-end space-x-2 p-3">
          <button
            type='button' 
            onClick={onCancel.onClick}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            {onCancel.label}
          </button>
          <button 
            type='button' 
            onClick={onValidate.onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {onValidate.label}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlertModal