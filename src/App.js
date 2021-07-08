import {useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import Layout from './layout/layout.component'
import ScheduleClasses from './components/schedule-classes/schedule-classes.component'
import Cart from './components/cart/cart.component'
import {saveClasses} from './redux/classes/classes.actions'
import * as storage from './services/storage'
import {CLASSES} from './config'
import './App.css';

function App({saveClasses}) {

  useEffect(() => {
    const classes = storage.getItem(CLASSES)
    saveClasses(classes)
}, [saveClasses])

  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={ScheduleClasses} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </Layout>
  );
}

const mapDispatchToProps = dispatch => ({
  saveClasses: data => dispatch(saveClasses(data))
})

export default connect(null, mapDispatchToProps)(App);
