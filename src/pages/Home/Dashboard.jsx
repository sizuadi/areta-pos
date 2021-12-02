import React from 'react'

export default function Dashboard() {
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
            <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1 py-3'>Dashboard</h1>
            <span className='h-20px border-gray-200 border-start ms-3 mx-2' />
            <small className='text-muted fs-7 fw-bold my-1 ms-1'>#XRS-45670</small>
          </div>
        </div>
      </div>
      <div className='post d-flex flex-column-fluid mt-20 min-vh-100' id='kt_post'>
        <div id='kt_content_container' className='container-xxl'>
          <div className='row gy-5 g-xl-8'>
            <div className='col-xl-4'>
              <div className='card card-xl-stretch'>
                <div className='card-header border-0 bg-danger py-5'>
                  <h3 className='card-title fw-bolder text-white'>Sales Statistics</h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-end'
                    >
                      <span className='svg-icon svg-icon-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                            <rect x={5} y={5} width={5} height={5} rx={1} fill='#000000' />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill='#000000'
                              opacity='0.3'
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill='#000000'
                              opacity='0.3'
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill='#000000'
                              opacity='0.3'
                            />
                          </g>
                        </svg>
                      </span>
                    </button>
                    <div
                      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3'
                      data-kt-menu='true'
                    >
                      <div className='menu-item px-3'>
                        <div className='menu-content text-muted pb-2 px-3 fs-7 text-uppercase'>
                          Payments
                        </div>
                      </div>
                      <div className='menu-item px-3'>
                        <a href='/' className='menu-link px-3'>
                          Create Invoice
                        </a>
                      </div>
                      <div className='menu-item px-3'>
                        <a href='/' className='menu-link flex-stack px-3'>
                          Create Payment
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Specify a target name for future usage and reference'
                          />
                        </a>
                      </div>
                      <div className='menu-item px-3'>
                        <a href='/' className='menu-link px-3'>
                          Generate Bill
                        </a>
                      </div>
                      <div
                        className='menu-item px-3'
                        data-kt-menu-trigger='hover'
                        data-kt-menu-placement='right-end'
                      >
                        <a href='/' className='menu-link px-3'>
                          <span className='menu-title'>Subscription</span>
                          <span className='menu-arrow' />
                        </a>
                        <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                          <div className='menu-item px-3'>
                            <a href='/' className='menu-link px-3'>
                              Plans
                            </a>
                          </div>
                          <div className='menu-item px-3'>
                            <a href='/' className='menu-link px-3'>
                              Billing
                            </a>
                          </div>
                          <div className='menu-item px-3'>
                            <a href='/' className='menu-link px-3'>
                              Statements
                            </a>
                          </div>
                          <div className='separator my-2' />
                          <div className='menu-item px-3'>
                            <div className='menu-content px-3'>
                              <label className='form-check form-switch form-check-custom form-check-solid'>
                                <input
                                  className='form-check-input w-30px h-20px'
                                  type='checkbox'
                                  defaultValue={1}
                                  defaultChecked='checked'
                                  name='notifications'
                                />
                                <span className='form-check-label text-muted fs-6'>Recuring</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='menu-item px-3 my-1'>
                        <a href='/' className='menu-link px-3'>
                          Settings
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-body p-0'>
                  <div
                    className='mixed-widget-2-chart card-rounded-bottom bg-danger'
                    data-kt-color='danger'
                    style={{height: 200}}
                  />
                  <div className='card-p mt-n20 position-relative'>
                    <div className='row g-0'>
                      <div className='col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7'>
                        <span className='svg-icon svg-icon-3x svg-icon-warning d-block my-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                          >
                            <rect x={8} y={9} width={3} height={10} rx='1.5' fill='black' />
                            <rect
                              opacity='0.5'
                              x={13}
                              y={5}
                              width={3}
                              height={14}
                              rx='1.5'
                              fill='black'
                            />
                            <rect x={18} y={11} width={3} height={8} rx='1.5' fill='black' />
                            <rect x={3} y={13} width={3} height={6} rx='1.5' fill='black' />
                          </svg>
                        </span>
                        <a href='/' className='text-warning fw-bold fs-6'>
                          Weekly Sales
                        </a>
                      </div>
                      <div className='col bg-light-primary px-6 py-8 rounded-2 mb-7'>
                        <span className='svg-icon svg-icon-3x svg-icon-primary d-block my-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                          >
                            <path
                              opacity='0.3'
                              d='M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z'
                              fill='black'
                            />
                            <path
                              d='M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z'
                              fill='black'
                            />
                          </svg>
                        </span>
                        <a href='/' className='text-primary fw-bold fs-6'>
                          New Projects
                        </a>
                      </div>
                    </div>
                    <div className='row g-0'>
                      <div className='col bg-light-danger px-6 py-8 rounded-2 me-7'>
                        <span className='svg-icon svg-icon-3x svg-icon-danger d-block my-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                          >
                            <path
                              opacity='0.3'
                              d='M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z'
                              fill='black'
                            />
                            <path
                              d='M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z'
                              fill='black'
                            />
                          </svg>
                        </span>
                        <a href='/' className='text-danger fw-bold fs-6 mt-2'>
                          Item Orders
                        </a>
                      </div>
                      <div className='col bg-light-success px-6 py-8 rounded-2'>
                        <span className='svg-icon svg-icon-3x svg-icon-success d-block my-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                          >
                            <path
                              d='M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z'
                              fill='black'
                            />
                            <path
                              opacity='0.3'
                              d='M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z'
                              fill='black'
                            />
                          </svg>
                        </span>
                        <a href='/' className='text-success fw-bold fs-6 mt-2'>
                          Bug Reports
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='card card-xl-stretch'>
                <div className='card-header align-items-center border-0 mt-4'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='fw-bolder mb-2 text-dark'>Activities</span>
                    <span className='text-muted fw-bold fs-7'>890,344 Sales</span>
                  </h3>
                  <div className='card-toolbar'>
                    <button
                      type='button'
                      className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-end'
                    >
                      <span className='svg-icon svg-icon-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                            <rect x={5} y={5} width={5} height={5} rx={1} fill='#000000' />
                            <rect
                              x={14}
                              y={5}
                              width={5}
                              height={5}
                              rx={1}
                              fill='#000000'
                              opacity='0.3'
                            />
                            <rect
                              x={5}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill='#000000'
                              opacity='0.3'
                            />
                            <rect
                              x={14}
                              y={14}
                              width={5}
                              height={5}
                              rx={1}
                              fill='#000000'
                              opacity='0.3'
                            />
                          </g>
                        </svg>
                      </span>
                    </button>
                    <div
                      className='menu menu-sub menu-sub-dropdown w-250px w-md-300px'
                      data-kt-menu='true'
                      id='kt_menu_61a084bea7d06'
                    >
                      <div className='px-7 py-5'>
                        <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                      </div>
                      <div className='separator border-gray-200' />
                      <div className='px-7 py-5'>
                        <div className='mb-10'>
                          <label className='form-label fw-bold'>Status:</label>
                          <div>
                            <select
                              className='form-select form-select-solid'
                              data-kt-select2='true'
                              data-placeholder='Select option'
                              data-dropdown-parent='#kt_menu_61a084bea7d06'
                              data-allow-clear='true'
                            >
                              <option />
                              <option value={1}>Approved</option>
                              <option value={2}>Pending</option>
                              <option value={2}>In Process</option>
                              <option value={2}>Rejected</option>
                            </select>
                          </div>
                        </div>
                        <div className='mb-10'>
                          <label className='form-label fw-bold'>Member Type:</label>
                          <div className='d-flex'>
                            <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue={1}
                              />
                              <span className='form-check-label'>Author</span>
                            </label>
                            <label className='form-check form-check-sm form-check-custom form-check-solid'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue={2}
                                defaultChecked='checked'
                              />
                              <span className='form-check-label'>Customer</span>
                            </label>
                          </div>
                        </div>
                        <div className='mb-10'>
                          <label className='form-label fw-bold'>Notifications:</label>
                          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              defaultValue
                              name='notifications'
                              defaultChecked='checked'
                            />
                            <label className='form-check-label'>Enabled</label>
                          </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                          <button
                            type='reset'
                            className='btn btn-sm btn-light btn-active-light-primary me-2'
                            data-kt-menu-dismiss='true'
                          >
                            Reset
                          </button>
                          <button
                            type='submit'
                            className='btn btn-sm btn-primary'
                            data-kt-menu-dismiss='true'
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-body pt-5'>
                  <div className='timeline-label'>
                    <div className='timeline-item'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>08:42</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-warning fs-1' />
                      </div>
                      <div className='fw-mormal timeline-content text-muted ps-3'>
                        Outlines keep you honest. And keep structure
                      </div>
                    </div>
                    <div className='timeline-item'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>10:00</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-success fs-1' />
                      </div>
                      <div className='timeline-content d-flex'>
                        <span className='fw-bolder text-gray-800 ps-3'>AEOL meeting</span>
                      </div>
                    </div>
                    <div className='timeline-item'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>14:37</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-danger fs-1' />
                      </div>
                      <div className='timeline-content fw-bolder text-gray-800 ps-3'>
                        Make deposit
                        <a href='/' className='text-primary'>
                          USD 700
                        </a>
                        . to ESL
                      </div>
                    </div>
                    <div className='timeline-item'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>16:50</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-primary fs-1' />
                      </div>
                      <div className='timeline-content fw-mormal text-muted ps-3'>
                        Indulging in poorly driving and keep structure keep great
                      </div>
                    </div>
                    <div className='timeline-item'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>21:03</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-danger fs-1' />
                      </div>
                      <div className='timeline-content fw-bold text-gray-800 ps-3'>
                        New order placed
                        <a href='/' className='text-primary'>
                          #XF-2356
                        </a>
                        .
                      </div>
                    </div>
                    <div className='timeline-item'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>16:50</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-primary fs-1' />
                      </div>
                      <div className='timeline-content fw-mormal text-muted ps-3'>
                        Indulging in poorly driving and keep structure keep great
                      </div>
                    </div>
                    <div className='timeline-item'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>21:03</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-danger fs-1' />
                      </div>
                      <div className='timeline-content fw-bold text-gray-800 ps-3'>
                        New order placed
                        <a href='/' className='text-primary'>
                          #XF-2356
                        </a>
                        .
                      </div>
                    </div>
                    <div className='timeline-item'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>10:30</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-success fs-1' />
                      </div>
                      <div className='timeline-content fw-mormal text-muted ps-3'>
                        Finance KPI Mobile app launch preparion meeting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='card card-xl-stretch-50 mb-5 mb-xl-8'>
                <div className='card-body d-flex flex-column p-0'>
                  <div className='flex-grow-1 card-p pb-0'>
                    <div className='d-flex flex-stack flex-wrap'>
                      <div className='me-2'>
                        <a href='/' className='text-dark text-hover-primary fw-bolder fs-3'>
                          Generate Reports
                        </a>
                        <div className='text-muted fs-7 fw-bold'>
                          Finance and accounting reports
                        </div>
                      </div>
                      <div className='fw-bolder fs-3 text-primary'>$24,500</div>
                    </div>
                  </div>
                  <div
                    className='mixed-widget-7-chart card-rounded-bottom'
                    data-kt-chart-color='primary'
                    style={{height: 150}}
                  />
                </div>
              </div>
              <div className='card card-xl-stretch-50 mb-5 mb-xl-8'>
                <div className='card-body p-0 d-flex justify-content-between flex-column overflow-hidden'>
                  <div className='d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3'>
                    <div className='me-2'>
                      <span className='fw-bolder text-gray-800 d-block fs-3'>Sales</span>
                      <span className='text-gray-400 fw-bold'>Oct 8 - Oct 26 21</span>
                    </div>
                    <div className='fw-bolder fs-3 text-primary'>$15,300</div>
                  </div>
                  <div
                    className='mixed-widget-10-chart'
                    data-kt-color='primary'
                    style={{height: 175}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
