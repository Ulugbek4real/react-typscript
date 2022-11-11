import Table  from "./components/table/Table";
import Data from "./data/[프론트엔드] dummy_data_for_test.json";
import BarGraph from "./components/bar/BarGraph";
import Items from "./components/items/Items";
import "./app.scss"
import PieGraph from "./components/pie/PieGraph"
import { useEffect, useState } from "react";

// CREATING AND EXPORTING THE INTERFACE TO USE IT LATER ON OTHER COMPONENTS
 export interface Accounts  {
  uid: string;
  country: string;
  created_at: string;
  lv: number;
  items:{
      itemId: number;
      name: string;
      magic?: number;
      attack?: number;
      defence?: number;
  } [];
  block_type: boolean;
  pvp_rank: number;
  reward_type: string;
  last_stage: string;
}
const players: Accounts[] = Data.data.result
function App() {



  // CREATING A DATA PROPS TO ITEMS COMPONENT
 const [items , setItems] = useState<Accounts["items"]>([])
 const [itemOwner, setItemOwner ] = useState<string>("")
 function handleClick(e:any){
  if( e.composedPath()[0].innerHTML.split(" ")[0] === "See"){
    setItemOwner(e.composedPath()[2].attributes[0].nodeValue)
        }
}
  useEffect(()=>{
    document.addEventListener("click", (e)=>handleClick(e))
     return ()=> document.removeEventListener("click",(e)=> handleClick(e))
  },[itemOwner])
  
  useEffect(()=>{
    for(const player of players){
      if(player.uid ===itemOwner){
        setItems([])
        setItems((prev)=>[...prev,...player.items])  
      }
    }
  },[itemOwner])
  


  // CREATING A DATA PROPS TO BARGRAPH COMPONENT
const countRewards = () =>{
let normal = 0
let vip = 0
let vvip = 0
let k_normal = 0
let k_vip = 0
let k_vvip = 0
  for (const player of players){
    if(player.reward_type === "NORMAL"){
      normal++
      if(player.country === "kr"){
        k_normal++
      }
    }else if(player.reward_type === "VIP"){
      vip++
      if(player.country === "kr"){
        k_vip++
     }
    } else{
      vvip++
      if(player.country === "kr"){
        k_vvip++
     }
    }
   }
return   [
  {
    "name":"NORMAL",
    "All accounts":normal,
    "Korean accounts":k_normal
  },
  {
    "name":"VIP",
    "All accounts":vip,
    "Korean accounts":k_vip
  },
  {
    "name":"VVIP",
    "All accounts":vvip,
    "Korean accounts":k_vvip
  }
]
}



  // CREATING A DATA PROPS TO PIEGRAPH COMPONENT
  const piaChart_data =() => {
    const arr = []
    let kr = 0
    let jp = 0;
    let us = 0;
    let vn = 0;
    let cn = 0;
    for(const player of players){

      if( player.country === "kr"){
   kr++
      }else if( player.country === "vn"){
   vn++
      }else if(player.country === "cn"){
       cn++
      }else if(player.country === "us"){
       us++
      }else if(player.country === "jp"){
       jp++
      }
     }
     arr.push({name:"South Korea",value:kr})
     arr.push({name:"USA",value:us})
     arr.push({name:"China",value:cn})
     arr.push({name:"Vietnam",value:vn})
     arr.push({name:"Japan",value:jp})

    return arr
  }
  
  return (
    <div className="app">
    <div className="app-center">
    <div className="items-list">
    <Items items ={items} itemOwner={itemOwner}/>
    </div>
    <div className="data-containers">
      <div className="charts">
      <BarGraph data={countRewards()}/>
   <PieGraph data={piaChart_data()} />
      </div>
      <Table players={players} />
    </div>
    </div>
   
    </div>
  );
}

export default App;
