import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const load = useLoaderData();
    const data = load.data;
    const questions = data.questions;
    console.log(questions);
    return (
        <div>
           <h2 className='text-3xl font-bold text-blue-500 my-4'>Quiz For {data.name}</h2>
           <div>
            {
                questions.map(question => <Question 
                    key={question.id}
                    ques={question}
                ></Question>)
            }
           </div>
        </div>
    );
};

export default Quiz;