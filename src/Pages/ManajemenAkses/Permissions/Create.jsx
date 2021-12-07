import React from 'react'
import { Link } from 'react-router-dom'

export const Create = () => {
  return (
    <>
    <div className='toolbar' id='kt_toolbar'>
      <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
        <div data-kt-swapper='true' data-kt-swapper-mode='prepend' data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'>
          <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1 py-3'>Permissions</h1>
          <span className='h-20px border-gray-200 border-start ms-3 mx-2' />
          <small className='text-muted fs-7 fw-bold my-1 ms-1'>Tambah</small>
        </div>
      </div>
    </div>
    <div className='post d-flex flex-column-fluid' id='kt_post'>
      <div id="kt_content_container" className="container-fluid">
        <div className="card shadow-sm">
          <div className="card-header">
            <h3 className="card-title">Tambah Permission</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <form action="/">
                  <div className="row">
                    <div className="col-md-12 mb-10">
                      <label className="required form-label">Nama Permission</label>
                      <input type="text" className="form-control" autoComplete="off" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success">Simpan</button>{" "}
                  <Link to="/manajemen-akses/roles" className="btn btn-warning">Kembali</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
