import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('intent')
  createPaymentIntent(@Body() payload: CreatePaymentIntentDto) {
    return this.paymentsService.createPaymentIntent(payload);
  }
}
