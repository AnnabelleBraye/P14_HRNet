type FooterProps = {
  columnsLength: number
}

const Footer = ({columnsLength}: FooterProps) => {
  return (
    <td colSpan={columnsLength} className="p-2">
        <div className="flex justify-between">
          <p>Showing 0 to 0 of 0 entries</p>
          <div>
            <button className="mr-2">
              Previous
            </button>
            <span>1</span>
            <button className="ml-2">
              Next
            </button>
          </div>
        </div>
      </td>
  )
}

export default Footer