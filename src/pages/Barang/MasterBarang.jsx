import React from 'react'

export default function MasterBarang() {
  return (
    <div>
      <div className='toolbar' id='kt_toolbar'>
        <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
          <div
            data-kt-swapper='true'
            data-kt-swapper-mode='prepend'
            data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
            className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'
          >
            <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1 py-3'>Master Barang</h1>
            <span className='h-20px border-gray-200 border-start ms-3 mx-2' />
            <small className='text-muted fs-7 fw-bold my-1 ms-1'>List Page</small>
          </div>
        </div>
      </div>
      <div className='post d-flex flex-column-fluid mt-20' id='kt_post'>
        <div id='kt_content_container' className='container-xxl'>
          <div className='card'>
            <div className='card-body pb-0'>
              <div className='card-px text-center pt-20 pb-5'>
                <h2 className='fs-2x fw-bolder mb-0'>Master Barang</h2>
                <p className='text-gray-400 fs-4 fw-bold py-7'>
                  This is example page.
                  <br />
                  to fill the layout.
                </p>
                <button
                  className='btn btn-primary er fs-6 px-8 py-4'
                >
                  Tambah Barang
                </button>
              </div>
              <div className='text-center px-5'>
                <img
                  src='/assets/media/illustrations/sketchy-1/2.png'
                  alt="sample"
                  className='mw-100 h-200px h-sm-325px'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
