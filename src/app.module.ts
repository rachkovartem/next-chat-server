import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './authModule/auth.service';
import { UsersService } from './usersModule/users.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './authModule/constants';
import { AuthModule } from './authModule/auth.module';
import { UsersModule } from './usersModule/users.module';
import { MessagesModule } from './messagesModule/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';
import { User } from './usersModule/user.entity';
import { RoomsModule } from './roomsModule/rooms.module';
import { FriendRequest } from './usersModule/friendRequest.entity';
import {Room} from "./roomsModule/rooms.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AuthModule,
    UsersModule,
    RoomsModule,
    MessagesModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '86400s' },
      secretOrPrivateKey: jwtConstants.secret,
    }),
    TypeOrmModule.forFeature([User, FriendRequest, Room]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthService,
    UsersService,
  ],
})
export class AppModule {}
