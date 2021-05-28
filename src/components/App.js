import React from 'react'
import { Container } from 'react-bootstrap'
import Signup from './Signup'
import AuthProvider from '../contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import PrivateRoute from './PrivateRoute'
import Weather from './Weather'

const App = () => {
    
  return (

    // <Container className="" style={{minHeight:"100vh"}}>
    //   <div className="w-100" style={{maxWidth:"400px"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} /> 
              <PrivateRoute path="/weather" component={Weather} />                             
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />                           
            </Switch>
          </AuthProvider>
        </Router>
    //   </div>
    // </Container>


  );
}

export default App;
