import { toast } from 'react-toastify';

export const toastConfig = {
  position: 'top-right',
  autoClose: 5000, 
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};


export const showSuccess = (message, duration = 5000) => {
  toast.success(message, {
    ...toastConfig,
    autoClose: duration,
  });
};


export const showError = (message, duration = 5000) => {
  toast.error(message, {
    ...toastConfig,
    autoClose: duration,
  });
};


export const showInfo = (message, duration = 5000) => {
  toast.info(message, {
    ...toastConfig,
    autoClose: duration,
  });
};
