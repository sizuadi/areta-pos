import React from 'react'
import Loader from 'react-loader-spinner'

export default function TableLoader({colSpan}) {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </td>
    </tr>
  )
}
