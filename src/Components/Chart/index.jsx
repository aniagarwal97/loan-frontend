import React, {Component} from 'react'
import {LineChart, Line,XAxis,YAxis} from 'recharts'

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 0},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class Chart extends Component{
	render () {
  	return (
    	<LineChart width={400} height={200} data={data}>
        <XAxis dataKey="name"/>
       <YAxis />
        <Line type='monotone' dataKey='amt' stroke='#8884d8' strokeWidth={2} />
      </LineChart>
    );
  }
}

export default Chart
