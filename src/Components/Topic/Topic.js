import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const {id, name, logo, total } = topic;
    return (
        <div>
            <div className="card w-80 sm:w-100 bg-base-100 shadow-xl p-4 mx-auto my-4 border border-black rounded-md">
                <figure><img className='bg-black' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        {name}
                    </h2>
                   <p>Total : {total}</p>
                  <Link to={`/topic/${id}`}><button className='bg-blue-700 text-white px-4 py-2 rounded-lg'>Go for quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;