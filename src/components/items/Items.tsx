import "./items.scss"
import {Accounts as Props} from "../../App"
interface ItemsProps  {
  items:Props["items"],
itemOwner:string
}

const Items = ({items,itemOwner}:ItemsProps) => {
  const demoItems = [
{itemId: 5, name: 'stick', defence: 6}, 
{itemId: 8, name: 'wand', magic: 146}, 
{itemId: 8, name: 'wand', magic: 146}, 
{itemId: 5, name: 'stick', defence: 6}, 
{itemId: 9, name: 'knife', attack: 9}, 
{itemId: 4, name: 'shoes', defence: 2}, 
{itemId: 5, name: 'stick', defence: 6}
  ]
  return (
    <div className="items">
      <span className="items-title">Items</span>
      <span className="items-title2">Owner's ID: {itemOwner || 761749}</span>
      {(items.length? items : demoItems).map((item,index)=>
<div key={index} className="single-item">
<div className="single-item-info">
<span className="item-name">{item.name[0].toUpperCase()+item.name.slice(1)}</span>
<span className="item-power">{item.defence ? "defence":item.attack ? "attack" : "magic"}</span>
</div>
<div className="circle">{item.defence || item.attack || item.magic }</div>
</div>)}
    </div>
  )
}

export default Items