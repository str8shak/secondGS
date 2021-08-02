import * as React from "react"
import { Link } from "gatsby"

// markup
const Layout = ({namepage,children}) => {
  return (
    <main>
      <title>{namepage}</title>
      <div className="w-screen h-screen grid grid-rows-6 bg-gray-800 dark:bg-gray-800 ">
        <div className=" h-full w-full row-span-1">
          <header className="h-1/2 bg-gray-200"></header>
          <nav className="h-1/2 ">
            <ul className="flex h-full divide-x-2 divide-indigo-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/art">Art</Link></li>
            </ul>
          </nav>
        </div>
        <section className=" h-full w-full row-span-5">
          {children}
        </section>
          
      </div>
      <footer className="h-screen w-screen bg-gray-900">
      </footer>
    </main>
  )
}

export default Layout
