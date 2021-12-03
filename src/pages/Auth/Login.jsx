import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSanctum } from "react-sanctum";
import { buttonStateComplete, buttonStateLoading } from "../../Components/button.state";

const Login = () => {
  const { signIn } = useSanctum();
  const [ formInput, setFormInput ] = useState({email: '', password: ''})
  const redirect = useNavigate();

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

  const updateFormInput = e => {
    e.persist();

    setFormInput(prevState => ({...prevState, [e.target.name]: e.target.value}));
  }

  const handleSignIn = e => {
    e.preventDefault();

    buttonStateLoading('#kt_sign_in_submit');

    signIn(formInput.email, formInput.password).then(() => {
      buttonStateComplete('#kt_sign_in_submit', 'Login');
      redirect('/', { replace: true });
    }).catch(err => {
      if (err.response.status === 422) {          
        buttonStateComplete('#kt_sign_in_submit', 'Login');
        Toast.fire({
          icon: 'error',
          title: err.response.data.errors[Object.keys(err.response.data.errors)[0]],
        });
      } else {
        buttonStateComplete('#kt_sign_in_submit', 'Login');
        Toast.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    })
  }
  
  return (
    <div className="d-flex flex-column flex-root align-items-center min-vh-100">
      <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          <a href="/" className="mb-12">
            <img alt="Logo" src="/assets/media/logos/logo-1.svg" className="h-40px" />
          </a>
          <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
            <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" action="#">
              <div className="text-center mb-10">
                <h1 className="text-dark mb-3">Sign In to Metronic</h1>
              </div>
              <div className="fv-row mb-10">
                <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                <input
                  className="form-control form-control-lg form-control-solid"
                  type="text"
                  name="email"
                  onChange={updateFormInput}
                  autoFocus={true}
                />
              </div>
              <div className="fv-row mb-10">
                <div className="d-flex flex-stack mb-2">
                  <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                </div>
                <input
                  className="form-control form-control-lg form-control-solid"
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={updateFormInput}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  id="kt_sign_in_submit"
                  className="btn btn-lg btn-primary w-100 mb-5"
                  onClick={handleSignIn}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login