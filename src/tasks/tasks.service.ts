/* eslint-disable prettier/prettier */
import { Body, Injectable, Param, Query } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateTasksDto } from './tasks';

@Injectable()
export class UsuariosService {
  
  constructor(private databaseService: DatabaseService) {}


  async buscar()  { 
    const db = this.databaseService.getConnection();
    return await db.schema.raw('SELECT * FROM checklist' );
    }
    
  async adicionar(@Query() body: CreateTasksDto) {
  const db = this.databaseService.getConnection();
  console.log('Usuário adicionado com sucesso!')
  return await db.schema.raw(`INSERT INTO checklist (titulo, descricao, prioridade, status) VALUES ('${body.titulo}', '${body.desc}', '${body.prioridade}', '${body.status}');`)
            
    }

  

  
  async alterar(@Body() body: CreateTasksDto) {
 const db = this.databaseService.getConnection();
 console.log('Usuário alterado com sucesso!')
 return await db.schema.raw(`UPDATE checklist SET titulo = '${body.newData[0].titulo}', descricao = '${body.newData[0].descricao}', prioridade = '${body.newData[0].prioridade}', status = '${body.newData[0].status}' WHERE id = '${body.key}';`);
    
  }

  async deletar(@Param() body: CreateTasksDto) {
    const db = this.databaseService.getConnection();
    console.log('Usuário removido com sucesso!')
    return await db.schema.raw(`DELETE FROM checklist WHERE (id = '${body.key}');`)
  }
  async deleteall() {
    const db = this.databaseService.getConnection();
    console.log('Tabela truncated com sucesso!')
    return await db.schema.raw(`TRUNCATE TABLE checklist`)
  }
  
  
}
