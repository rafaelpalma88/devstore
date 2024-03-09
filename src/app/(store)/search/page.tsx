import { Header } from '@/components/header'

export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <>
      <Header />
      <p>Hello World Search</p>
    </>
  )
}
