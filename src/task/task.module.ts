import { Module } from '@nestjs/common';
import { TaskService } from './tast.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
  exports: [TaskService],
})
export class TaskModule {}
