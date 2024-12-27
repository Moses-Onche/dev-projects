import { useState } from 'react'
import ImgGen from "./projects/01-img-gen/main";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li>
          {/* <a href={ImgGen}>Alpaca Image Generator</a> */}
        </li>
      </ul>
      <ImgGen />
    </>
  )
}

export default App
