import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessLog } from './entities/access-log.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(AccessLog)
    private readonly accessLogRepo: Repository<AccessLog>,
  ) {}

  async handleChatwootEvent(payload: Record<string, unknown>) {
    const log = this.accessLogRepo.create({
      resource: 'chatwoot',
      action: String(payload['event'] || 'unknown_event'),
      actor: String(payload['sender'] || 'chatwoot_webhook'),
      metadata: JSON.stringify(payload),
    });

    await this.accessLogRepo.save(log);

    return {
      received: true,
      message: 'Chat event logged',
      logId: log.id,
    };
  }
}
