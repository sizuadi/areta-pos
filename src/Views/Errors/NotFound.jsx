import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <div className="d-flex flex-column flex-center flex-column-fluid p-10">
        <img src="assets/media/illustrations/sketchy-1/18.png" alt="Not Found" className="mw-100 mb-10 h-lg-450px" />
        <h1 className="fw-bold mb-10" style={{color: '#A3A3C7'}}>Halaman tidak ditemukan</h1>
        <Link to="/" className="btn btn-primary">Kembali ke halaman utama</Link>
      </div>
    </div>
  )
}
