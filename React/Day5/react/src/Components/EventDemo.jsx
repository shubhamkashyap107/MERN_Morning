
export const EventDemo = () => {
    
    function btnClickHandler()
    {
        console.log("Btn Clicked")
    }
    function btnClickHandler2(name)
    {
        console.log("Hello " + name)
    }
  return (
    <>
        <button onClick={() => {
            console.log("Btn zero clicked")
        }}>Click me</button>


        <button onClick={btnClickHandler}>Click me 1</button>


        <button onClick={() => {
            btnClickHandler2("Shubham")
        }}>Click me 2</button>
    </>
  )
}
