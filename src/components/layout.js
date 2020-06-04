import React from "react"

export default function Layout({ title, subtitle, children }) {
  return (
    <div className="app-container">
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Rachelle Rathbone</footer>
    </div>
  )
}
