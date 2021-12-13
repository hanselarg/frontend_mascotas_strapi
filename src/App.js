import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// page & layout imports
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import Category from './pages/Category'
import SiteHeader from "./components/SiteHeader"
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'


function App() {
  const [mascotas, setMascotas] = useState([]);
  //ver errMsg en renderizado abajo
  const [errMsg, setErrorMsg] = useState('');
  //se ejecuta por unica vez cuando carga el componente
  useEffect(() => {
   

  }, []);
  console.log('mascotas de app.js', mascotas);

  return (
    <>

      <Navbar />
      <Container>
        <Router>
          <div className="App">
            <SiteHeader />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/details">
                <ReviewDetails />
              </Route>
              <Route path="/category">
                <Category mascotas={mascotas} errMsg={errMsg} />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>

    </>
  );
}

export default App
