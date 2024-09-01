'use server'

import { createAuthSession, destroySession } from '@/lib/auth'
import prisma from '@/prisma/db'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'

export interface ValidationErrors {
  [key: string]: string
}

const crypticError = 'An error occurred. Please try again.'

export async function signup(
  prevState: { errors: ValidationErrors } | undefined,
  formData: FormData
): Promise<{ errors: ValidationErrors } | undefined> {
  const email = formData.get('email')
  const password = formData.get('password')

  let errors: ValidationErrors = prevState?.errors || {}

  if (email && typeof email === 'string' && !email.includes('@')) {
    errors.email = 'Enter a valid email.'
  }

  if (password && typeof password === 'string' && password.trim().length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }

  if (Object.keys(errors).length > 0) return { errors }

  const hashedPassword = await bcrypt.hash(password as string, 10)

  try {
    const user = await prisma.user.create({
      data: {
        email: email as string,
        hashedPassword,
      },
    })

    await createAuthSession(user.id)

    redirect('/')
  } catch (error: any) {
    if (error.code === 'P2002') {
      return {
        errors: {
          email: crypticError,
        },
      }
    }

    throw error
  }
}

export async function logout() {
  await destroySession()
  redirect('/')
}

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  })

  if (!existingUser) {
    return {
      errors: {
        email: crypticError,
      },
    }
  }

  const passwordMatch = await bcrypt.compare(password as string, existingUser.hashedPassword)

  if (!passwordMatch) {
    return {
      errors: {
        password: crypticError,
      },
    }
  }

  await createAuthSession(existingUser.id)

  redirect('/')
}

export async function auth(type: string, prevState: { errors: ValidationErrors } | undefined, formData: FormData) {
  if (type === 'login') {
    return login(prevState, formData)
  }

  if (type === 'register') {
    return signup(prevState, formData)
  }

  return prevState
}
