import React from "react"
import { Navigate } from "react-router"

export default function Auth({authHandler, isAuthenticated}) {
  const handleForm = () => {
    let button = document.querySelector('#kt_sign_in_submit');
    let spinner = document.createElement('span');
    spinner.classList.add("spinner-border");
    spinner.classList.add("spinner-border-sm");
    button.classList.add('disabled');
    button.removeChild(button.childNodes[0]);
    button.appendChild(spinner);
    
    setTimeout(() => {
      authHandler();
    }, 2000);
  }
  
  return isAuthenticated ? (
    <Navigate from="/login" to="/" />
  ) : (
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
                  autoComplete="off"
                  required={true}
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
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  id="kt_sign_in_submit"
                  className="btn btn-lg btn-primary w-100 mb-5"
                  onClick={handleForm}
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
