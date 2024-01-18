import { useState } from "react"
function App() {
  const [color, setColor] = useState("cyan")

  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("Red")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("Green")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("White")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{ backgroundColor: "white" }}>White</button>
          <button onClick={() => setColor("Magenta")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{ backgroundColor: "magenta" }}>Magenta</button>
        </div>
      </div>
    </>
  )
}

export default App
