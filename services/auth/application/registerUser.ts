import type { RegisterRequest } from "../../../entities/auth/types/registerRequest";

export async function registerUser(_payload: RegisterRequest): Promise<boolean> {
  return true;
}
