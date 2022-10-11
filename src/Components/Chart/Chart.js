import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = useLoaderData().data;
    console.log(data);

            return (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={200}
                  height={60}
                  data={data}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                >
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                  <Area type="monotone" dataKey="" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            );
};

export default Chart;