export enum EVENT_TYPE {
  POST_CREATED = 'post.created',
}

export type Event<T> = {
  eventId: string;
  type: EVENT_TYPE;
  occurredAt: Date;
  payload: T;
};

export * from './post-created.event.payload';
