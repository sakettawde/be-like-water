import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Landing from './screens/Landing'
import About from './screens/About'

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        </RecoilRoot>
    )
}

export default App
