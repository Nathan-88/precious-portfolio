import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';


function BixsubLayout() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <div className="h-auto min-h-svh flex flex-col relative">

        {/* <Header/> */}
        <main className="flex-1">
            <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
      </div>
  );
}

export default BixsubLayout;