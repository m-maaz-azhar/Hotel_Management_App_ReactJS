import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login'
import SignUp from '../containers/SignUp'
import Home from '../containers/Home'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default AppRouter
