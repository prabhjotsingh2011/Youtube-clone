import Header from './components/header/Header';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen'
import { Container } from 'react-bootstrap';
import './_app.scss'
import LoginScreen from './screens/loginScreen/LoginScreen';


import { BrowserRouter as Router } from 'react-router-dom'
import { Switch,Route, Redirect, useHistory } from 'react-router'
import { useSelector } from 'react-redux';
import WatchScreen from './screens/watchScreen/WatchScreen';
import SearchScreen from './screens/searchScreen/SearchScreen';
import SubscriptionScreen from './screens/subscriptionsScreen/SubscriptionScreen'
import ChannelScreen from './screens/channelScreen/ChannelScreen';


const Layout = ({ children }) => {

  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <div className="App">
        <Header handleToggleSidebar={handleToggleSidebar} />

        <div className="app__container">
          <Sidebar
            sidebar={sidebar}
            toggleSidebar={toggleSidebar}
          />

          <Container fluid className="app__main ">
            {children}
          </Container>
        </div>
      </div>
    </>
  )
}

function App() {


  const {accessToken,loading}= useSelector(state=> state.auth)
  const history=useHistory();

  useEffect(()=>{
    if(!loading && !accessToken){
      history.push('/auth')
    }
  },[accessToken,loading,history])

  return (
    <>
      
        <Switch>
          <Route exact path='/'>
            <Layout >
              <HomeScreen />
            </Layout>
          </Route>


          <Route exact path='/auth'>
            <LoginScreen />
          </Route>


          <Route exact path='/search/:query'>
            <Layout >
              <SearchScreen/>
            </Layout>
          </Route>

          <Route exact path='/watch/:id'>
            <Layout >
              <WatchScreen/>
            </Layout>
          </Route>

          
          <Route exact path='/feed/subscriptions'>
            <Layout >
              <SubscriptionScreen/>
            </Layout>
          </Route>


          <Route exact path='/channel/:channelId'>
            <Layout >
              <ChannelScreen/>
            </Layout>
          </Route>


          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>

    </>
  );
}

export default App;
