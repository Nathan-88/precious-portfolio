import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function WhiteCollarLayout() {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
      <div className="h-auto min-h-svh flex flex-col relative">  
        {/* <Header color='black' backgroundColor='white'  barColor="black"/> */}
        <Header backgroundColor= 'rgb(237 233 254)' color="black" barColor="black" />
        <main className="flex-1">
            <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
      </div>
  );
}

export default WhiteCollarLayout;