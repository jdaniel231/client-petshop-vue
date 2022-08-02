import customers from './customers'
import attendances from './attendances'

const repositories = {
  customers: customers,
  attendances: attendances
} 

export const Factory = {
  get: (name) => repositories[name],
};