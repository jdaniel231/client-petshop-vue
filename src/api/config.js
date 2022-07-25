import axios from "axios"

const baseDomain = 'http://localhost:3000';
export const baseUrl = `${baseDomain}/api/v1`;

export default axios.create({
  baseURL: baseUrl,
})