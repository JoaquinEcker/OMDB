import Swal from "sweetalert2";

export const successAlert = (title, text) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `${title}`,
    text: `${text}`,
    showConfirmButton: false,
    timer: 2500,
  });
};

export const errorAlert = (title, text) => {
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: "error",
    timer: "5000",
  });
};
