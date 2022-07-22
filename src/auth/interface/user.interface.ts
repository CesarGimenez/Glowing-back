import { Document } from 'mongoose';

export interface UserI extends Document {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  is_admin: boolean;
}
