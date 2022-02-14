/* eslint-disable prettier/prettier */
import { UsuariosService } from './tasks.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TasksController } from './tasks.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [UsuariosService, DatabaseService],
})
export class UsuariosModule {}
