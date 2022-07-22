import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Model } from 'mongoose';
import { UserI } from './interface/user.interface';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<UserI>) {}

  async createUser(user: any): Promise<UserI> {
    const { password } = user;
    const hashPassword = await hash(password, 10);
    user = { ...user, password: hashPassword };
    const newUser = new this.userModel(user);
    await newUser.save();
    return newUser;
  }
}
