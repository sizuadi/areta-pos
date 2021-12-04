import React from 'react';
import {Link} from 'react-router-dom'
import { useSanctum } from 'react-sanctum';
import CustomLink from '../../Components/PageComponent/CustomLink';

import { menuData } from '../../Routes/menuData'
import { asset } from '../../Util/commonHelpers';

export default function Sidebar() {
  const { signOut } = useSanctum();

  const logoutConfirmation = () => window['Swal'].fire({
    title: "Apakah anda yakin?",
    text: "Keluar dari aplikasi!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Logout",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      signOut();
    }
  });
    
  return (
    <div
      id='kt_aside'
      className='aside aside-dark aside-hoverable'
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_mobile_toggle'
    >
      <div className='aside-logo flex-column-auto' id='kt_aside_logo'>
        <Link to='/'>
          <img alt='Logo' src={asset('assets/media/logos/logo-1-dark.svg')} className='h-25px logo' />
        </Link>
        <div
          id='kt_aside_toggle'
          className='btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle'
          data-kt-toggle='true'
          data-kt-toggle-state='active'
          data-kt-toggle-target='body'
          data-kt-toggle-name='aside-minimize'
        >
          <span className='svg-icon svg-icon-1 rotate-180'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                opacity='0.5'
                d='M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z'
                fill='black'
              />
              <path
                d='M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z'
                fill='black'
              />
            </svg>
          </span>
        </div>
      </div>
      <div className='aside-menu flex-column-fluid'>
        <div
          className='hover-scroll-overlay-y my-5 my-lg-5'
          id='kt_aside_menu_wrapper'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-height='auto'
          data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
          data-kt-scroll-wrappers='#kt_aside_menu'
          data-kt-scroll-offset={0}
        >
          <div
            className='menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500'
            id='#kt_aside_menu'
            data-kt-menu='true'
          >
            <div className='menu-item pb-8'>
              <CustomLink className={`menu-link`} to='/'>
                <span className='menu-icon'>
                  <span className='svg-icon svg-icon-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='none' >
                      <rect x={2} y={2} width={9} height={9} rx={2} fill='black' />
                      <rect opacity='0.3' x={13} y={2} width={9} height={9} rx={2} fill='black' />
                      <rect opacity='0.3' x={13} y={13} width={9} height={9} rx={2} fill='black' />
                      <rect opacity='0.3' x={2} y={13} width={9} height={9} rx={2} fill='black' />
                    </svg>
                  </span>
                </span>
                <span className='menu-title'>Dashboard</span>
              </CustomLink>
            </div>
            {menuData.map((menu, index) => {
              return (
                <div data-kt-menu-trigger='click' className='menu-item menu-accordion' key={index}>
                  <span className='menu-link'>
                    {menu.icon}
                    <span className='menu-title'>{menu.title}</span>
                    <span className='menu-arrow' />
                  </span>
                  <div className='menu-sub menu-sub-accordion menu-active-bg'>
                    {menu.subMenu.map((subMenu, subIndex) => {
                      return (
                        <div className='menu-item' key={subIndex}>
                          <CustomLink to={subMenu.url} className={`menu-link ${subMenu.sideBarLinkClass}`} >
                            <span className='menu-bullet'>
                              <span className='bullet bullet-dot' />
                            </span>
                            <span className={`menu-title ${subMenu.sideBarTitleClass}`}>
                              {subMenu.title}
                            </span>
                          </CustomLink>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
        <a href="/" className="btn btn-custom btn-primary w-100" onClick={(e) => {
            e.preventDefault();
            logoutConfirmation();
        }}>
            <span className="btn-label">Logout</span>
            <span className="svg-icon btn-icon svg-icon-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z" fill="black"></path>
                    <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black"></path>
                </svg>
            </span>
        </a>
    </div>
    </div>
  )
}
