import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes} from "react-router";
import App from './App.jsx'
import './index.css'
import NavBar from "./features/NavBar/Components/NavBar.jsx";
import Home from "./features/Home/Components/Home.jsx";
import {AppProvider} from "./features/context/AppContext.jsx";
import Game from "./features/Game/Components/Game.jsx";
import GameOver from "./features/GameOver/Components/GameOver.jsx";
import About from "./features/About/About.jsx";
import GameWin from "./features/GameWin/GameWin.jsx";
import Error404 from "./features/Error404/Error404.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <AppProvider>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/game" element={<Game />} />
                  <Route path='/game-over' element={<GameOver />} />
                  <Route path='/game-win' element={<GameWin />} />
                  <Route path='/about' element={<About />} />
                  <Route path='*' element={<Error404 />} />
              </Routes>
          </AppProvider>
      </BrowserRouter>
  </StrictMode>,
)
