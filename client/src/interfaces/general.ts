interface ErrosList {
  msg: string;
  param?: string;
  location?: string;
}

export interface ErrorMessage {
  text?: string;
  errors?: ErrosList[];
}

export interface RegisterUser {
  name?: string;
  email?: string;
  password?: string;
}
