import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
  const data = useLoaderData().data;
  return (
    <div>
   
     <BarChart
        height={600}
        width={500}
        className="mx-auto my-8"
        data={data}>
          <Bar dataKey='total' fill='green'></Bar>
          <XAxis dataKey='name' ></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>

      </BarChart>
      
      
    </div>
  );
};

export default Chart;