import React, { Fragment } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../elements/Header/Header"
import Home from "../Home/Home"
import Movie from "../Movie/Movie"
import ActorDetail from "../Actor/ActorDetail"
import NotFound from "../elements/NotFound/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:movieId' component={Movie} />
          <Route exact path='/actors/:actorId' component={ActorDetail} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
