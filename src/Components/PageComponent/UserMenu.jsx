import React from "react";
import { useSanctum } from "react-sanctum";
import { asset } from "../../Util/commonHelpers";
import { logoutConfirmation } from "../../Util/sweetalert.helper";

import UserDetail from "./UserDetail";

export default function UserMenu() {
  const { signOut } = useSanctum();
  
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
        <img src={asset("assets/media/avatars/blank.png")} alt="user-profile" />
      </div>
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
        data-kt-menu="true"
      >
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-3">
            <div className="symbol symbol-50px me-5">
              <img
                src={asset("assets/media/avatars/blank.png")}
                alt="user-logo"
              />
            </div>
            <div className="d-flex flex-column">
              <UserDetail />
            </div>
          </div>
        </div>
        <div className="separator my-2" />
        <div className="menu-item px-5">
          <a href="/me" className="menu-link px-5">
            Profile Saya
          </a>
        </div>
        <div className="menu-item px-5 my-1">
          <a href="/me/setting" className="menu-link px-5">
            Pengaturan Akun
          </a>
        </div>
        <div className="separator my-2" />
        <div className="menu-item px-5">
          <a href="/logout" className="menu-link px-5" onClick={(e) => {
              e.preventDefault();
              logoutConfirmation(signOut);
            }}
          >
            Keluar
          </a>
        </div>
      </div>
    </div>
  );
}
