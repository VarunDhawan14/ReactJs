// import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  // let myobj = {
  //   species: "Animal",
  //   name: "Lion",
  //   breed: "Calegy"
  // }

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white">
      <nav className="p-4 border-b border-slate-700">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </nav>
      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-5xl font-bold"> Varun Dhawan</h2>
        <p className="mt-4 text-slate-300">
          Learning React + Tailwind CSS
        </p>
      </main>
      <Card madeby = "VarunDhawan" button = "Click me"/>
      <Card madeby = "Lion" />
    </div>
    </>
  )
}

export default App;