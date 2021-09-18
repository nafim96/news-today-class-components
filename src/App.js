import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export class App extends Component
{
  render ()
  {
    return (
      <div>
        <Router>
          <div className="mb-3">
            <Navbar />
            <Switch>
              <Route exact path="/home">
                <News key="general" pageSize={ 5 } country="be" category="general" />
              </Route>
              <Route exact path="/business">
                <News key="business" pageSize={ 5 } country="be" category="business" />
              </Route>
              <Route exact path="/entertainment">
                <News key="entertainment" pageSize={ 5 } country="be" category="entertainment" />
              </Route>
              <Route exact path="/general">
                <News key="general" pageSize={ 5 } country="be" category="general" />
              </Route>
              <Route exact path="/health">
                <News key="health" pageSize={ 5 } country="be" category="health" />
              </Route>
              <Route exact path="/science">
                <News key="science" pageSize={ 5 } country="be" category="science" />
              </Route>
              <Route exact path="/sports">
                <News key="sports" pageSize={ 5 } country="be" category="sports" />
              </Route>
              <Route exact path="/technology">
                <News key="technology" pageSize={ 5 } country="be" category="technology" />
              </Route>
              <Route exact path="/">
                <News key="general" pageSize={ 5 } country="be" category="general" />
              </Route>

            </Switch>

          </div>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
