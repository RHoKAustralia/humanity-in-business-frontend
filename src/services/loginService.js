import axios from 'axios/index'

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
  addSdgToUser
}
