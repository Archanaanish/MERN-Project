
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage  from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route} from 'react-router-dom';
import MyNotes from'./screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import CreateNote from './screens/CreateNote/CreateNote'
import SingleNote from './screens/SingleNote/SingleNote';
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { useState } from 'react';

const App = () => {

  const [search, setSearch] = useState("");

 console.log(search);

  return(
 <BrowserRouter>
    <Header setSearch={ setSearch} />
    <main  >
   <Route path='/' component={LandingPage} exact/>
   <Route path='/login' component={LoginScreen} exact/>
   <Route path='/profile' component={ProfileScreen} exact/>
   <Route path='/register' component={RegisterScreen} exact/>
   <Route path='/createnote' component={CreateNote} exact/>
   <Route path='/note/:id' component={SingleNote} exact/>
   <Route path='/mynotes' component={() => <MyNotes search={search}/>} >

   </Route>
    </main>
  
  <Footer/>
  </BrowserRouter>




)}


export default App;
