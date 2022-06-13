import { lazy } from 'react';
import { Suspense } from 'react';
import {useRoutes,Navigate} from 'react-router-dom';
import LoadingScreen from '../component/LoadingScreen';
import MainLayout from '../layout/MainLayout';


const Loadable = (Component) => (props) => {
  
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };
  
export default function Router(){
    return useRoutes([
        {
            path:'/craft',
            element:<MainLayout></MainLayout>,
            children:[
                {element:<Navigate to = '/craft/create' replace></Navigate>,index:true},
                {element:<CraftCreate></CraftCreate>,path:'create'},
            ]
            
            // element:
        },
        {
            path:'/',
            element:<MainLayout></MainLayout>
        }
    ])
}

const CraftCreate = Loadable(lazy(()=>import('../pages/CraftCreate')));