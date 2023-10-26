import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


const COLORS = ['#0088FE', '#f3f3f3'];

const DoughnutBar = ({ score }) => {

    const totalMarks = 15;

    const progress = (score / totalMarks) * 100;
    const remaining = 100 - progress;

    const data = [
        { name: 'progress', value: progress },
        { name: 'remaining', value: remaining }
    ];

    return (
        <ResponsiveContainer width="100%" height={180}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    startAngle={90}
                    endAngle={-270}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DoughnutBar;
