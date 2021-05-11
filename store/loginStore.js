export const state= () => ({
    name: null,
    token: null,
    isLogin: false
})

//到处mutations方法
export const mutations = {
    setName (state,value) {
      state.name = value
    },
    setToken (state,value) {
      state.token = value
    },
    changeLoginState (state) {
      state.isLogin = !state.isLogin
    },
}
