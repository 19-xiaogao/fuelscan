import React from "react";
import Head from 'next/head';
import '@/assets/css/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <title>Blockchain Explorer</title>
    </Head>
      <body>{children}</body>
    </html>
  )
}