import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Articles from "./components/categoryPages/Articles"
import Videos from "./components/categoryPages/Videos"
import Movies from "./components/categoryPages/Movies"
import Shop from "./components/categoryPages/Shop"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/videos' component={Videos} />
          <Route exact path='/movies' component={Movies} />
          <Route exact path='/shop' component={Shop} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
