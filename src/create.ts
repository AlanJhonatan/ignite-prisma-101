import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Next.js 101",
      description: "Curso completo de next.js"
    }
  })

  console.log(result);
}

main()