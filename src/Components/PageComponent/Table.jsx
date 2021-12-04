import React from 'react'
import TableLoader from './TableLoader'

export default function Table({loadingState, tableHeader, tableBody, tableClass}) {
  return (
    <table className={!tableClass && "table align-middle gs-0 gy-4"}>
      <thead>
        <tr className="fw-bolder text-muted bg-light">
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
