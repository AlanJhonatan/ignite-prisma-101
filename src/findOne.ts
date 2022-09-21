import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  // LIMIT 1
  const result = await prisma.courses.findFirst({
    take: -1,
  });
  
  console.log(result)
}

main()