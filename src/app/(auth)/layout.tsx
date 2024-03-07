import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login',
}

type AuthLayoutProps = {
  children: React.ReactNode,
}

export default function AuthLayout(props: AuthLayoutProps) {
  const {
    children,
  } = props

  return (
    <div>{children}</div>
  )
}