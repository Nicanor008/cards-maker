import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import 'react-bulma-components/dist/react-bulma-components.min.css'
import NavBar from './components/nav'
import { store } from './store'
import HomePage from './components/HomePage'
import Footer from './components/nav/footer'
import CreateCards from './containers/Cards/createCards'
import CardTemplate from './components/templates'
import login from './containers/Auth/login'
import WrappedRoute from './components/common/routes/wrappedRoute'
import NotFound from './components/common/error/404'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/create" component={CreateCards} />
                    <Route exact path="/template" component={CardTemplate} />
                    <Route exact path="/login" component={login} />
                    {/* <WrappedRoute
                        path="/home"
                        component={}
                        requiresAuth
                        useAppFrame
                    /> */}

                    {/* render page not found for non valid pages */}
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}

export default App
