import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { buttonStateComplete, buttonStateLoading } from '../../../Components/button.state';
import api from '../../../Util/api';

export const Edit = () => {
  const [formInput, setFormInput] = useState({name: '', email: '', role: '', password: ''});
  const [userData, setUserData] = useState({name: '', email: '', role: ''});
  const [loading, setloading] = useState(true);
  const [roles, setRoles] = useState([]);
  const urlParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setloading(true);

    const abortController = new AbortController();

    api().get(`api/roles`, {
      params: {
        length: 100,
        page: 1,
      },
      signal: abortController.signal,
    }).then(response => {
      setRoles(response.data.data.data);
    });

    api().get(`api/users/${urlParams.userId}?relations=roles`).then(response => {
      const userData = response.data;
      
      setUserData({
        name: userData.name,
        email: userData.email,
        role: userData.roles[0].id,
      })

      setFormInput({
        name: userData.name,
        email: userData.email,
        role: userData.roles[0].id,
        password: '',
      });

      setloading(false);
    });

    return () => {
      abortController.abort();
    }
  }, [urlParams]);

  const Toast = window['Swal'].mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', window['Swal'].stopTimer)
      toast.addEventListener('mouseleave', window['Swal'].resumeTimer)
    }
  })

  const handleFormSubmit = e => {
    const abortController = new AbortController();
    
    e.preventDefault();

    buttonStateLoading('#btn-submit');

    api().put(`/api/users/${urlParams.userId}`, formInput, {
      signal: abortController.signal,
    }).then(response => {
      buttonStateComplete('#btn-submit', 'Simpan');
      Toast.fire({
        icon: 'success',
        title: response.data.message,
      });

      navigate('/manajemen-akses/users', {replace: true});
    }).catch(err => {
      window['toastr'].clear();

      if (err.response.status === 422) {
        buttonStateComplete('#btn-submit', 'Simpan');
        let error = Object.keys(err.response.data.errors);

        error.map(key => {
          return window['toastr'].error(err.response.data.errors[key][0]);
        });
      } else {
        buttonStateComplete('#btn-submit', 'Simpan');
        window['toastr'].error(err.response.data.message);
      }
    })
  }

  const options = !loading && roles.map((role, index) => {
    return (
      <option value={role.id} key={index}>{role.name}</option>
    )
  })

  const handleFormUpdate = e => {
    e.persist();

    setFormInput(prevState => ({...prevState, [e.target.name]: e.target.value}));
  }

  return (
    <>
    <div className='toolbar' id='kt_toolbar'>
      <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
        <div data-kt-swapper='true' data-kt-swapper-mode='prepend' data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'>
          <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1 py-3'>Users</h1>
          <span className='h-20px border-gray-200 border-start ms-3 mx-2' />
          <small className='text-muted fs-7 fw-bold my-1 ms-1'>Edit</small>
        </div>
      </div>
    </div>
    <div className='post d-flex flex-column-fluid' id='kt_post'>
      <div id="kt_content_container" className="container-fluid">
        <div className="card shadow-sm">
          <div className="card-header">
            <h3 className="card-title">Edit User</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-6 mb-10">
                    <label className="required form-label">Full Name</label>
                    <input type="text" className="form-control" autoComplete="off" name="name" onChange={handleFormUpdate} defaultValue={userData.name} disabled={loading} />
                  </div>
                  <div className="col-md-6 mb-10">
                    <label className="required form-label">Email</label>
                    <input type="email" className="form-control" autoComplete="off" name="email" onChange={handleFormUpdate} defaultValue={userData.email} disabled={loading} />
                  </div>
                  <div className="col-md-6 mb-10">
                    <label className="required form-label">Role</label>
                    <select className="form-select" name="role" onChangeCapture={handleFormUpdate} disabled={loading} defaultValue={userData.role}>
                      {!loading && options}
                    </select>
                  </div>
                  <div className="col-md-6 mb-10">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" autoComplete="off" name="password" onChange={handleFormUpdate} disabled={loading} />
                    <div className="form-text">Biarkan kosong jika tidak ingin mengubah password.</div>
                  </div>
                </div>
                <button onClick={handleFormSubmit} className="btn btn-success" id="btn-submit">Simpan</button>{" "}
                <Link to="/manajemen-akses/users" className="btn btn-warning">Kembali</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
