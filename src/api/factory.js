import customers from './customers'
import attendances from './attendances'
import animals from './animals'

const repositories = {
  customers: customers,
  attendances: attendances,
  animals: animals
} 

export const Factory = {
  get: (name) => repositories[name],
};