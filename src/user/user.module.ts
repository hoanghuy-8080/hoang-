import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// Update the path below to the correct relative location of user.schema.ts
import { UserController } from './user.controller';
import { UserService } from './user.service';
// eslint-disable-next-line prettier/prettier
import { User,UserSchema,} from 'src/shared/database/mongo/schemal/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
