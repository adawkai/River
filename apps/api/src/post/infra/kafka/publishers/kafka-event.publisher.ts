import { TOKENS } from '@/_shared/application/tokens';
import {
  EVENT_TYPE,
  Event,
  PostCreatedEventPayload,
} from '@/_shared/domain/events';
import { ClientKafka } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { PostEventPublisherPort } from '@/post/application/ports/event.publisher.port';
import { randomUUID } from 'crypto';

@Injectable()
export class KafkaPostEventPublisher implements PostEventPublisherPort {
  constructor(
    @Inject(TOKENS.KAFKA_SERVICE)
    private readonly kafkaClient: ClientKafka,
  ) {}

  async publishPostCreatedEvent(
    payload: PostCreatedEventPayload,
  ): Promise<void> {
    const event: Event<PostCreatedEventPayload> = {
      eventId: randomUUID(),
      type: EVENT_TYPE.POST_CREATED,
      occurredAt: new Date(),
      payload,
    };
    await this.kafkaClient.emit(EVENT_TYPE.POST_CREATED, event);
  }
}
