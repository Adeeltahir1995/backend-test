export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  remember_me_token?: string,
  type: 'admin' | 'vendor';
  first_name: string;
  last_name: string;
  gender: string;
  contact_number: string;
  addrtess?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}
