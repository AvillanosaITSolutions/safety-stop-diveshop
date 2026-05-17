import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('webhook')
  handleWebhook(@Body() payload: Record<string, unknown>) {
    return this.chatService.handleChatwootEvent(payload);
  }
}
