import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import ProjectFooter from '../components/Footer/ProjectFooters';
import bix from "../assets/BI X.png"
import uns from "../assets/Bixfooter.png"

function WhiteCollarLayout() {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
      <div className="h-auto min-h-svh flex flex-col relative">  
        {/* <Header color='black' backgroundColor='white'  barColor="black"/> */}
        <Header backgroundColor= '#F1F1F1' color="black" barColor="black" />
        <main className="flex-1">
            <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
        <ProjectFooter link="/projects/bix" text="Go Back" img1={bix} img2={uns}/>
      </div>
  );
}

export default WhiteCollarLayout;