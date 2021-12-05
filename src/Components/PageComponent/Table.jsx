import React from 'react'
import TableLoader from './TableLoader'

export default function Table({loadingState, tableHeader, tableBody, tableClass}) {
  return (
    <table className={!tableClass && "table table-rounded table-striped border align-middle gs-0 gy-4"}>
      <thead>
        <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
          {tableHeader.map((header, index) => {
            return <th key={index} className={header.className}>{header.title}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {loadingState ? <TableLoader colSpan={tableHeader.length} /> : tableBody}
      </tbody>
    </table>
  )
}
