import React from 'react'

export function EffectsWithMouseMove() {
  const [X ,setX]  =React.useState(0)
  const [Y ,setY]  =React.useState(0)

  const handleMousePosition = (e) => {
   
    setX(e.clientX)
    setY(e.clientY)
  }
  

React.useEffect(()=>{
    document.addEventListener('mousemove',handleMousePosition)
},[])
const handleClick=(e)
  return (
    <div>
    <h1>MOUSE CORDINATES:</h1>
    <button onClick={handleClick}></button>
    <div>X-Axis: {X}</div>
    <div>Y-Axis: {Y}</div>

    </div>
  )
}
