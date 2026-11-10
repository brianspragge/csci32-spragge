import { PrismaClient } from 'csci32-database'
import { seedPermissions } from './seeders/seedPermissions'
import { seedRoles } from './seeders/seedRoles'
import { seedUsers } from './seeders/seedUsers'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')
  await seedPermissions(prisma)
  await seedRoles(prisma)
  await seedUsers(prisma)

  await prisma.comment.deleteMany()
  await prisma.post.deleteMany()

  const [author] = await prisma.user.findMany({
    select: { user_id: true },
    take: 1,
  })

  if (!author) {
    console.warn('No users found. Skipping Post seed.')
    return
  }

  const post1 = await prisma.post.create({
    data: { title: 'Hello', body: 'First post', authorId: author.user_id },
  })

  await prisma.comment.createMany({
    data: [
      { body: 'Great post!', postId: post1.id },
      { body: 'Thanks for sharing', postId: post1.id },
    ],
  })

  await prisma.post.create({
    data: {
      title: 'Nested Example',
      body: 'Created with comments',
      authorId: author.user_id,
      comments: { create: [{ body: 'Nice!' }, { body: 'Following.' }] },
    },
  })

  console.log('✅ All seeds completed successfully!')
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error('❌ Seed error:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
