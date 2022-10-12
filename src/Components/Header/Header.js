import React from 'react';
// import img from '/public/img1.png';
import './header.css';

const Header = () => {
    return (
       <div className='lg:grid lg:grid-cols-2 style h-full p-4 m-5'>

       <div>
       <img src='https://i.postimg.cc/y6DjJQ13/img4.jpg' alt="" className='rounded-md w-full h-80 p-3' />
       </div>
        <div className='p-3 m-2 h-80 text'>
            <h1 className='text-4xl text-white font-bold text-center my-5 p-10 bg-indigo-600 '>Here is the most important quiz
            </h1>
           
            <p className='text-xl bg-slate-200 p-5 my-3 lg:w-10/12 mx-auto'>All of the students are attend the quiz exam and get 100000 taka.</p>

        </div>
       </div>
    );
};

export default Header;
           