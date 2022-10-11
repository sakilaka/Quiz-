import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
  const data = useLoaderData().data;
  return (
    <div>
   
     <BarChart
        height={450}
        width={320}
        className="mx-auto my-12"
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