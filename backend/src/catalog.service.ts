import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceItem } from './entities/service-item.entity';

@Injectable()
export class CatalogService implements OnModuleInit {
  constructor(
    @InjectRepository(ServiceItem)
    private readonly serviceItemRepo: Repository<ServiceItem>,
  ) {}

  async onModuleInit() {
    const count = await this.serviceItemRepo.count();
    if (count > 0) {
      return;
    }

    await this.serviceItemRepo.save([
      {
        name: 'Discover Scuba Dive',
        description: 'Beginner-friendly guided dive experience in Coron waters.',
        price: '4500.00',
        isActive: true,
      },
      {
        name: 'Fun Dive Package',
        description: 'Two-tank recreational dive package for certified divers.',
        price: '3200.00',
        isActive: true,
      },
      {
        name: 'Open Water Certification',
        description: 'Basic certification course with confined and open water sessions.',
        price: '18000.00',
        isActive: true,
      },
    ]);
  }

  listServices() {
    return this.serviceItemRepo.find({
      where: { isActive: true },
      order: { name: 'ASC' },
    });
  }
}
