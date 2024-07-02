import React from 'react'

const ColorList = () => {
    
    const colors: string[] = ['orange', 'blue', 'red', 'green', 'purple']

  return (
    <div>
      {colors.map((color, index) => 
      <li key={index}>
        {color}
      </li>
    )}
    </div>
  )
}

export default ColorList
