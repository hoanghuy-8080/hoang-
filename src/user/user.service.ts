import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { User } from 'src/shared/database/mongo/schemal/user.schema';

export type UserDocument = User & Document;

@Injectable()
export class UsersService {
  userModel: any;
  async create(user: User): Promise<UserDocument> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: Partial<User>): Promise<UserDocument | null> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async remove(id: string): Promise<UserDocument | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
