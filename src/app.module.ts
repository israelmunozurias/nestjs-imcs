import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './imcs/api/api.controller';
import { ServiceService } from './imcs/service/service.service';
import { ModuleModule } from './imcs/module/module.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ModuleModule,
    MongooseModule.forRoot('mongodb://localhost/nest-tutorial', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController, ApiController],
  providers: [AppService, ServiceService],
})
export class AppModule {}
