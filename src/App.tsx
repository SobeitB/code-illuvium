import {Suspense, lazy} from 'react';
import AOS from 'aos';
import { useEffect} from 'react';

import {Hedaer} from './components/header/header'
import {FooterComp} from './components/footer/footer'

const MacrketTocken = lazy(() => import ('./pages/main/main'));

function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])
  return (
    <>
      <Hedaer />
      <Suspense fallback={'1'}> 
        <MacrketTocken />
      </Suspense>
      <FooterComp />
    </>
  );
}

export default App;