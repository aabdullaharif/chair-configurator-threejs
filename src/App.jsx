/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { Perf } from "r3f-perf"
import { Customizer } from "./components/Customizer"

function App() {

  return (
    <>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <Perf position="top-left" />
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />

          <Experience />  
        </Canvas> 
        <Customizer/>
      </div>
    </>
  )
}

export default App
