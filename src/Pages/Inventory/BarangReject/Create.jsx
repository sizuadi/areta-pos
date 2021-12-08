import React from 'react'
import { Link } from 'react-router-dom'

export const Create = () => {
  window["$"](".datepicker").daterangepicker({
    singleDatePicker: true,
    todayHighlight: true,
    orientation: "bottom left",
    autoclose: true,
    language: "id",
    locale: {
      format: "DD-MM-YYYY",
    },
  });
  
  return (
    <>
    <div className='toolbar' id='kt_toolbar'>
      <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
        <div data-kt-swapper='true' data-kt-swapper-mode='prepend' data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'>
          <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1 py-3'>Barang Reject</h1>
          <span className='h-20px border-gray-200 border-start ms-3 mx-2' />
          <small className='text-muted fs-7 fw-bold my-1 ms-1'>Tambah</small>
        </div>
      </div>
    </div>
    <div className='post d-flex flex-column-fluid' id='kt_post'>
      <div id="kt_content_container" className="container-fluid">
        <div className="card shadow-sm">
          <div className="card-header">
            <h3 className="card-title">Tambah Barang Reject</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <form action="/">
                  <div className="row">
                    <div className="col-md-6 mb-10">
                      <label className="required form-label">Supplier Name</label>
                      <input type="text" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-md-6 mb-10">
                      <label className="required form-label">Purchase Date</label>
                      <input type="text" name="date" id="date" className="form-control datepicker" />
                    </div>
                    <div className="col-md-6 mb-10">
                      <label className="required form-label">Status</label>
                      <select className="form-select">
                        <option>Pilih Status</option>
                        <option value={1}>Received</option>
                        <option value={2}>Pending</option>
                        <option value={3}>Ordered</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-10">
                      <label className="required form-label">Reference No.</label>
                      <input type="text" className="form-control" autoComplete="off" />
                    </div>
                    <div className="separator separator-dashed border-dark mb-10" />
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-barcode fs-1 fa-bolder"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Item Name/Barcode/Itemcode" />
                        </div>															
                      </div>
                    </div>
                    <div className="table-responsive mt-10">
                      <table className="table gy-5 gs-5">
                        <thead className="table-dark">
                          <tr><td className="min-w-200px">Item Name</td>
                          <td className="min-w-200px">Quantity</td>
                          <td className="min-w-200px">Purchase Price(Rp)</td>
                          <td className="min-w-200px">Tax %</td>
                          <td className="min-w-200px">Tax Amount(Rp)</td>
                          <td className="min-w-200px">Discount (%)</td>
                          <td className="min-w-200px">Unit Cost(Rp)</td>
                          <td className="min-w-200px">Total Amount(Rp)</td>
                          <td>Action</td>
                        </tr></thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-control">
                                Iphone 11
                              </div>
                            </td>
                            <td>
                              <div className="input-group w-200px input-group-solid">
                                <button className="cursor-pointer input-group-text">
                                  <i className="fas fa-minus text-danger"></i>
                                </button>
                                <input type="text" className="form-control text-center" />
                                <button className="cursor-pointer input-group-text">
                                  <i className="fas fa-plus text-success"></i>
                                </button>
                              </div>
                            </td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td>
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Click to Change">
                                <button type="button" className="form-control" data-bs-toggle="modal" data-bs-target="#kt_modal_1">
                                  GST 18%
                                </button>
                              </div>
                            </td>
                            <td>
                              <span className="form-control form-control-solid text-end">
                                16016.95
                              </span>
                            </td>
                            <td>
                              <input type="text" className="form-control text-center" />
                            </td>
                            <td>
                              <span className="form-control form-control-solid text-end">
                                105000.00
                              </span>
                            </td>
                            <td>
                              <span className="form-control form-control-solid text-end">
                                105000.00
                              </span>
                            </td>
                            <td>
                              <button className="btn btn-danger px-3 py-2 m-auto">
                                <i className="fas fa-minus fs-4 text-white pe-0"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-control">
                                Iphone 11
                              </div>
                            </td>
                            <td>
                              <div className="input-group w-200px input-group-solid">
                                <button className="cursor-pointer input-group-text">
                                  <i className="fas fa-minus text-danger"></i>
                                </button>
                                <input type="text" className="form-control text-center" />
                                <button className="cursor-pointer input-group-text">
                                  <i className="fas fa-plus text-success"></i>
                                </button>
                              </div>
                            </td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td>
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Click to Change">
                                <button type="button" className="form-control" data-bs-toggle="modal" data-bs-target="#kt_modal_1">
                                  GST 18%
                                </button>
                              </div>
                            </td>
                            <td>
                              <span className="form-control form-control-solid text-end">
                                16016.95
                              </span>
                            </td>
                            <td>
                              <input type="text" className="form-control text-center" />
                            </td>
                            <td>
                              <span className="form-control form-control-solid text-end">
                                105000.00
                              </span>
                            </td>
                            <td>
                              <span className="form-control form-control-solid text-end">
                                105000.00
                              </span>
                            </td>
                            <td>
                              <button className="btn btn-danger px-3 py-2 m-auto">
                                <i className="fas fa-minus fs-4 text-white pe-0"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="separator separator-dashed border-dark my-10"></div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row align-items-center">
                          <div className="col-sm-4">
                            <span className="fs-4 fw-bold">Total Quantities</span>
                          </div>
                          <div className="col-sm-8">
                            <span className="fs-4">2</span>
                          </div>
                        </div>
                        <div className="row mt-5 align-items-center">
                          <div className="col-sm-4">
                            <span className="fs-4 fw-bold">Other Charges</span>
                          </div>
                          <div className="col-sm-4">
                            <input type="number" className="form-control" />
                          </div>
                          <div className="col-sm-4">
                            <select className="form-select">
                              <option>None</option>
                              <option value="1">Vat 5%</option>
                              <option value="2">Tax 10%</option>
                              <option value="3">GST 9%</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mt-5 align-items-center">
                          <div className="col-sm-4">
                            <span className="fs-4 fw-bold">Discount on All</span>
                          </div>
                          <div className="col-sm-4">
                            <input type="number" className="form-control" />
                          </div>
                          <div className="col-sm-4">
                            <select className="form-select">
                              <option value="1">Per%</option>
                              <option value="2">Fixed</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mt-5 align-items-center">
                          <div className="col-sm-4">
                            <span className="fs-4 fw-bold">Note</span>
                          </div>
                          <div className="col-sm-8">
                            <textarea name="" rows="3" className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row align-items-center">
                          <div className="col-sm-6 text-end">
                            <span className="fs-4 fw-bold">Subtotal</span>
                          </div>
                          <div className="col-sm-4 text-end">
                            <span className="fs-4">Rp. 228900.00</span>
                          </div>
                        </div>
                        <div className="row mt-5 align-items-center">
                          <div className="col-sm-6 text-end">
                            <span className="fs-4 fw-bold">Other Charges</span>
                          </div>
                          <div className="col-sm-4 text-end">
                            <span className="fs-4">Rp. 0.00</span>
                          </div>
                        </div>
                        <div className="row mt-5 align-items-center">
                          <div className="col-sm-6 text-end">
                            <span className="fs-4 fw-bold">Discount on All</span>
                          </div>
                          <div className="col-sm-4 text-end">
                            <span className="fs-4">Rp. 0.00</span>
                          </div>
                        </div>
                        <div className="row mt-5 align-items-center">
                          <div className="col-sm-6 text-end">
                            <span className="fs-4 fw-bold">Grand Total</span>
                          </div>
                          <div className="col-sm-4 text-end">
                            <span className="fs-4">Rp. 228900.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-10">
                      <div className="fs-4 fw-bold">Previous Payments Information :</div>
                      <div className="table-responsive mt-10">
                        <table className="table gy-5 gs-5">
                          <thead className="table-dark">
                            <tr><td>#</td>
                            <td className="min-w-200px">Date</td>
                            <td className="min-w-200px">Payment Type</td>
                            <td className="min-w-200px">Payment Note</td>
                            <td className="min-w-200px">Payment</td>
                            <td>Action</td>
                          </tr></thead>
                          <tbody>
                            <tr>
                              <td colSpan="6" className="text-center"> 
                                <span className="fs-4 fw-bolder">Payments Pending</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row mt-10">
                      <div className="fs-4 fw-bold mb-5">Make Payment :</div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-10">
                        <label>Amount</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-6 mb-10">
                        <label>Payment Type</label>
                        <select className="form-select">
                          <option value="1">Cash</option>
                          <option value="2">Card</option>
                        </select>
                      </div>
                      <div className="col-12 mb-10">
                        <label>Payment Note</label>
                        <textarea className="form-control" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success">Simpan</button>{" "}
                  <Link to="/inventory/barang-reject" className="btn btn-warning">Kembali</Link>
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
