import { ToastContainer } from 'react-toastify';

import './toast.styles.scss';

export const ToastMolecule = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};
