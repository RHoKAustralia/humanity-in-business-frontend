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

function login (user) {
  return axios({
    method: 'post',
    header: {
      'Access-Control-Max-Age': 100
    },
    url: `${baseUrl}/login`,
    data: user
  })
    .then(loginResult => {
      return loginResult.data.success
    })
}

function addSdgToUser (userId, sdgs) {
  return axios({
    method: 'post',
    header: {
      'Access-Control-Max-Age': 100
    },
    url: `${baseUrl}/addSDG`,
    data: {
      user_id: userId,
      sdg_ids: sdgs
    }
  })
    .then(loginResult => {
      return loginResult.data.success
    })
}

export default {
  register, login, addSdgToUser
}
