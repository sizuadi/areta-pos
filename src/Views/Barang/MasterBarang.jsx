import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSanctum } from 'react-sanctum';

import TableLoader from '../../Components/PageComponent/TableLoader';
import api from '../../Util/api'
import { asset, rupiah } from '../../Util/commonHelpers';

export default function MasterBarang() {
  const [paginated, setPaginated] = useState({
    current_page: 0,
    data: [],
    first_page_url: "",
    from: 0,
    last_page: 0,
    last_page_url: "",
    links: [],
    next_page_url: "",
    path: "",
    per_page: 0,
    prev_page_url: "",
    to: 0,
    total: 0,
  });

  const {signOut} = useSanctum()
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api().get(`/api/products?page=${currentPage}`).then(response => {
      setPaginated(response.data);
      setIsLoading(false);
    }).catch(err => {
      if (err.response.status === 401) {
        signOut();
      }
    });
  }, [currentPage, signOut]);

  const nextHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentPage(currentPage + 1);
  }

  const prevHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentPage(currentPage - 1);
  }

  const goToHandler = (e, page) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentPage(page);
  }

  let clonedPagination = !isLoading && paginated.links.slice();
  !isLoading && clonedPagination.shift();
  !isLoading && clonedPagination.pop();
  
  let pagination = !isLoading && clonedPagination.map((item, index) => {
    return (
      <div key={index}>
        <li className={`page-item ${item.active && 'active'} m-1`}><span className="page-link cursor-pointer" onClick={(e) => goToHandler(e, parseInt(item.label))}>{item.label}</span></li>
      </div>
    )
  })

  let firstPage = !isLoading && (
    <div>
      <li className={`page-item previous m-1 ${!paginated.prev_page_url ? 'disabled' : null}`}><span className="page-link cursor-pointer" onClick={(e) => prevHandler(e)}><i className="previous"></i></span></li>
    </div>
  );

  let lastPage = !isLoading && (
    <div>
      <li className={`page-item previous m-1 ${!paginated.next_page_url ? 'disabled' : null}`}><span className="page-link cursor-pointer" onClick={(e) => nextHandler(e)}><i className="next"></i></span></li>
    </div>
  );

  let loader = <TableLoader colSpan={4} />

  let products = paginated.data?.map((item, index) => {
    return (
      <tr key={index}>
        <td>
          <div className="d-flex align-items-center">
            <div className="symbol symbol-50px me-5">
              <img src={asset("assets/media/products/box.png")} className="h-75 align-self-end" alt="product" />
            </div>
            <div className="d-flex justify-content-start flex-column">
              <span className="text-dark fw-bolder text-hover-primary cursor-pointer mb-1 fs-6">{item.name}</span>
              <span className="text-muted fw-bold text-muted d-block fs-7">{item.category.name}</span>
            </div>
          </div>
        </td>
        <td>
          <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6">{rupiah(item.price)}</span>
        </td>
        <td>
          <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6 text-truncate" style={{maxWidth: '300px'}}>
            {item.description}
          </span>
        </td>
        <td className="text-end">
          <a href="/" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2">View</a>
          <a href="/" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">Edit</a>
        </td>
      </tr>
    )
  })
  

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
      <div className='post d-flex flex-column-fluid' id='kt_post'>
        <div id='kt_content_container' className='container-xxl'>
          <div className="card mb-5 mb-xl-8">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder fs-3 mb-1">Daftar Barang</span>
                <span className="text-muted mt-1 fw-bold fs-7">Semua barang inventory</span>
              </h3>
              <div className="card-toolbar">
                <button type="button" className="btn btn-primary">
                  Tambah
                </button>
              </div>
            </div>
            <div className="card-body py-3">
              <div className="table-responsive">
                <table className="table align-middle gs-0 gy-4">
                  <thead>
                    <tr className="fw-bolder text-muted bg-light">
                      <th className="ps-4 min-w-300px rounded-start">Nama Produk</th>
                      <th className="min-w-125px">Harga</th>
                      <th className="min-w-200px">Deskripsi</th>
                      <th className="min-w-200px text-end rounded-end"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? loader : products}
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-outline justify-content-end">
                  {!isLoading && firstPage}
                  {!isLoading && pagination}
                  {!isLoading && lastPage}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
