import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly configService: ConfigService) {}

  async createPaymentIntent(payload: CreatePaymentIntentDto) {
    const stripeSecretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    const currency = (payload.currency || 'php').toLowerCase();

    if (!stripeSecretKey || stripeSecretKey.startsWith('sk_test_replace_me')) {
      return {
        provider: 'stripe',
        mode: 'stub',
        amount: payload.amount,
        currency,
        clientSecret: `stub_pi_${Date.now()}`,
      };
    }

    const stripe = new Stripe(stripeSecretKey);
    const intent = await stripe.paymentIntents.create({
      amount: payload.amount,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        bookingId: payload.bookingId || 'unassigned',
      },
    });

    return {
      provider: 'stripe',
      mode: 'live',
      clientSecret: intent.client_secret,
      id: intent.id,
    };
  }
}
