import axios from 'axios/index'

function register (user) {
  return axios({
    method: 'post',
    header: {
      'Access-Control-Max-Age': 100
    },
    url: `${process.env.VUE_APP_API_ENDPOINT}/register`,
    data: user
  })
}

function login (user) {
  return axios({
    method: 'post',
    header: {
      'Access-Control-Max-Age': 100
    },
    url: `${process.env.VUE_APP_API_ENDPOINT}/login`,
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
    url: `${process.env.VUE_APP_API_ENDPOINT}/addSDG`,
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
