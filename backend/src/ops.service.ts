import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessLog } from './entities/access-log.entity';
import { CostLog } from './entities/cost-log.entity';

@Injectable()
export class OpsService {
  constructor(
    @InjectRepository(CostLog)
    private readonly costLogRepo: Repository<CostLog>,
    @InjectRepository(AccessLog)
    private readonly accessLogRepo: Repository<AccessLog>,
  ) {}

  addCost(source: string, amount: number, notes?: string) {
    const log = this.costLogRepo.create({
      source,
      amount: amount.toFixed(2),
      notes,
      currency: 'PHP',
    });

    return this.costLogRepo.save(log);
  }

  addAccess(resource: string, action: string, actor: string, metadata?: string) {
    const log = this.accessLogRepo.create({
      resource,
      action,
      actor,
      metadata,
    });

    return this.accessLogRepo.save(log);
  }

  async getSummary() {
    const [costs, accessCount] = await Promise.all([
      this.costLogRepo.find({ order: { createdAt: 'DESC' }, take: 20 }),
      this.accessLogRepo.count(),
    ]);

    return {
      recentCosts: costs,
      totalAccessLogs: accessCount,
    };
  }
}
