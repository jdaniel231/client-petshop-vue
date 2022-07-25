import config from './config'

const resource = '/customers'

export default {
  list:() => {
    return config.get(`${resource}`)
  }
}