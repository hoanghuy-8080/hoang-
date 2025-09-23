import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UsersStatus } from 'src/common/enums/user.enums';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;
  @Prop()
  email: string;
  @Prop({ type: String, enum: UsersStatus, default: UsersStatus.ACTIVE })
  status: UsersStatus;
}
export const UserSchema = SchemaFactory.createForClass(User);
