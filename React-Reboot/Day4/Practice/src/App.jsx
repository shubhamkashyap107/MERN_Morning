import Counter from './Components/Counter';
import DarkMode from './Components/DarkMode';
import Greet from './Components/Greet';
import Introduce from './Components/Introduce'

const App = () => {

  const people = [
  { name: "Alice Johnson", age: 28, gender: "female" },
  { name: "Brian Smith", age: 34, gender: "male" },
  { name: "Carla Reyes", age: 25, gender: "female" },
  { name: "David Kim", age: 31, gender: "male" },
  { name: "Emma Watson", age: 29, gender: "female" },
  { name: "Frank Turner", age: 40, gender: "male" },
  { name: "Grace Lee", age: 22, gender: "female" },
  { name: "Henry Adams", age: 37, gender: "male" },
  { name: "Isla Thompson", age: 26, gender: "female" },
  { name: "Jack Carter", age: 30, gender: "male" },
  { name: "Karen White", age: 35, gender: "female" },
  { name: "Liam Green", age: 32, gender: "male" },
  { name: "Mia Hall", age: 27, gender: "female" },
  { name: "Nathan Scott", age: 33, gender: "male" },
  { name: "Olivia Perez", age: 24, gender: "female" },
  { name: "Paul Allen", age: 38, gender: "male" },
  { name: "Quinn Brooks", age: 29, gender: "female" },
  { name: "Ryan Murphy", age: 36, gender: "male" },
  { name: "Sophia Davis", age: 23, gender: "female" },
  { name: "Tyler Wilson", age: 41, gender: "male" }
];

  return (
    <div>
      {/* <Introduce name="Nistha" age={30} gender="Female" />
      {Introduce({name : "Shubham", age : 16, gender : "Male"})} */}

        {/* {people.map((item) => {
          return <Introduce name={item.name} age={item.age} gender={item.gender} />
        })} */}
{/* 

           {people.map((item) => (
          <Introduce name={item.name} age={item.age} gender={item.gender} />
        ))} */}

      {/* <Counter /> */}

      {/* <Greet /> */}


      <DarkMode />

    </div>
  )
}

export default App