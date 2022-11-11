import "./barGraph.scss"
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
interface BarGraphProps  {
data :{
  name: string;
  "All accounts": number;
  "Korean accounts": number;
}[]
}

const BarGraph = ({data} : BarGraphProps) => {

  const renderBarChart = (
    <BarChart width={250} height={180} data={data}>
      <XAxis dataKey="name"  stroke="#8884d8" />
      <YAxis   />
      <Tooltip itemStyle={{fontSize:"small"}} />
      <Bar dataKey="All accounts" fill="#BAEDBD" barSize={15} />
      <Bar dataKey="Korean accounts" fill="#C6C7F8" barSize={15} />
    </BarChart>
  );
  
  return (<div className='barChart'>
  <span className="chart-title">Accounts by reward types</span>
{renderBarChart}
  </div>
    
  )
}

export default BarGraph