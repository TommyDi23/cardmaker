//import React, { useState, useEffect } from "react";
//import firebase from "./firebase";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import DetailsAdder from "./Components/DetailsAdder";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./Components/Test";

function App() {
 // const [user, setUsers] = useState([]);

 // const ref = firebase.firestore().collection("user");

  // const getUsers = () => {
  //   ref.onSnapshot(querySnapshot => {
  //     const items = [];
  //     querySnapshot.forEach(doc => {
  //       items.push({ ...doc.data(), id: doc.id });
  //     });
  //     setUsers(items);
  //   });
  // };

  // useEffect(() => {
  //   getUsers();
  // });

  return (
    <Router>
      <>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Header />
              <DetailsAdder />
            </Route>
            <Route path="/:id">
              <Test />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
