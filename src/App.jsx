import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './views/MovieList'
export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path ='/movies'>
            <MovieList/>
          </Route>
          <Route path = '/movies/:id'>
            <MovieDetail/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

