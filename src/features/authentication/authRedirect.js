export const loginPath = destination => `/login?next=${encodeURIComponent(destination)}`;

export function afterSignIn() {
  return '/home';
}
