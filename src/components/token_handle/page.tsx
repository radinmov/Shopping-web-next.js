import Swal from "sweetalert2";

export default function Token() {
    const handleProtectedNavigation = (href) => {
        const token = localStorage.getItem('Token');
    
        if (token) {
          window.location.href = href;
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Unauthorized',
            text: 'You must be logged in to access this page!',
          });
        }
      };
}