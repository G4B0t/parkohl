import { toast, ToastContentProps } from 'react-toastify'

import Body from './components/Body'
import { ToastMessageApi, ToastProps } from './types'

const getData = (props: ToastProps | string): ToastProps => {
  if (typeof props === 'string') {
    return {
      body: props,
    }
  }

  return props
}

const renderToastBody = (props: ToastContentProps<ToastProps>) => (
  <Body {...props} />
)

const toastMessage: ToastMessageApi = {
  error: (props: ToastProps | string) => {
    toast.error(renderToastBody, {
      data: getData(props),
    })
  },
  info: (props: ToastProps | string) => {
    toast.info(renderToastBody, {
      data: getData(props),
    })
  },
  success: (props: ToastProps | string) => {
    toast.success(renderToastBody, {
      data: getData(props),
    })
  },
  warning: (props: ToastProps | string) => {
    toast.warning(renderToastBody, {
      data: getData(props),
    })
  },
}

export default toastMessage
