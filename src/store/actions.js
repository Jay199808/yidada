import { login } from '../utils/request'
let actions = {
  getToken ({commit}, {data, notify, router}) {
    login(data).then((res) => {
      if (res.success === 0) {
        commit('saveToken', res.token)
        commit('saveUser', res.user.name)
        console.log(res.token)
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', res.user.name)
        notify({
          title: '登录成功',
          type: 'success',
          message: '登录成功'
        })
        setTimeout(() => {
          router.push({
            path: '/indexbro'
          })
        })
      } else {
        notify({
          title: '登录出错',
          type: 'error',
          message: '邮箱与密码错误'
        })
      }
    })
    // async function (params) {

    // }
  }
}
export default actions
