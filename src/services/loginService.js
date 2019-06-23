import axios from 'axios/index'

const baseUrl = 'http://ec2-18-191-57-240.us-east-2.compute.amazonaws.com:8080'

function register (user) {
  return axios({
    method: 'post',
    header: {
      'Access-Control-Max-Age': 100
    },
    url: `${baseUrl}/register`,
    data: user
  })
}

export default {
  register
}
