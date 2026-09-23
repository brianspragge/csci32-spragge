import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

function readPrivateKey(): string {
  const key = process.env.PRIVATE_KEY

  if (!key) {
    throw new Error('Missing PRIVATE_KEY in .env')
  }

  return key
}

export async function hashPassword(plain: string): Promise<string> {
  const rounds = Number(process.env.BCRYPT_ROUNDS ?? 12)
  return bcrypt.hash(plain, rounds)
}

export async function comparePassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash)
}

export function signToken(claims: Record<string, unknown>): string {
  const privateKey = readPrivateKey()
  const algorithm = process.env.ALGORITHM ?? 'ES256'
  const expiresIn = process.env.EXPIRATION ?? '1h'
  const audience = process.env.AUD ?? 'csci32-frontend'
  const issuer = process.env.ISS ?? 'csci32-backend'

  return jwt.sign(claims, privateKey, {
    algorithm: algorithm as jwt.Algorithm,
    expiresIn,
    audience,
    issuer,
    header: { typ: 'JWT' },
  } as jwt.SignOptions)
}
