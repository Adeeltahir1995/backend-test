import { setSuccessResponse, setErrorResponse } from 'App/Utils/util'
import User from 'App/Models/User'
import { RegisterRequest, LoginRequest } from 'App/Types/index'

export default class AuthController {
  public async registerUser(registerData: Record<string, RegisterRequest>) {
    try {
      const result = await User.create(registerData)
      return setSuccessResponse(200, 'Success', result)
    } catch (error) {
      return setErrorResponse(500, 'Error', error)
    }
  }

  public async login(loginData: LoginRequest | Record<string, any>) {
    try {
      const { username, password } = loginData
      const result = await User.query().where('username', username).andWhere('password', password)

      if (result.length === 0) return setErrorResponse(403, 'Error', 'Invalid Credentials')
      return setSuccessResponse(200, 'Success', result)
    } catch (error) {
      return setErrorResponse(500, 'Internal Server Error', error)
    }
  }
}
