import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import ProjectFooter from '../components/Footer/ProjectFooters';
import whitecol from "../assets/White Collar.png"
import uns from "../assets/unsplash_zNRITe8NPqY (1).png"


function ProcurementLayout() {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
      <div className="h-auto min-h-svh flex flex-col relative">  
        {/* <Header color='black' backgroundColor='white'  barColor="black"/> */}
        <Header backgroundColor= '#000' />
        <main className="flex-1">
            <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
        <ProjectFooter link="/projects/WhiteCollar" text="Next project" img1={whitecol} img2={uns}/>
      </div>
  );
}

export default ProcurementLayout;