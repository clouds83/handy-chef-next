export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex items-center justify-center p-6 min-h-dvh'>
      <div className='w-full max-w-sm space-y-4 rounded-lg border px-6 py-4'>{children}</div>
    </main>
  )
}
