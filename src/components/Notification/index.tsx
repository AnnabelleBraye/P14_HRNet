type NotificationProps = {
  message: string
}

const Notification = ({ message }: NotificationProps) => {
  return (
    <div className="fixed bg-green-500 hidden text-white p-4 rounded shadow-lg sm:block sm:top-4 sm:right-4 sm:max-w-sm sm:w-auto">
      {message}
    </div>
  )
}

export default Notification
