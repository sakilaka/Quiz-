import React from 'react';
import Option from '../Option/Option';

const Question = ({ques}) => {

    const {correctAnswer , question} = ques;
    const options = ques.options;
    console.log(options);

    return (

        <div className='bg-amber-300 w-9/12 mx-auto p-5'>
            <h1 className='font-bold text-2xl'>{question}</h1>
            {
                options.map(option => <Option opt={option}></Option>)
            }
        </div>

    );
};

export default Question;