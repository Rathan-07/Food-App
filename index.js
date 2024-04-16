 import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from './components/About';
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Error from './components/Error';
import Contact from './components/contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';


// import Instamart from './components/Instamart';

//chunking
//code splitting
//Dynamic Bundling
//lazy loading 
// on Demand Loading
//Dynamic import

const About = lazy(()=>import("./components/About"))

const Instamart = lazy(()=> import("./components/Instamart")); 
//upon On Demand Loading-> upon render ->suspend loading
const AppLayout = () =>{
  return (
  <>
   <Header/>
   <Outlet/>
   <Footer/>
  </>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    errorElement: <Error />, 
    children: [
     
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // parentPath/{path} => localhost:1234//about
        element:(
          <Suspense>
            <About />
          </Suspense>

        ),
        children:[
          {
            path:"profile", // parentPath/{path}=>localhost:1244/about/profile
            element:<Profile/>,
          }
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/instamart",
        element:(
    
          <Suspense fallback = {<Shimmer/>}>
            <Instamart/>
          </Suspense>
        )
      }
    ],
  },
]);

    

 


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)

