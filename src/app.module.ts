import { Module } from '@nestjs/common';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { HouseCategoryModule } from './house-category/house-category.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule,ReviewsModule, HouseCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
