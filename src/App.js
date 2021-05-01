import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import DetailsAdder from "./Components/DetailsAdder";

function App() {
  const [users, setUsers] = useState([]);

  const ref = firebase.firestore().collection("users");

  const getUsers = () => {
    ref.onSnapshot(querySnapshot => {
      const items = [];
      querySnapshot.forEach(doc => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setUsers(items);
    });
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <>
      <NavBar />
      <Header />
      <DetailsAdder />
    </>
  );
}

export default App;
