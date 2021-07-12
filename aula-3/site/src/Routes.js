import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home';
import Contacts from './pages/contacts'
import NotFound from './pages/notfound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/contato" exact={true} component={Contacts} />
            <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}