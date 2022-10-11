import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
     const load = useLoaderData();
     const topics = load.data;
    
    return (
        <div className='lg:grid lg:grid-cols-2'>
            {
                topics.map(topic => <Topic 
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;