import React from 'react'

export default function TablePagination({loadingState, paginationApi, currentPage, setIsLoading, setCurrentPage}) {
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

  let clonedPagination = !loadingState && paginationApi.links.slice();
  !loadingState && clonedPagination.shift();
  !loadingState && clonedPagination.pop();
  
  let pagination = !loadingState && clonedPagination.map((item, index) => {
    return (
      <div key={index}>
        <li className={`page-item ${item.active && 'active'} m-1 ${!item.url && 'disabled'}`}><span className="page-link cursor-pointer" onClick={(e) => goToHandler(e, parseInt(item.label))}>{item.label}</span></li>
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
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-outline justify-content-end">
        {firstPage}
        {pagination}
        {lastPage}
      </ul>
    </nav>
  )
}
