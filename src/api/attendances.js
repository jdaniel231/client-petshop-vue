import config from './config'

const resource = '/attendances'

export default {
  list:() => {
    return config.get(`${resource}`)
  },
  // get(id){
  //   return config.get(`${resource}/${id}`)
  // },
  // save:(data) => {
  //   return config.post(`${resource}`, data)
  // },
  // update(id, data){
  //   return config.put(`${resource}/${id}`, data)
  // },
  // delete(id){
  //   return config.delete(`${resource}/${id}`)
  // },
  
}