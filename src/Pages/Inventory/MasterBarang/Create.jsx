import React from 'react'

export default function Create() {
  return (
    <>
    <div className='toolbar' id='kt_toolbar'>
      <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
        <div data-kt-swapper='true' data-kt-swapper-mode='prepend' data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'>
          <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1 py-3'>Master Barang</h1>
          <span className='h-20px border-gray-200 border-start ms-3 mx-2' />
          <small className='text-muted fs-7 fw-bold my-1 ms-1'>Tambah</small>
        </div>
      </div>
    </div>
    <div className='post d-flex flex-column-fluid' id='kt_post'>
      <div id="kt_content_container" className="container-fluid">
        <div className="card shadow-sm">
          <div className="card-header">
            <h3 className="card-title">Tambah Master Barang</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <form action="/">
                  <div className="row">
                    <div className="col-md-6 mb-10">
                      <label className="required form-label">Nama Barang</label>
                      <input type="text" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-md-6 mb-10">
                      <label className="required form-label">Kategori Barang</label>
                      <select className="form-select">
                        <option>Pilih Kategori</option>
                        <option value={1}>Teknologi</option>
                        <option value={2}>Computers</option>
                        <option value={3}>Shirt</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-10">
                      <label className="required form-label">Stock</label>
                      <input type="number" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-md-4 mb-10">
                      <label className="required form-label">SKU</label>
                      <input type="number" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-md-4 mb-10">
                      <label className="required form-label">Unit</label>
                      <select className="form-select">
                        <option>Pilih Unit</option>
                        <option value={1}>Box</option>
                        <option value={2}>Drums</option>
                        <option value={3}>Pieces</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-10">
                      <label className="required form-label">Kadaluarsa</label>
                      <input type="text" className="form-control datepicker" autoComplete="off" />
                    </div>
                    <div className="col-md-4 mb-10">
                      <label className="required form-label">Minimum Qty</label>
                      <input type="number" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-md-4 mb-10">
                      <label className="required form-label">Gambar</label>
                      <input type="file" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-10">
                      <label className="required form-label">Dekripsi</label>
                      <textarea className="form-control" autoComplete="off" rows={3} defaultValue={""} />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success">Simpan</button>
                  <a href="./index.html" className="btn btn-warning">Kembali</a>
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
