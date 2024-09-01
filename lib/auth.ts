import { PrismaAdapter } from '@lucia-auth/adapter-prisma'
import prisma from '@/prisma/db'
import { Lucia } from 'lucia' // Import the SessionCookie type from 'lucia'
import { cookies } from 'next/headers'

const adapter = new PrismaAdapter(prisma.session, prisma.user)

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
})

export async function createAuthSession(userId: string) {
  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  setSessionCookie(sessionCookie)
}

export async function verifyAuth() {
  const sessionCookie = cookies().get(lucia.sessionCookieName)

  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    }
  }

  const sessionId = sessionCookie.value

  if (!sessionId) {
    return {
      user: null,
      session: null,
    }
  }

  const result = await lucia.validateSession(sessionId)

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id)
      setSessionCookie(sessionCookie)
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      setSessionCookie(sessionCookie)
    }
  } catch (error) {
    cookies().delete(lucia.sessionCookieName)
  }

  return result
}

export async function destroySession() {
  const { session } = await verifyAuth()

  if (!session) {
    return {
      error: 'Unothorized!',
    }
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  setSessionCookie(sessionCookie)
}

// ############# helpers ############# //

function setSessionCookie(sessionCookie: any) {
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
}
