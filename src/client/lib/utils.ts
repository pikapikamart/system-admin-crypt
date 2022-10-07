import { FormFields } from "./hooks";


export const addErrors = ( element: FormFields ) => {
  element.setAttribute("aria-invalid", "true")
  element.setAttribute("aria-describedby", `error-${ element.name }`)
}

export const removeErrors = ( element: FormFields ) => {
  element.removeAttribute("aria-invalid")
  element.removeAttribute("aria-describedby")
}

export const inputHasError = ( element: FormFields ) => {
  if ( !element.getAttribute("aria-required") ) {
    return false
  }

  let re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  if ( element.name==="email" && !re.test(element.value) ) {
    return true
  }

  if ( element.value ) {
    return false
  }

  return true
}