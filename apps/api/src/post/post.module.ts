import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from '@/_shared/infra/prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { PostController } from './interface/post.controller';
import { CreatePostUseCase } from './application/use-cases/create-post.usecase';
import { GetFeedUseCase } from './application/use-cases/get-feed.usecase';
import { GetUserPostsUseCase } from './application/use-cases/get-user-posts.usecase';
import { TOKENS } from '@/_shared/application/tokens';
import { PrismaPostRepo } from './infra/persistence/prisma/prisma-post.repo';
import { KafkaPostEventPublisher } from './infra/kafka/publishers/kafka-event.publisher';

@Module({
  imports: [PrismaModule, forwardRef(() => UserModule)],
  controllers: [PostController],
  providers: [
    // Use cases
    CreatePostUseCase,
    GetFeedUseCase,
    GetUserPostsUseCase,

    // Repositories
    { provide: TOKENS.POST_REPO, useClass: PrismaPostRepo },
    { provide: TOKENS.POST_EVENT_PUBLISHER, useClass: KafkaPostEventPublisher },
  ],
  exports: [CreatePostUseCase, GetFeedUseCase, GetUserPostsUseCase],
})
export class PostModule {}
