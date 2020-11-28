import {defaultAction} from './controller/defaultAction'
import {signIn} from './controller/signAction'

export const AppRoutes = [
  {
    path: '/',
    method: 'get',
    action: defaultAction,
  },
  {
    path: '/signin',
    method: 'post',
    action: signIn,
  },
]
