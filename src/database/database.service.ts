/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import knexfn, { Knex } from 'knex';

@Injectable()
export class DatabaseService {
  private knex: Knex;
  
  constructor() {
    this.knex = knexfn({
      
      client: 'mysql2',
      connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'user',
      },
      
    });
  }
  getConnection() {
    return this.knex;
  }

  
}

