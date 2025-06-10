import swal from 'sweetalert'
export function useFlash() {
  function successFlash(msg) {
    return swal('Good job!', msg, 'success')
  }
  function errorFlash(msg) {
    return swal('Oops!', msg, 'error')
  }

  return {
    successFlash,
    errorFlash
  }
}
