import { Type } from "class-transformer";
import { IsArray, IsObject, IsString, ValidateNested } from "class-validator";

import { PostResponseDTO } from "./post.response.dto";
import { ErrorResponseDTO } from "../error.response.dto";

export class ListPostResponseDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PostResponseDTO)
  items!: PostResponseDTO[];

  @IsString()
  nextCursor!: string | null;
}

export class ListPostErrorResponseDTO {
  @IsObject()
  @ValidateNested()
  @Type(() => ErrorResponseDTO)
  error!: ErrorResponseDTO;
}
