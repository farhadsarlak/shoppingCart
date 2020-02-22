import React from 'react';
import './App.css';
import DesktopContainer from "./components/desktop/DesktopContainer";
import MobileContainer from "./components/mobile/MobileContainer";

function App() {
  return (
    <div>
      <DesktopContainer/>
      <MobileContainer/>
    </div>
  );
}

export default App;
