import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  // LIMIT 1
  const result = await prisma.courses.update({
    where: {
      id: '0a9ea259-8c08-466a-871f-37ce890f32c2',
    },
    data: {
      name: 'Vue.js - 202'
    }
  })
  
  console.log(result)
}

main()