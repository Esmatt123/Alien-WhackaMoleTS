import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./Components/style/images.css";
import "./Components/style/buttons.css";
import "./App.css";
import LevelOne from "./Components/LevelOne/LevelOne";
import Root from "./Components/root";
import SoundButton from "./Components/soundButton/soundButton";
import startMusic from "../public/music/startbackmusic.mp3";

import LosingPage from "./Components/LosingPage/LosingPage";
import WinPage from "./Components/winPage/winPage";

import TutorialScreen from './Components/tutorialScreen/tutorialScreen';

function App(): React.JSX.Element {
  return (	
    <Router>
      <div className="container sky-background">
        <Routes>
          <Route path="/levelone" element={<LevelOne />} />
          <Route path="/losingPage" element={<LosingPage score={0} />} />
          <Route path="/winPage" element={<WinPage />} />
          <Route path="/" element={<Root />} />
          <Route path='/tutorial' element={<TutorialScreen />} />
        </Routes>
        <SoundButton startMusic={startMusic}></SoundButton>
      </div>
    </Router>
  )
}

export default App
