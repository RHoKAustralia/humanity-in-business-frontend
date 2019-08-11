import axios from 'axios/index'

function getUpcomingChallenges () {
  return axios({
    method: 'get',
    header: {
      'Access-Control-Max-Age': 100
    },
    url: `${process.env.VUE_APP_API_ENDPOINT}/challenges/upcoming/1`,
  })
};

export default {
  getUpcomingChallenges
}
