import type { AuthUserPublic } from "../../../entities/auth/types/authUserPublic";

const MOCK_CURRENT_USER: AuthUserPublic | null = null;

export async function getCurrentUser(): Promise<AuthUserPublic | null> {
  return MOCK_CURRENT_USER;
}
