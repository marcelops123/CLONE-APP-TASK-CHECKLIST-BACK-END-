/* eslint-disable prettier/prettier */
import { UsuariosModule } from './tasks/tasks.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
  
 UsuariosModule   , DatabaseModule]

})
export class AppModule { }

