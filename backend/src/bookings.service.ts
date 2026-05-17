import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './entities/booking.entity';
import { ServiceItem } from './entities/service-item.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepo: Repository<Booking>,
    @InjectRepository(ServiceItem)
    private readonly serviceItemRepo: Repository<ServiceItem>,
  ) {}

  async createBooking(payload: CreateBookingDto) {
    const serviceExists = await this.serviceItemRepo.exist({
      where: { id: payload.serviceId, isActive: true },
    });

    if (!serviceExists) {
      throw new NotFoundException('Service not found');
    }

    const booking = this.bookingRepo.create({
      ...payload,
      status: 'pending',
    });

    return this.bookingRepo.save(booking);
  }
}
