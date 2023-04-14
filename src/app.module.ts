import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.entity';

@Module({
  imports: [UserModule, AdminModule, ConfigModule.forRoot({
    envFilePath: ['.env']
  }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Sravan@96',
      database: 'test',
      synchronize: true,
      entities:[User],

      
    })

  ],

})
export class AppModule { }
