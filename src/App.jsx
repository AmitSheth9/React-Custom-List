import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './views/MovieList'
import MovieDetail from './views/MovieDetail'
export default function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path = '/movies/:id'>
            <MovieDetail/>
        </Route>
        <Route path ='/'>
            <MovieList/>
        </Route>
          
        </Switch>
      </Router>
    </>
  )
}

