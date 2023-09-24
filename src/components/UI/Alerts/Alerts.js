import Swal from "sweetalert2";
import { deleteAllProductsFromCart, deleteProductFromCart } from "../../../redux/reducers/cartReducer/cartSlice";
import { logoutUser } from "../../../redux/reducers/userReducer/userSlice";
import { deleteMyProduct, getMyProducts } from "../../../axios/Products";

export const NotFoundAlert = (msg) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: msg,
    showConfirmButton: false,
    timer: 1500,
    background: 'var(--bg)',
    color: 'var(--text-white)'
  });
};

export const LoginRegisterAlert = (type, msg) => {
  if (type === "success") {
    Swal.fire({
      position: "center",
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
      background: 'var(--bg)',
      color: 'var(--text-white)'
    });
    return;
  }
  if (type === "fail") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
      background: 'var(--bg)',
      color: 'var(--text-white)'
    });
    return;
  }
};

export const AddToCartAlert = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    background: 'var(--bg)',
    color: 'var(--text-white)',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: 'Added to Cart'
  })
};

export const areYouSureAlert = (msg, msgSuccess, msgConfirm, msgAlert, dispatch) => {
  Swal.fire({
    title: 'Are you sure?',
    text: msg,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: msgConfirm,
    background: 'var(--bg)',
    color: 'var(--text-white)'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(deleteAllProductsFromCart())
      Swal.fire(
        msgAlert,
        msgSuccess,
        'success',
      )
    }
  })
}

export const logoutAlert = (msg, msgSuccess, msgConfirm, msgAlert, dispatch, navigate) => {
  Swal.fire({
    title: 'Are you sure?',
    text: msg,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: msgConfirm,
    background: 'var(--bg)',
    color: 'var(--text-white)'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(deleteAllProductsFromCart())
      dispatch(logoutUser())
      navigate("/")
      Swal.fire(
        msgAlert,
        msgSuccess,
        'success',
      )
    }
  })
}

export const deleteProductAlert = (msg, msgSuccess, msgConfirm, msgAlert, id, token) => {
  Swal.fire({
    title: 'Are you sure?',
    text: msg,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: msgConfirm,
    background: 'var(--bg)',
    color: 'var(--text-white)'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteMyProduct(token, id)
      Swal.fire(
        msgAlert,
        msgSuccess,
        'success',
      )
    }
  })
}