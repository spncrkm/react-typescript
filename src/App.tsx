import ColorList from './components/ColorList'
import './App.css'
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';


function App() {
  const greeting: string = "Hello TypeScript"
  const numList: number[] = [5, 10, 15];
  const calculateSum = (a: number, b: number):number => a + b
  
  const filterNumbers = (arr:number[]): number[] => {
    const evenNums = arr.filter((item) => item % 2 === 0)
    return evenNums
  }

 
  return (
    <>
      <div>
        {greeting}
      </div>
      <div>
        {numList.join(', ')}
      </div>
      <div>
        {calculateSum(Math.round(Math.random()*100), Math.round(Math.random()*1000))}
      </div>
      <ColorList />
      <EvenNumbers filtNums={filterNumbers}/>
      <UserList/>
    </>
  )
}

export default App
