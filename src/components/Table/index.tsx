import Footer from "./Footer"
import Header from "./Header"
import Row from "./Row"

export type ColType<T> = {
  title: string,
  property: keyof T
}

export type TableProps<T> = {
  data: T[],
  columns: ColType<T>[],
}

const Table = <T,>({data, columns}: TableProps<T>) => {
  const nbOfTitles = columns.length;
  return (
    <div className="w-full md:p-4">
      {/* Search + Table */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <input className="p-1 border border-grey rounded-sm" placeholder="Search" />
          <div className="flex gap-2">
            <span className="text-sm font-bold">Show on page</span>
            <select id="department" className="border border-gray-300 rounded">
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
        </div>

        <table className="w-full max-w-full">
          <thead>
            <tr className="bg-gray-200 border-y-2 border-solid border-gray-400 rounded-sm">
              {columns.map((col, index) => (
                <Header key={index} title={col.title} />
              ))}
            </tr>
          </thead>
          <tbody className="">
            {data.map((val, dataIndex) => (          
              <Row key={dataIndex} columns={columns} val={val} nbOfTitles={nbOfTitles} totalRows={data.length - 1} rowIndex={dataIndex} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <Footer columnsLength={columns.length} />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Table