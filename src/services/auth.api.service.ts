import { Axios, AxiosResponse } from 'axios'
import { api } from 'boot/axios'
import { User } from 'src/models/user'

class AuthApiService {
  private readonly api: Axios

  constructor (api: Axios) {
    this.api = api
  }

  public async login (username: string, password: string): Promise<AxiosResponse<User>> {
    return api.post('https://dummyjson.com/auth/login', {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export default new AuthApiService(api)
