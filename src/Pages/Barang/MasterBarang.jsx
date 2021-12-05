import React, { useState, useEffect } from 'react';
import { useSanctum } from 'react-sanctum';
import { Link } from 'react-router-dom';

import api from '../../Util/api'
import Table from '../../Components/PageComponent/Table';
import { asset, rupiah } from '../../Util/commonHelpers';
import TablePagination from '../../Components/PageComponent/TablePagination';
import { defaultBlueprint } from '../../Components/pagination.blueprint';

export default function MasterBarang() {
  const {signOut} = useSanctum()
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginated, setPaginated] = useState(defaultBlueprint);

  const tableHeader = [
    {
      title: "Nama Produk",
      className: "ps-4 min-w-300px rounded-start"
    },
    {
      title: "Harga",
      className: "min-w-125px"
    },
    {
      title: "Deskripsi",
      className: "min-w-200px"
    },
    {
      title: "",
      className: "min-w-200px text-end rounded-end"
    },
  ]

  useEffect(() => {
    const abortController = new AbortController();
    
    api().get(`/api/products?page=${currentPage}`, {
      signal: abortController.signal,
    }).then(response => {
      setPaginated(response.data);
      setIsLoading(false);
    }).catch(err => {
      if (err.response?.status === 401) {
        signOut();
      }
    });

    return () => {
      setIsLoading(true);
      abortController.abort();
    };
  }, [currentPage, signOut]);

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
          <Link to="/" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2">View</Link>
          <Link to="/" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">Edit</Link>
        </td>
      </tr>
    )
  })

  return (
    <>
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
                <Table loadingState={isLoading} tableHeader={tableHeader} tableBody={products} />
              </div>
              <TablePagination loadingState={isLoading} paginationApi={paginated} currentPage={currentPage} setIsLoading={setIsLoading} setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
