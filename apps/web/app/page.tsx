import { prisma } from "@repo/db"
export const instant = false;
export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div >
      {JSON.stringify(users)}
    </div>
  )
}

