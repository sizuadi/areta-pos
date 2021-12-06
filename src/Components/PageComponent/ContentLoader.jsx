import React from 'react'
import Loader from 'react-loader-spinner'

export default function ContentLoader() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column flex-column-fluid h-100">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
    </div>
  )
}
