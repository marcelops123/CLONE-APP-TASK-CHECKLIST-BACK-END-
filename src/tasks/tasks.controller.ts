/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Body, UseGuards, Query, Param } from '@nestjs/common';

import { CreateTasksDto } from './tasks';
import { UsuariosService } from './tasks.service';

@Controller('usuarios')
export class TasksController {
  constructor(private TasksRepository: UsuariosService) { }

    @Post('adicionar')
    adicionar(@Body() body: CreateTasksDto) {
        this.TasksRepository.adicionar(body);
        return `${body}`
    }



  @Get('buscar')
  buscar() {
    return this.TasksRepository.buscar();
  
  }
  @Post('alterar')
  alterar(@Body() body: CreateTasksDto) {
    
    this.TasksRepository.alterar(body);
    return `${body}`

  }

  @Delete('deletar')
  deletar(@Body() body: CreateTasksDto) {
   this.TasksRepository.deletar(body);
    return `Usuário de id #${body} deletado!`
  }
  @Delete('deleteall')
  deleteall(@Body() body: CreateTasksDto) {
   this.TasksRepository.deleteall();
    return `Tabela truncated`
  }
}



