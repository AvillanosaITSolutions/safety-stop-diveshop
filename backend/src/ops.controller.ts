import { Body, Controller, Get, Post } from '@nestjs/common';
import { OpsService } from './ops.service';

@Controller('ops')
export class OpsController {
  constructor(private readonly opsService: OpsService) {}

  @Post('costs')
  addCost(
    @Body()
    payload: {
      source: string;
      amount: number;
      notes?: string;
    },
  ) {
    return this.opsService.addCost(payload.source, payload.amount, payload.notes);
  }

  @Post('access')
  addAccess(
    @Body()
    payload: {
      resource: string;
      action: string;
      actor: string;
      metadata?: string;
    },
  ) {
    return this.opsService.addAccess(
      payload.resource,
      payload.action,
      payload.actor,
      payload.metadata,
    );
  }

  @Get('summary')
  getSummary() {
    return this.opsService.getSummary();
  }
}
