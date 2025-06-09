import { useState, useMemo, useCallback } from "react";


const CompA = () => {

    const[n, setN] = useState(1)
    const[count, setCount] = useState(0)

    // function isPrime(k)
    // {
    //     // Corner cases
    //     if (k <= 1)
    //         return 0;
    //     if (k==2 || k==3)
    //         return 1;
    
    //     // below 5 there is only two prime numbers 2 and 3 
    //     if (k % 2 == 0 || k % 3 == 0)
    //         return 0;
    
    // // Using concept of prime number can be represented in form of (6*k + 1) or(6*k - 1) 
    //     for (let i = 5; i * i <= k; i = i + 6)
    //         if (k % i == 0 || k % (i + 2) == 0)
    //             return 0;
    
    //     return 1;
    // }



    // function nThPrime(n)
    // {
    //     let i=2;
        
    //     while(n>0)
    //     {
    //         // each time if a prime number found decrease n
    //         if(isPrime(i))
    //         n--;
        
    //         i++;  //increase the integer to go ahead
    //     }
    //     i-=1; // since decrement of k is being done before 
    //         //Increment of i , so i should be decreased by 1
    //     return i;
    // }


    const isPrime = useCallback(function (k)
    {
        // Corner cases
        if (k <= 1)
            return 0;
        if (k==2 || k==3)
            return 1;
    
        // below 5 there is only two prime numbers 2 and 3 
        if (k % 2 == 0 || k % 3 == 0)
            return 0;
    
    // Using concept of prime number can be represented in form of (6*k + 1) or(6*k - 1) 
        for (let i = 5; i * i <= k; i = i + 6)
            if (k % i == 0 || k % (i + 2) == 0)
                return 0;
    
        return 1;
    }, [])

    const nThPrime = useCallback(function(n)
    {
        let i=2;
        
        while(n>0)
        {
            // each time if a prime number found decrease n
            if(isPrime(i))
            n--;
        
            i++;  //increase the integer to go ahead
        }
        i-=1; // since decrement of k is being done before 
            //Increment of i , so i should be decreased by 1
        return i;
    }, [])

    // let ans =  nThPrime(n)
    let ans =  useMemo(() => {
        return nThPrime(n)
    }, [n])

  return (
    <div style={{display : 'flex', justifyContent : "space-between"}}>
        <div>
        <input onChange={(e) => {
            setN(e.target.value)
        }} type="number"  />

        <p>{n}th prime number is : {ans}</p>
        </div>


        <div>
        <div>{count}</div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>
        <button onClick={() => {
            setCount(0)
        }}>Reset</button>
        <button onClick={() => {
            setCount(count - 1)
        }}>Decrement</button>
        </div>
    </div>
  )
}

export default CompA