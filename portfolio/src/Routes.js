// Load React
import React from 'react'


// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
// Import your Todos and Completed components here...

import Work from './Work'
import WorkSample from './WorkSample'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Work} />
                <Route path="/worksample" component={WorkSample} />
            </Router>
        </Provider>
    }
}

export default Routes