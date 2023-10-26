import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Dot, ReferenceLine } from 'recharts';



const CustomDot = (props) => {

  const { cx, cy, special } = props;

  if (special) {
    return <Dot cx={cx} cy={cy} r={8} fill="#FF5733" strokeWidth={2} />;
  }

  return <Dot cx={cx} cy={cy} r={4} fill="#8884d8" strokeWidth={2} />;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '10px', borderRadius: '5px' }}>
        {`${dataPoint.value}% Percentile`}
        <div style={{ fontSize: '0.8rem' }}>Your Score</div>
      </div>
    );
  }

  return null;
};

const Graph = ({count}) => {

    const data = [
        { percentage: 0, value: 0 },
        { percentage: 20, value: 20 },
        { percentage: 50, value: 50 },
        { percentage: 40, value: 40 },
        { percentage: 35, value: 35 },
        { percentage: count, value: count, special: true },
        { percentage: 80, value: 80},
        { percentage: 90, value: 90},
      ];

  return (
    <ResponsiveContainer width="95%" height='71%' style={{border: '1px solid #EBF0F5', borderRadius: '10px', margin: '1% auto'}}>
      <LineChart data={data}>
        <XAxis dataKey="percentage" />
        <YAxis tick={false} />
        <Tooltip content={<CustomTooltip />} active={true} /> {/* Always active */}
        <ReferenceLine x={count} stroke="#FF5733" strokeDasharray="3 3" width={'50px'} />
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={<CustomDot />} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
