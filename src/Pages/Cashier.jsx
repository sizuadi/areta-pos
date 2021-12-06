import React, { useEffect, useState } from 'react'
import { useSanctum } from 'react-sanctum';

import '../Assets/custom.css';
import { defaultBlueprint } from '../Components/pagination.blueprint';
import api from '../Util/api';
import { asset, rupiah } from '../Util/commonHelpers';

export default function Cashier() {
  const { signOut } = useSanctum();
  const [paginated, setPaginated] = useState(defaultBlueprint);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({search: '', length: 12, page: 1});
  
  useEffect(() => {
    setLoading(true);

    const abortController = new AbortController();

    api().get(`/api/products`, {
      signal: abortController.signal,
      params: params,
    }).then(response => {
      setPaginated(prev => ({...prev, data: prev.data.concat(response.data.data)}));

      setLoading(false);
    }).catch(err => {
      if (err.response?.status === 401) {
        signOut();
      }
    })
    
    if (window.document.body.classList.contains("toolbar-enabled")) {
      window.document.body.classList.remove("toolbar-enabled");
      window.document.body.classList.remove("toolbar-fixed");
    }
    
    return () => {
      abortController.abort();
      window.document.body.classList.add("toolbar-enabled");
      window.document.body.classList.add("toolbar-fixed");
    }
  }, [params, signOut]);

  const loadMoreHandler = e => {
    e.persist();

    setParams(prev => ({...prev, page: prev.page + 1}));
  }

  let content = paginated.data.map((item, index) => {
    return (
      <div className="col-md-2 mt-5" key={index}>
        <div className="card cursor-pointer shadow-sm">
          <div className="card-body p-0">
            <div className="overlay">
              <div className="overlay-wrapper rounded text-center">
                <img src={asset("assets/media/products/box.png")} alt="product" className="mw-100 w-200px" />
              </div>
              <div className="overlay-layer">                                                               
              </div>
            </div>
            <div className="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
              <div className="fs-5 fw-bolder mb-2">{item.name}</div>
              <div className="fs-5 fw-bold">{rupiah(item.price)}</div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  
  return (
    <div className='post d-flex flex-column-fluid' id='kt_post'>
      <div id="kt_content_container" className="container-fluid">
        <div className="row g-md-12">
          <div className="col-md-8">
            <div className="d-flex flex-column">
              <div className="d-lg-flex align-lg-items-center">
                <div className="rounded d-flex flex-row align-items-md-center bg-white p-5 w-100 h-lg-60px">
                  <div className="row flex-grow-1 mb-lg-0">
                    <div className="col-md-12 d-flex align-items-center mb-3 mb-lg-0">
                      <span className="svg-icon svg-icon-1 svg-icon-gray-400 me-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="black" />
                          <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                        </svg>
                      </span>
                      <input type="text" className="form-control form-control-flush" name="search" placeholder="Your Search" />
                    </div>
                  </div>
                  <div className="min-w-150px text-end">
                    <button type="submit" className="btn btn-dark" id="kt_advanced_search_button_1">Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body card-scroll card-body-product pt-0">
                <div className="row">
                  {!loading && content}
                </div>
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-light text-hover-primary" onClick={loadMoreHandler}>Load more</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-xl-stretch shadow-sm">
              <div className="card-header">
                <h3 className="card-title">Order List</h3>
              </div>
              <div className="card-body py-0 card-scroll card-body-order-list">
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Watch
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex mt-5 align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-2 me-2">
                    <a href="/" className="text-gray-800 fs-7 fw-bolder">
                      Smart Drones
                    </a>								
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <button className="btn-xs btn-success">
                      <i className="fas fa-plus text-white" />
                    </button>
                    <input type="text" className="form-count" />
                    <button className="btn-xs btn-success">
                      <i className="fas fa-minus text-white" />
                    </button>
                    <button className="badge badge-danger border-0 ms-3">
                      <i className="fas fa-trash text-white" />
                    </button>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.000.000</span>
                </div>
                <div className="separator separator-dashed border-dark my-5" />
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <span className="text-gray-800 fs-7 fw-bolder">
                      Tax
                    </span>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <span className="text-gray-800 fs-7 fw-bolder">
                      Discount
                    </span>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 400.000</span>
                </div>
                <div className="separator separator-dashed border-dark my-5" />
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-2">
                    <span className="text-gray-800 fs-7 fw-bolder">
                      Total
                    </span>
                  </div>
                  <span className="fs-7 fw-bolder my-2">Rp. 24.400.000</span>
                </div>
              </div>
              <div className="card-footer row">
                <a href="../../dist/checkout.html" className="btn btn-success col-12">BAYAR</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
