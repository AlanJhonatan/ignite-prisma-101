import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de React.js',
      duration: 100,
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Alan Jhonatan',
          },
          create: {
            name: 'Alan Jhonatan'
          }
        }
      }
    }
  })

  console.log(result);
}

main()