import User from 'App/Models/User'
import { RegisterRequest, LoginRequest } from 'App/Types/index'

export default class AuthController {
  public async registerUser(registerData: RegisterRequest | Record<string, any>) {
    return await User.create(registerData);
  }

  public async login(loginData: LoginRequest | Record<string, any>) {
    const { username, password } = loginData;
    const result = await User.query().where('username', username).andWhere('password', password);

    console.log(result);

    if (result.length !== 0) return result;

    throw new Error('Invalid Credentials');
  }
}
