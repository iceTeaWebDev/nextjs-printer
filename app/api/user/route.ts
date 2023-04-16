import { createRandomUser } from "@/lib/faker";

export async function GET(request: Request) {
  const user = createRandomUser();
  return new Response(JSON.stringify(user))
}
