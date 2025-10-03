import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),  // ✅ This makes the repository injectable
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // optional, if other modules need it
})
export class UsersModule {}
