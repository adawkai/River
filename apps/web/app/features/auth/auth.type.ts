import type {
  UserLoginResponseDTO,
  UserLoginErrorResponseDTO,
  UserRegisterResponseDTO,
  UserRegisterErrorResponseDTO,
  ErrorResponseDTO,
} from "@social/shared";

export type AuthLoginResponse =
  | UserLoginResponseDTO
  | UserLoginErrorResponseDTO;
export type AuthRegisterResponse =
  | UserRegisterResponseDTO
  | UserRegisterErrorResponseDTO;
export type AuthError = ErrorResponseDTO;
