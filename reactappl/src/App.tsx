import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {MainPage} from "./pages/Main";


const App: React.FC = () => {

  return (
      <>
          <Navbar />
          <div className="container">
              <MainPage />
          </div>
      </>
  )
}

export default App;
