export const logoutConfirmation = signOut => {
  window['Swal'].fire({
    title: "Apakah anda yakin?",
    text: "Keluar dari aplikasi!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Logout",
    cancelButtonText: "Batal",
    customClass: {
      cancelButton: "btn btn-primary",
      confirmButton: "btn btn-danger"
  }
  }).then((result) => {
    if (result.isConfirmed) {
      signOut();
    }
  });
}