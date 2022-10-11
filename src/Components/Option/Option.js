import React from 'react';

const Option = ({ opt }) => {

    return (
        <div>
            <div className='bg-slate-200 my-5 w-7/12 mx-auto'>
                <div className='p-3 flex bg-slate-600 m-3 text-white'>
                    <input type="radio" name="" value={opt} id="" />
                    <p className='ml-3'>{opt}</p>
                </div>


            </div>

        </div>
    );
};

export default Option;