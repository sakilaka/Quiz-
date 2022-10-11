import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from '../Option/Option';
import Swal from 'sweetalert2'

const Question = ({ ques }) => {

    const { correctAnswer, question, id } = ques;
    const options = ques.options;

    const correctAnswerShow = () => {
        Swal.fire(
            'Correct answer',
             correctAnswer
            
          )
    }

    return (

        <div className='bg-amber-300 w-9/12 mx-auto p-5'>
            <h1 className='font-bold text-2xl'>{question}</h1>
            <div>
                {
                    options.map(option => <Option
                        opt={option}
                        id={id}
                        correct={correctAnswer}
                    ></Option>)
                }
            </div>
            <div>
                <FontAwesomeIcon onClick={correctAnswerShow} className='text-xl' icon={faEye}></FontAwesomeIcon>
            </div>

        </div>

    );
};

export default Question;