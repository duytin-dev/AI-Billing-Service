import { Controller, Post, Req, Headers } from "@nestjs/common";
import Stripe from "stripe";

@Controller('api/webhooks')
export class StripeWebhookController {

    private readonly stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    @Post('stripe')
    async handleStripeWebhook(@Req() req: Request & { rawBody?: Buffer }, @Headers('stripe-signature') signature: string) {
        let event: Stripe.Event;
        try {
            event = this.stripe.webhooks.constructEvent(req.rawBody!, signature, process.env.STRIPE_WEBHOOK_SECRET!);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log('Webhook signature verification failed.', err.message);

            } else {
                console.log('Webhook signature verification failed.', err);
            }
            return {
                status: 'error',
                message: 'Webhook signature verification failed.'
            };
        }
        console.log(' Stripe event:', event.type);

        switch (event.type) {
            case 'payment_intent.succeeded':
                console.log('Payment succeeded');
                break;

            case 'payment_intent.payment_failed':
                console.log('Payment failed');
                break;

            case 'invoice.paid':
                console.log('Invoice paid');
                break;

            case 'invoice.payment_failed':
                console.log('Invoice payment failed');
                break;

            case 'customer.subscription.created':
                console.log('Subscription created');
                break;

            case 'customer.subscription.updated':
                console.log('Subscription updated');
                break;

            case 'customer.subscription.deleted':
                console.log('Subscription deleted');
                break;
        }
        return { received: true };
    }
}
