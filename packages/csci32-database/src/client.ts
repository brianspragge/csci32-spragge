export { ADMIN_ROLE_ID, BASIC_ROLE_ID } from '../prisma/seeders/seedRoles'
export { seedRoles } from '../prisma/seeders/seedRoles'
export { seedPermissions } from '../prisma/seeders/seedPermissions'
export { seedUsers } from '../prisma/seeders/seedUsers'

import { PrismaClient } from '../generated/prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export * from '../generated/prisma/client'
