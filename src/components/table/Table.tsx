import "./table.scss"
import { DataGrid } from '@mui/x-data-grid';
import {Accounts as Props} from "../../App"

interface TableProps{
    players:Props[]
  }
const Table = ({players}:TableProps) => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {field: 'items', headerName: 'Items', width: 115},
    { field: 'country', headerName: 'Country', sortable: false, width: 130 },
    { field: 'created_at', headerName: 'Created at', width: 160 },
    {field: 'lv', headerName: 'Level', width: 90},
    {field: 'block_type', headerName: 'Blocked?', sortable: false, width: 110},
    {field: 'pvp_rank', headerName: 'PvP rank', width: 110},
    {field: 'last_stage', headerName: 'Last stage', sortable: false, width: 110},
    {field: 'reward_type', headerName: 'Reward type', sortable: false, width: 130},
];
  
  const rows = players.map((player)=>{
    return { id: player.uid,
             created_at: player.created_at,
             country: player.country ==="kr"?"South Korea 🇰🇷":player.country ==="cn"? "China 🇨🇳":player.country ==="vn"?"Vietnam 🇻🇳":player.country ==="us"?"USA 🇺🇸" :"Japan 🇯🇵",
             lv: player.lv, 
             block_type:player.block_type? "YES" :"NO",
             pvp_rank:player.pvp_rank, 
             reward_type: player.reward_type, 
             last_stage:player.last_stage,
             items:`See Items (${player.items.length})...`
            }
  })


  return (
    <div className="table">
    <DataGrid
    className="datagrid"
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      rowHeight={30}
    />
  </div>
  )
}

export default Table