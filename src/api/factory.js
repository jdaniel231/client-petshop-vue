import customers from './customers'

const repositories = {
  customers: customers
} 

export const Factory = {
  get: (name) => repositories[name],
};