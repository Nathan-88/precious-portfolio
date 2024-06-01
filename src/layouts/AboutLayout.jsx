import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header/Header';


function AboutLayout() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <div className="h-auto min-h-svh flex flex-col relative">
        <Header color='black' backgroundColor='white'  barColor="black"/>
        {/* <Header/> */}
        <main className="flex-1">
            <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
      </div>
  );
}

export default AboutLayout;