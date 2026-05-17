import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { AccessLog } from './entities/access-log.entity';
import { Booking } from './entities/booking.entity';
import { CostLog } from './entities/cost-log.entity';
import { ServiceItem } from './entities/service-item.entity';
import { OpsController } from './ops.controller';
import { OpsService } from './ops.service';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: Number(configService.get<string>('DB_PORT', '5432')),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'postgres'),
        database: configService.get<string>('DB_DATABASE', 'safety_stop_diveshop'),
        entities: [ServiceItem, Booking, CostLog, AccessLog],
        synchronize: configService.get<string>('DB_SYNCHRONIZE', 'true') === 'true',
      }),
    }),
    TypeOrmModule.forFeature([ServiceItem, Booking, CostLog, AccessLog]),
  ],
  controllers: [
    AppController,
    CatalogController,
    BookingsController,
    PaymentsController,
    ChatController,
    OpsController,
  ],
  providers: [
    AppService,
    CatalogService,
    BookingsService,
    PaymentsService,
    ChatService,
    OpsService,
  ],
})
export class AppModule {}
