import React, { useEffect, useState } from 'react';
import api from '../../utilities/api';
import Navbar from '../Partials/Navbar';
import Sidebar from '../Partials/Sidebar';

export default function Admin({ component, ...rest }) {
  const [data, setData] = useState('');

  useEffect(() => {
    api().get('/api/user').then(response => setData(response.data.name));
  }, [data]);
    
  return (
    <div
      id='kt_body'
      className='header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed'
    >
      <div className='d-flex flex-column flex-root'>
        <div className='page d-flex flex-row flex-column-fluid'>
          <Sidebar />
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <Navbar />
            <div className='content mt-10 d-flex flex-column flex-column-fluid' id='kt_content'>
              {component}
            </div>
            <div className='footer py-4 d-flex flex-lg-column mt-auto' id='kt_footer'>
              <div className='container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between'>
                <p>Copyright © 2021 - PT Areta Amany Solusi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}