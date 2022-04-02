import { TOKEN_TIME, TOKEN_TIEM_VALUE } from './constant'

// 登录时设置时间
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME)
}
export const diffTokenTime = () => {
  const currTime = Date.now()
  const tokenTime = getTokenTime()
  return currTime - tokenTime > TOKEN_TIEM_VALUE
}
