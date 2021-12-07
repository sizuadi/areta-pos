import React from 'react'
import { Link } from 'react-router-dom'

export const Create = () => {
  return (
    <>
      <div className='toolbar' id='kt_toolbar'>
        <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
          <div data-kt-swapper='true' data-kt-swapper-mode='prepend' data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'>
            <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1 py-3'>Stock Opname</h1>
          </div>
        </div>
      </div>
      <div className='post d-flex flex-column-fluid' id='kt_post'>
        <div id="kt_content_container" className="container-fluid">
          <div className="card shadow-sm">
            <div className="card-header">
              <h3 className="card-title">Input Stock Opname</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <form action="/">
                    <div className="row">
                      <div className="col-md-6 mb-10">
                        <label className="required form-label">Nama Barang</label>
                        <select className="form-select">
                          <option>Pilih Barang</option>
                          <option value={1}>Teknologi</option>
                          <option value={2}>Computers</option>
                          <option value={3}>Shirt</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-10">
                        <label className="required form-label">Aktual</label>
                        <input type="text" className="form-control" defaultValue={10} />
                      </div>
                      <div className="col-md-6 mb-10">
                        <label className="required form-label">Jumlah Awal</label>
                        <input type="text" className="form-control" defaultValue={10} disabled="disabled" />
                      </div>
                      <div className="col-md-6 mb-10">
                        <label className="required form-label">Unit Awal</label>
                        <input type="text" className="form-control" defaultValue="Box" disabled="disabled" />
                      </div>
                      <div className="col-md-6 mb-10">
                        <label className="required form-label">Unit</label>
                        <select className="form-select">
                          <option>Pilih Unit</option>
                          <option value={1}>Pcs</option>
                          <option value={2}>Box</option>
                          <option value={3}>Container</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-10">
                        <label className="required form-label">Jumlah per Unit</label>
                        <input type="text" className="form-control" autoComplete="off" />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-10">Tambah</button>{" "}
                    <div className="separator my-2"></div>
                    <div className="table-responsive my-5">
                      <table className="table gy-5 gs-5">
                        <thead className="table-dark">
                          <tr><td>#</td>
                            <td className="min-w-200px">Barang</td>
                            <td className="min-w-200px">Aktual</td>
                            <td className="min-w-200px">Keterangan</td>
                            <td>Action</td>
                          </tr></thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Taro Net Kentang</td>
                            <td>100</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate, libero quos ex obcaecati sed sequi unde commodi alias maxime, consequatur quaerat repellendus tempore ipsum.</td>
                            <td>
                              <button className="btn btn-danger px-3 py-2 m-auto">
                                <i className="fas fa-minus fs-4 text-white pe-0" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Taro Net Kentang</td>
                            <td>100</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate, libero quos ex obcaecati sed sequi unde commodi alias maxime, consequatur quaerat repellendus tempore ipsum.</td>
                            <td>
                              <button className="btn btn-danger px-3 py-2 m-auto">
                                <i className="fas fa-minus fs-4 text-white pe-0" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button type="submit" className="btn btn-success">Selesaikan</button>{" "}
                    <Link to="/inventory/stock-opname" className="btn btn-warning">Kembali</Link>
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
