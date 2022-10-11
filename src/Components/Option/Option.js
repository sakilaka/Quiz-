import React from 'react';
import Swal from 'sweetalert2'


const Option = ({ opt, id, correct }) => {

    const findCorrect = (clickedOption) => {
        if (clickedOption === correct) {
            Swal.fire(
                'Good job!',
                'Right Answer',
                'success'
              )
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'wrong answer!'
              })
        }
    }

    return (
        <div>
            <div className='bg-slate-200 my-5 lg:w-7/12 mx-auto'>
                <div className='p-3 flex bg-slate-600 m-3 text-white'>
                    <input onClick={(e) => findCorrect(e.target.value)} type="radio" name={id} value={opt} id="click" />
                    <p className='ml-3'>{opt}</p>
                </div>
        
            </div>

        </div>
    );
};

export default Option;