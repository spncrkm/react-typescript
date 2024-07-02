import React from 'react'

const EvenNumbers = ({filtNums}) => {
 const allNums:number[] = []
 let result: number[];
 for (let i = 1; i <= 20; i++) {
    allNums.push(i)
 }
 result = filtNums(allNums)

  return (
    <div>
        {result.map((item, index) => <span key={index}>{item} </span> )}
    </div>
  )
}

export default EvenNumbers
