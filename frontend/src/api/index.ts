import { ApiClientConfig } from './types'

const apiConfig: ApiClientConfig = {
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL ?? '',
  debug: import.meta.env.VITE_REACT_APP_API_DEBUG === 'true',
}

class API {
  config: ApiClientConfig

  constructor(config: ApiClientConfig) {
    this.config = config
  }

  getBaseUrl() {
    return this.config.baseURL
  }
}

const apiInstance = new API(apiConfig)

export default apiInstance
