import { ChangeEvent, useEffect, useState } from "react"
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortedData, setSortedData] = useState<T[]>(data);
  const [sortProperty, setSortProperty] = useState<keyof T | null>(null);
  const [totalPages, setTotalPages] = useState(getTotalPages(sortedData, itemsPerPage));
  const [startIndex, setStartIndex] = useState(getStartIndex(currentPage, itemsPerPage));
  const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage);
  const [currentData, setCurrentData] = useState(getCurrentData(sortedData, startIndex, endIndex));
  
  const columnsMaxWidth = getColumnsMaxWidth(nbOfTitles);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage])

  useEffect(() => {
    setStartIndex(getStartIndex(currentPage, itemsPerPage));
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    setTotalPages(getTotalPages(sortedData, itemsPerPage));
    setEndIndex(startIndex + itemsPerPage);
  }, [itemsPerPage, startIndex, sortedData]);

  useEffect(() => {
    setCurrentData(getCurrentData(sortedData, startIndex, endIndex));
  }, [startIndex, endIndex, sortedData])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(e.target.value) || 5);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const sortList = (property: keyof T) => {
    const sorted = [...sortedData].sort((a, b) => {
      const aValue = a[property];
      const bValue = b[property];
      
      if (typeof aValue === "string" && typeof bValue === "string") {
        if (property === sortProperty) {
          setSortProperty(null);
          return aValue.localeCompare(bValue);
        }
        setSortProperty(property);
        return bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        if (property === sortProperty) {
          setSortProperty(null);
          return aValue - bValue;
        }
        setSortProperty(property);
        return aValue - bValue;
      }

      return 0;
    });

    setSortedData(sorted);
  }

  return (
    <div className="w-full md:p-4">
      {/* Search + Table */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <input className="p-1 border border-grey rounded-sm" placeholder="Search" />
          <div className="flex gap-2">
            <span className="text-sm font-bold">Show on page</span>
            <select
              id="department" 
              className="border border-gray-300 rounded"
              onChange={handleChange}
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <table className="overflow-scroll w-full max-w-full">
            <thead>
              <tr className="bg-gray-200 border-y-2 border-solid border-gray-400 rounded-sm">
                {columns.map((col, index) => (
                  <Header
                    key={index} 
                    title={col.title} 
                    onClick={() => sortList(col.property)}
                    columnsMaxWidth={columnsMaxWidth}  
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((val, dataIndex) => (          
                <Row
                  key={dataIndex}
                  columns={columns}
                  val={val}
                  columnsMaxWidth={columnsMaxWidth}
                  totalRows={data.length - 1}
                  rowIndex={dataIndex} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <Footer
                  columnsLength={columns.length} 
                  handlePrevious={handlePrevious} 
                  handleNext={handleNext} 
                  currentPage={currentPage} 
                  totalPages={totalPages}
                  startIndex={startIndex}
                  endIndex={endIndex}
                  totalData={sortedData.length}
                  />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

const getTotalPages = <T,>(data: T[], itemsPerPage: number) => {
  return Math.ceil(data.length / itemsPerPage)
}

const getColumnsMaxWidth = (nbOfTitles: number) => {
  const { innerWidth: width } = window;

  return Math.floor((width/nbOfTitles))
}

const getStartIndex = (currentPage: number, itemsPerPage: number) => {
  return (currentPage - 1) * itemsPerPage;
}

const getCurrentData = <T,>(data: T[], startIndex: number, endIndex: number) => {
  return data.slice(startIndex, endIndex)
}
export default Table