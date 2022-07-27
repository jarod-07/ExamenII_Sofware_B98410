import Swal from 'sweetalert2';

export const sodaErrorAlert = (soda) => {
  return(
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: `¡No hay sucicientes bebidas de ${soda} para completar su pedido!`
    })
  )
}

export const changeErrorAlert = () => {
  return(
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: `¡No hay sufucientes monedas para darte el cambio!`
    })
  )
}

export const outOfService = () => {
  return(
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: `¡Maquina expendedora fuera de servicio!`
    })
  )
}