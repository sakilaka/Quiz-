import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Chart from './Components/Chart/Chart';
import Header from './Components/Header/Header';
import Quiz from './Components/Quiz/Quiz';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:
            <div>
              <Header></Header>
              <Topics></Topics>
            </div>
        },
        {
          path: '/topics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:
            <div>
              <Header></Header>
              <Topics></Topics>
            </div>
        },
        {
          path: '/chart',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Chart></Chart>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path:'/topic/:topicId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
