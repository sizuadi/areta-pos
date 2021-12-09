import React from 'react'

export default function TablePagination({loadingState, paginationApi, currentPage, loadingSetter, currentPageSetter, pageLengthSetter}) {
  const nextHandler = e => {
    e.preventDefault();
    loadingSetter(true);
    currentPageSetter(currentPage + 1);
  }

  const prevHandler = e => {
    e.preventDefault();
    loadingSetter(true);
    currentPageSetter(currentPage - 1);
  }

  const goToHandler = (e, page) => {
    e.preventDefault();
    loadingSetter(true);
    currentPageSetter(page);
  }

  let clonedPagination = !loadingState && paginationApi.links.slice();
  !loadingState && clonedPagination.shift();
  !loadingState && clonedPagination.pop();
  
  let pagination = !loadingState && clonedPagination.map((item, index) => {
    return (
      <div key={index}>
        <li className={`page-item ${item.active && 'active'} m-1 ${!item.url && 'disabled'}`}><span className="page-link cursor-pointer" onClick={(e) => !item.active && goToHandler(e, parseInt(item.label))}>{item.label}</span></li>
      </div>
    )
  })

  let firstPage = !loadingState && (
    <div>
      <li className={`page-item previous m-1 ${!paginationApi.prev_page_url ? 'disabled' : null}`}><span className="page-link cursor-pointer" onClick={(e) => prevHandler(e)}><i className="previous"></i></span></li>
    </div>
  );

  let lastPage = !loadingState && (
    <div>
      <li className={`page-item previous m-1 ${!paginationApi.next_page_url ? 'disabled' : null}`}><span className="page-link cursor-pointer" onClick={(e) => nextHandler(e)}><i className="next"></i></span></li>
    </div>
  );
  
  return (
    <div className="row">
      <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
        <div className="dataTables_length" id="kt_datatable_example_1_length">
          <label>
            <select name="kt_datatable_example_1_length" aria-controls="kt_datatable_example_1" className="form-select form-select-sm form-select-solid" onChange={pageLengthSetter}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
        <div className="dataTables_info" id="kt_datatable_example_1_info" role="status" aria-live="polite">Menampilkan {!paginationApi.total ? 0 : `${paginationApi.from} sampai ${paginationApi.to}`} dari {paginationApi.total} data</div>
      </div>
      <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-outline justify-content-end">
          {firstPage}
          {pagination}
          {lastPage}
        </ul>
      </nav>
      </div>
    </div>
  )
}
