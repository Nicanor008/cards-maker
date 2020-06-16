import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import 'react-bulma-components/dist/react-bulma-components.min.css'
import NavBar from './components/nav'
import { store } from './store'
import Footer from './components/nav/footer'
import CreateCards from './containers/Cards/createCards'
import CardTemplate from './components/templates'
import login from './containers/Auth/login'
import SignupPage from './containers/Auth/signup'
import ForgotPassword from './containers/Auth/forgotPassword'
import ResetPassword from './containers/Auth/resetPassword'
import WrappedRoute from './components/common/routes/wrappedRoute'
import NotFound from './components/common/error/404'
import LandingPage from './components/HomePage/landingPage'
import HomePage from './containers/Cards/home'
import Cards from './containers/Cards/cards'
import VerifyAccount from './containers/Auth/verifyAccount'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/create" component={CreateCards} />
                    <Route exact path="/template" component={CardTemplate} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/signup" component={SignupPage} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/reset-password/:email" component={ResetPassword} />
                    <Route exact path="/verify-account/:email" component={VerifyAccount} />
                    <Route exact path="/events" component={Cards} />
                    <WrappedRoute
                        path="/dashboard"
                        component={HomePage}
                        requiresAuth
                        useAppFrame
                    />
                    
                    {/* render page not found for non valid pages */}
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}

export default App
