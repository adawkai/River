import { Type } from "class-transformer";
import { IsArray, IsObject, IsString, ValidateNested } from "class-validator";

import { UserResponseDTO } from "./user.response.dto";
import { ErrorResponseDTO } from "../error.response.dto";

export class ListUserResponseDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserResponseDTO)
  items!: UserResponseDTO[];

  @IsString()
  nextCursor!: string | null;
}

export class ListUserErrorResponseDTO {
  @IsObject()
  @ValidateNested()
  @Type(() => ErrorResponseDTO)
  error!: ErrorResponseDTO;
}
