import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const[data,setData]=useState({})// { kui ki jb koee api nhi aa rhi hai tb ka liya 
        // ki crash naa ho}
    useEffect(()=>{
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())// convert from sting to JSON
        .then((res)=>setData(res[currency]))// yaha res convert into json kahi hold krna hai uss data ko age regular
        // variable may hold krunga to ui may update nhi hoga  .then is js 
        // we can acces object by [] and in api call key name is value pass as currency
    
    },[currency])// yaha api call hmko ek aur function ki need nhi hai eess liya ya use hua hai 
    // kb kb useeffect ko chane krna chahiya 
    return data 
}
export default useCurrencyInfo;// yaha method he return ho gaya


// 1. **Custom Hook** banaya for fetching currency data from API.
// 2. `useState({})` – empty object diya initially, taaki jab tak data naa aaye tab tak app crash naa ho.
// 3. `useEffect` chalaya – jab component load ho ya `currency` value change ho.
// 4. `fetch(...)` – API call kiya using currency name.
// 5. `.then(...).then(...)` – API response ko JSON mein convert karke `setData()` se state mein store kiya.
// 6. `setData()` – state update karta hai, React UI ko automatically update karta hai.
// 7. `[currency]` – dependency diya, taaki currency change pe effect phir se chale.
// 8. `return data` – API se mila hua exchange rate return kiya.

// > 🔁 So jab bhi currency change hogi, API call hoga, data fetch hoga, and aapko updated rate mil jaayega.

// Let me know if you want **diagram**, **code usage**, or **real example**!
