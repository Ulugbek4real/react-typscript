import "./pieGraph.scss"
import { PieChart, Pie, Cell } from 'recharts';
interface PieGraphProps {
  data:{ name:string, value: number }[]
}

const PieGraph = ({data}:PieGraphProps) => {

      const COLORS = ['#C6C7F8', 'rgba(255, 0, 0, 0.29)', '#95A4FC', '#BAEDBD','rgba(255, 166, 0, 0.29)'];
  return(
    <div className="pie-chart">
  <span className="chart-title">Accounts by location</span>

        <PieChart width={180} height={180}>
      <Pie
        data={data}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <div className="pie-chart-info">
        {data.map((country,index)=>{
        return (<div className="country" key={index.toString()}><div className="color" style={{backgroundColor:`${COLORS[index]}`}}></div>{country.name}<span>{`${country.value/2}%`}</span></div>)
        
        })}
    </div>
    </div>
  );
}

export default PieGraph