import axios from 'axios'
import { useState } from 'react'

import { APP_URL } from '../envConfig'

import Snackbar from 'awesome-snackbar'

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState()

  var newUrl = `${APP_URL}` + url

  const doRequest = async (props = {}) => {
    try {
      setErrors(null)

      //axios.defaults.withCredentials = true

      const response = await axios[method](newUrl, {
        ...removeEmpty(body),
        ...props,
      })

      if (onSuccess) {
        //console.log(response.data)

        onSuccess(response.data)
      }

      return response.data
    } catch (err) {
      setErrors(console.log(err))
      new Snackbar('خطا! لطفا مشکل پیش آمده را به به تیم فنی گزارش دهید', {
        position: 'bottom-right',
      })
      new Snackbar('Error! ' + err.message, {
        position: 'bottom-right',
      })
    }
  }

  return { doRequest, errors }
}

function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null))
}
