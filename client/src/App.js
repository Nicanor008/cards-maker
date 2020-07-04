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
import UpdateCardPage from './containers/Cards/home/updateCard'
import Cards from './containers/Cards/cards'
import AllArchivedCards from './containers/Cards/archived'
import MyArchivedCards from './containers/Cards/home/myArchivedEvents'
import VerifyAccount from './containers/Auth/verifyAccount'
import TermsAndConditions from './components/policies/termsAndConditions'

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
                    <Route exact path="/events/archived" component={AllArchivedCards} />
                    <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
                    <WrappedRoute
                        path="/dashboard"
                        component={HomePage}
                        requiresAuth
                        useAppFrame
                    />
                    <WrappedRoute
                        path="/update-card/:id"
                        component={UpdateCardPage}
                        requiresAuth
                        useAppFrame
                    />
                    <WrappedRoute
                        path="/my-events/archive"
                        component={MyArchivedCards}
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
