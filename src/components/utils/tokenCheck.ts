import Swal from "sweetalert2";

export const handleProtectedNavigation = (href: string) => {
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
  
  export const checkTokenForComment = () => {
    const token = localStorage.getItem('Token');
    
    if (!token) {
      Swal.fire({
        icon: 'warning',
        title: 'Unauthorized',
        text: 'You must be logged in to post a comment!',
      });
      return false;
    }
    return true;
  };
  