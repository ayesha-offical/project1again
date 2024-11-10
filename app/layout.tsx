export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   <title>Project01</title>
      <body>{children}</body>
    </html>
  )
}