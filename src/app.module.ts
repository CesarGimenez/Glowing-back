import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { OrdersModule } from './orders/orders.module';
import { DetailsModule } from './details/details.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:teg2022@teg.zchc0.mongodb.net/glowing?retryWrites=true&w=majority',
    ),
    UserModule,
    ProductsModule,
    AuthModule,
    CategoryModule,
    BrandModule,
    OrdersModule,
    DetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
