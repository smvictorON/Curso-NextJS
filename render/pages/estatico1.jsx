import { useEffect, useState } from "react"

export default function Estatico1() {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    setRandom(Math.random())
  },[])
  return(
    <>
      <h1>Estatico 1</h1>
      <div>{random}</div>
    </>
  )
}