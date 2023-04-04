export interface ActionType {
  type: string;
  payload: any;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
}

export interface InitialState {
  contacts: Contact[];
}

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
