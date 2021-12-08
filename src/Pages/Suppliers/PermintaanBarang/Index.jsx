import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Table from '../../../Components/PageComponent/Table';
import TablePagination from '../../../Components/PageComponent/TablePagination';
import { dummyBlueprint } from '../../../Components/pagination.blueprint';

export default function PermintaanBarang () {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(dummyBlueprint);

  const dummyData = [
    {
      id: 1,
      purchase_date: "05-12-2021",
      purchase_code: "PU0019",
      purchase_status: "Received",
      supplier: "Rock Real",
      total: "Rp. 100.000",
      status: 1,
      created_at: "2021-10-27T15:06:52.000000Z",
      updated_at: "2021-10-27T15:06:52.000000Z",
      creator: {
        id: 2,
        name: "Benny Rahmat",
        email: "akunbeben@gmail.com",
        created_at: "2021-10-27T15:42:15.000000Z",
        updated_at: "2021-10-27T15:42:15.000000Z",
      },
    },
    {
      id: 2,
      purchase_date: "06-12-2021",
      purchase_code: "PU0020",
      purchase_status: "Received",
      supplier: "Rock Real",
      total: "Rp. 1.200.000",
      status: 1,
      created_at: "2021-10-27T15:07:12.000000Z",
      updated_at: "2021-10-27T15:07:12.000000Z",
      creator: {
        id: 2,
        name: "Benny Rahmat",
        email: "akunbeben@gmail.com",
        created_at: "2021-10-27T15:42:15.000000Z",
        updated_at: "2021-10-27T15:42:15.000000Z",
      },
    },
    {
      id: 3,
      purchase_date: "07-12-2021",
      purchase_code: "PU0021",
      purchase_status: "Received",
      supplier: "Rock Real",
      total: "Rp. 100.000",
      status: 1,
      created_at: "2021-10-27T15:07:12.000000Z",
      updated_at: "2021-10-27T15:07:12.000000Z",
      creator: {
        id: 2,
        name: "Benny Rahmat",
        email: "akunbeben@gmail.com",
        created_at: "2021-10-27T15:42:15.000000Z",
        updated_at: "2021-10-27T15:42:15.000000Z",
      },
    },
  ];
  
  const tableHeader = [
    {
      title: "Purhcase Date",
      className: "ps-4 rounded-start",
    },
    {
      title: "Purchase Code",
      className: "",
    },
    {
      title: "Purchase Status",
      className: "min-w-200px"
    },
    {
      title: "Supplier",
      className: ""
    },
    {
      title: "Total",
      className: "text-center"
    },
    {
      title: "Received By",
      className: ""
    },
    {
      title: "Status",
      className: "min-w-200px text-center rounded-end",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(prev => ({
        ...prev,
        to: 3,
        total: 3,
        data: dummyData,
      }));

      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    }
  });
  
  const searchHandler = (e) => {
    //
  }

  const pageLength = e => {
    //
  }

  let content = items.data.length === 0 ? 
  <tr>
    <td colSpan={tableHeader.length} className="text-center">
      <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6">Barang tidak ditemukan.</span>
    </td>
  </tr> :
  items.data.map((item, index) => {
    return (
      <tr key={index}>
        <td className="ps-4">
          <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6">{item.purchase_date}</span>
        </td>
        <td>
          <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6">{item.purchase_code}</span>
        </td>
        <td>
          <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6">{item.purchase_status}</span>
        </td>
        <td>
          <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6">{item.supplier}</span>
        </td>
        <td className="text-center">
          <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6">{item.total}</span>
        </td>
        <td>
          <span className="text-dark fw-bolder text-hover-primary cursor-pointer d-block mb-1 fs-6">{item.creator ? item.creator.name : '-'}</span>
        </td>
        <td className="text-center pe-2">
          <span className="ms-2 badge badge-light-success fs-6 fw-bold">Paid</span>
        </td>
      </tr>
    )
  })
  
  return (
    <>
      <div className='toolbar' id='kt_toolbar'>
        <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
          <div data-kt-swapper='true' data-kt-swapper-mode='prepend' data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'>
            <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1 py-3'>Permintaan Barang</h1>
            <span className='h-20px border-gray-200 border-start ms-3 mx-2' />
            <small className='text-muted fs-7 fw-bold my-1 ms-1'>List Page</small>
          </div>
        </div>
      </div>
      <div className='post d-flex flex-column-fluid' id='kt_post'>
        <div id='kt_content_container' className='container-xxl'>
          <div className="row g-5 g-xl-8">
            <div className="col-xl-3">
              <a href="/" className="card bg-primary hoverable card-xl-stretch mb-xl-8">
                <div className="card-body">
                  <span className="svg-icon svg-icon-white svg-icon-3x ms-n1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M18 21.6C16.3 21.6 15 20.3 15 18.6V2.50001C15 2.20001 14.6 1.99996 14.3 2.19996L13 3.59999L11.7 2.3C11.3 1.9 10.7 1.9 10.3 2.3L9 3.59999L7.70001 2.3C7.30001 1.9 6.69999 1.9 6.29999 2.3L5 3.59999L3.70001 2.3C3.50001 2.1 3 2.20001 3 3.50001V18.6C3 20.3 4.3 21.6 6 21.6H18Z" fill="black"></path>
                      <path d="M12 12.6H11C10.4 12.6 10 12.2 10 11.6C10 11 10.4 10.6 11 10.6H12C12.6 10.6 13 11 13 11.6C13 12.2 12.6 12.6 12 12.6ZM9 11.6C9 11 8.6 10.6 8 10.6H6C5.4 10.6 5 11 5 11.6C5 12.2 5.4 12.6 6 12.6H8C8.6 12.6 9 12.2 9 11.6ZM9 7.59998C9 6.99998 8.6 6.59998 8 6.59998H6C5.4 6.59998 5 6.99998 5 7.59998C5 8.19998 5.4 8.59998 6 8.59998H8C8.6 8.59998 9 8.19998 9 7.59998ZM13 7.59998C13 6.99998 12.6 6.59998 12 6.59998H11C10.4 6.59998 10 6.99998 10 7.59998C10 8.19998 10.4 8.59998 11 8.59998H12C12.6 8.59998 13 8.19998 13 7.59998ZM13 15.6C13 15 12.6 14.6 12 14.6H10C9.4 14.6 9 15 9 15.6C9 16.2 9.4 16.6 10 16.6H12C12.6 16.6 13 16.2 13 15.6Z" fill="black"></path>
                      <path d="M15 18.6C15 20.3 16.3 21.6 18 21.6C19.7 21.6 21 20.3 21 18.6V12.5C21 12.2 20.6 12 20.3 12.2L19 13.6L17.7 12.3C17.3 11.9 16.7 11.9 16.3 12.3L15 13.6V18.6Z" fill="black"></path>
                    </svg>
                  </span>
                  <div className="text-white fw-bolder fs-1 mb-2 mt-5">100</div>
                  <div className="fw-bold fs-6 text-white">Total Invoices</div>
                </div>
              </a>
            </div>																	
            <div className="col-xl-3">
              <a href="/" className="card bg-success hoverable card-xl-stretch mb-5 mb-xl-8">
                <div className="card-body">
                  <span className="svg-icon svg-icon-white svg-icon-3x ms-n1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M14 12V21H10V12C10 11.4 10.4 11 11 11H13C13.6 11 14 11.4 14 12ZM7 2H5C4.4 2 4 2.4 4 3V21H8V3C8 2.4 7.6 2 7 2Z" fill="black"></path>
                      <path d="M21 20H20V16C20 15.4 19.6 15 19 15H17C16.4 15 16 15.4 16 16V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="black"></path>
                    </svg>
                  </span>
                  <div className="text-white fw-bolder fs-1 mb-2 mt-5">Rp. 100.000.000</div>
                  <div className="fw-bold fs-6 text-white">Total Invoices Amount</div>
                </div>
              </a>
            </div>
            <div className="col-xl-3">
              <a href="/" className="card bg-warning hoverable card-xl-stretch mb-5 mb-xl-8">
                <div className="card-body">
                  <span className="svg-icon svg-icon-white svg-icon-3x ms-n1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M14 12V21H10V12C10 11.4 10.4 11 11 11H13C13.6 11 14 11.4 14 12ZM7 2H5C4.4 2 4 2.4 4 3V21H8V3C8 2.4 7.6 2 7 2Z" fill="black"></path>
                      <path d="M21 20H20V16C20 15.4 19.6 15 19 15H17C16.4 15 16 15.4 16 16V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="black"></path>
                    </svg>
                  </span>
                  <div className="text-white fw-bolder fs-1 mb-2 mt-5">Rp. 76.000.000</div>
                  <div className="fw-bold fs-5 text-white">Total Paid Amount</div>
                </div>
              </a>
            </div>
            <div className="col-xl-3">
              <a href="/" className="card bg-danger hoverable card-xl-stretch mb-xl-8">
                <div className="card-body">
                  <span className="svg-icon svg-icon-white svg-icon-3x ms-n1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="black"></path>
                      <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="black"></path>
                      <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="black"></path>
                    </svg>
                  </span>
                  <div className="text-white fw-bolder fs-1 mb-2 mt-5">Rp. 12.000.000</div>
                  <div className="fw-bold fs-5 text-white">Total Due Amount</div>
                </div>
              </a>
            </div>
          </div>
          <div className="card mb-5 mb-xl-8">
            <div className="card-header border-0 pt-5">
              <div className="d-flex align-items-center">
                <div className="position-relative w-md-400px me-2">
                  <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                      <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"></path>
                    </svg>
                  </span>
                  <input type="text" className="form-control form-control-solid ps-10" name="search" id="search" placeholder="Purchase Code"/>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-light text-hover-primary me-5" onClick={searchHandler}>Cari</button>
                </div>
              </div>
              <div className="card-toolbar">
                <Link to="/supplier/permintaan-barang/create" replace={true} className="btn btn-primary">
                  Tambah Data
                </Link>
              </div>
            </div>
            <div className="card-body py-3">
              <div className="row">
                <div className="col-12 mt-4">
                  <div className="table-responsive">
                    <Table loadingState={loading} tableHeader={tableHeader} tableBody={content} />
                  </div>
                  <TablePagination
                    loadingState={loading}
                    paginationApi={items}
                    currentPage={currentPage}
                    loadingSetter={setLoading}
                    currentPageSetter={setCurrentPage}
                    pageLengthSetter={pageLength}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
