import React from "react";
import { ColType } from ".."

type RowProps<T> = {
  columns: ColType<T>[],
  val: T,
  nbOfTitles: number,
  totalRows: number,
  rowIndex: number
}

const Row = <T,>({columns, val, nbOfTitles, totalRows, rowIndex}: RowProps<T>) => { 
  const { innerWidth: width } = window;

  return (
    <React.Fragment>
      <tr className={`hover:bg-gray-100  ${rowIndex === totalRows ? 'border-b-2 border-gray-400' : 'border-b'}`}>
        {columns.map((prop, propIndex) => (
          <td 
            key={propIndex} 
            title={`${val[prop.property]}`}
            className={`text-ellipsis whitespace-nowrap overflow-hidden p-4 min-w-32 md:min-w-min`}
            style={{ maxWidth: `${Math.floor((width/nbOfTitles))}px`, width: `${Math.floor((width/nbOfTitles))}px` }} 
          >
            {`${val[prop.property]}`}
          </td>
        ))}
      </tr>
    </React.Fragment>
    // </tr>
  )
}

export default Row