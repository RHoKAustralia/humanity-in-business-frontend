import ApiService from '@/common/api.service'
import JwtService from '@/common/jwt.service'
import {
  LOGIN,
  REGISTER,
  LOGOUT,
  CHECK_AUTH,
} from '@/store/actions/auth'
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from '@/store/mutations/auth'

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
}

const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  }
}

const actions = {
  [LOGIN] (context, credentials) {
    return new Promise(resolve => {
      ApiService.post('login', { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [LOGOUT] (context) {
    context.commit(PURGE_AUTH)
  },
  [REGISTER] (context, registrationData) {
    return new Promise((resolve, reject) => {
      // @todo this call needs to be tested once we know that backend will
      // accept all the registration data being sent
      ApiService.post('register', { user: registrationData })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
          reject(response)
        })
    })
  },
  [CHECK_AUTH] (context) {
    if (JwtService.getToken()) {
      ApiService.setHeader()
      ApiService.get('user')
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    } else {
      context.commit(PURGE_AUTH)
    }
  },
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_AUTH] (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
    JwtService.saveToken(state.user.token)
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    JwtService.destroyToken()
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
