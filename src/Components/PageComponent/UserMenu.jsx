import React from "react";
import { useSanctum } from "react-sanctum";
import UserDetail from "./UserDetail";

export default function UserMenu() {
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
      className="d-flex align-items-center ms-1 ms-lg-3"
      id="kt_header_user_menu_toggle"
    >
      <div
        className="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <img src="assets/media/avatars/blank.png" alt="user" />
      </div>
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
        data-kt-menu="true"
      >
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-3">
            <div className="symbol symbol-50px me-5">
              <img alt="Logo" src="assets/media/avatars/blank.png" />
            </div>
            <div className="d-flex flex-column">
              <UserDetail />
            </div>
          </div>
        </div>
        <div className="separator my-2" />
        <div className="menu-item px-5">
          <a
            href="../../demo1/dist/account/overview.html"
            className="menu-link px-5"
          >
            My Profile
          </a>
        </div>
        
        <div className="menu-item px-5 my-1">
          <a
            href="../../demo1/dist/account/settings.html"
            className="menu-link px-5"
          >
            Account Settings
          </a>
        </div>
        
        <div className="separator my-2" />
        <div className="menu-item px-5">
          <a
            href="/logout"
            className="menu-link px-5"
            onClick={(e) => {
              e.preventDefault();
              logoutConfirmation();
            }}
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
