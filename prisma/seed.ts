import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const participants = await prisma.participant.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com', avatarUrl: null },
      { name: 'Bob', email: 'bob@example.com', avatarUrl: null },
      { name: 'Charlie', email: 'charlie@example.com', avatarUrl: null },
      { name: 'Diana', email: 'diana@example.com', avatarUrl: null },
      { name: 'Eve', email: 'eve@example.com', avatarUrl: null },
    ],
  })
  console.log('Participants created:', participants)

  const task1 = await prisma.task.create({
    data: {
      title: 'Task 1',
      project: 'Project Alpha',
      startTime: '09:00:00',
      endTime: '10:00:00',
      status: 'open',
      isCompleted: false,
      participants: {
        create: [
          { participant: { connect: { email: 'alice@example.com' } } },
          { participant: { connect: { email: 'bob@example.com' } } },
          { participant: { connect: { email: 'charlie@example.com' } } },
        ],
      },
    },
  })

  const task2 = await prisma.task.create({
    data: {
      title: 'Task 2',
      project: 'Project Beta',
      startTime: '10:00:00',
      endTime: '11:00:00',
      status: 'open',
      isCompleted: false,
      participants: {
        create: [
          { participant: { connect: { email: 'alice@example.com' } } },
          { participant: { connect: { email: 'bob@example.com' } } },
        ],
      },
    },
  })

  const task3 = await prisma.task.create({
    data: {
      title: 'Task 3',
      project: 'Project Gamma',
      startTime: '11:00:00',
      endTime: '12:00:00',
      status: 'archived',
      isCompleted: false,
      participants: {
        create: [
          { participant: { connect: { email: 'charlie@example.com' } } },
          { participant: { connect: { email: 'diana@example.com' } } },
        ],
      },
    },
  })

  const task4 = await prisma.task.create({
    data: {
      title: 'Task 4',
      project: 'Project Delta',
      startTime: '12:00:00',
      endTime: '13:00:00',
      status: 'closed',
      isCompleted: false,
      participants: {
        create: [
          { participant: { connect: { email: 'alice@example.com' } } },
          { participant: { connect: { email: 'bob@example.com' } } },
          { participant: { connect: { email: 'charlie@example.com' } } },
          { participant: { connect: { email: 'diana@example.com' } } },
          { participant: { connect: { email: 'eve@example.com' } } },
        ],
      },
    },
  })

  const task5 = await prisma.task.create({
    data: {
      title: 'Task 5',
      project: 'Project Super Delta',
      startTime: '14:00:00',
      endTime: '17:00:00',
      status: 'archived',
      isCompleted: false,
      participants: {
        create: [
          { participant: { connect: { email: 'alice@example.com' } } },
          { participant: { connect: { email: 'charlie@example.com' } } },
          { participant: { connect: { email: 'diana@example.com' } } },
          { participant: { connect: { email: 'eve@example.com' } } },
        ],
      },
    },
  })

  console.log('Tasks created:', task1, task2, task3, task4, task5)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
