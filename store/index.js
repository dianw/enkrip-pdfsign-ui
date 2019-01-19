import createPersistedState from 'vuex-persistedstate'

export const plugins = [
  createPersistedState({
    key: 'pdfsign',
    storage: window.localStorage,
    filter: mutation => mutation.type.startsWith('file/')
  })
]
