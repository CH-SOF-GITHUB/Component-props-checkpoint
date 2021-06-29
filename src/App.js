import './App.css';
import React from 'react';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Informations from "./Informations";
import Footer from './Footer';
import Nav from './Nav';


function App() {

  const profileComponent = Informations.map(item => <Profile key={item.id} item={item}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCokKv4Ddhe0-e9Mg1Oo8sD4aqN9e5rtwKYA&usqp=CAU" alt="" />
  </Profile>)

  return (
    <div className="Container-lg">
      <Header />
      <div class="col-6">
        <div class="row">
          <div class="col-12">{profileComponent}</div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-4"><Nav /></div>
          <div class="col-4"><Nav /></div>
          <div class="col-4"><Nav /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
