import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-2xl mx-auto h-full flex flex-col gap-5">
      <nav className="flex justify-between items-center text-xl">
        <h1 className="font-mono">TaskMe</h1>
      </nav>
      {children}
    </div>
  )
}

export default Layout
