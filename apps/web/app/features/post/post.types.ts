import {
  ErrorResponseDTO,
  ListPostErrorResponseDTO,
  ListPostResponseDTO,
  CreatePostErrorResponseDTO,
  CreatePostResponseDTO,
} from "@social/shared";

import type { User } from "../user/user.types";

export type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author: User;
};

export type FeedResponse = {
  items: Post[];
  nextCursor: string | null;
};

export type CreatePostDto = {
  content: string;
};

export type ListPostResponse = ListPostResponseDTO | ListPostErrorResponseDTO;

export type CreatePostResponse =
  | CreatePostResponseDTO
  | CreatePostErrorResponseDTO;

export type PostError = ErrorResponseDTO;
