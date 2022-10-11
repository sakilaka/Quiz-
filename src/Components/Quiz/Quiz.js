import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const load = useLoaderData();
    const data = load.data;
    const question = data.questions;
    console.log(question);
    return (
        <div>
           <h2 className='text-3xl font-bold text-blue-500 my-4'>Quiz For {data.name}</h2>
           <div>
                
           </div>
        </div>
    );
};

export default Quiz;