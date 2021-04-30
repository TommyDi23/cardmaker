import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const ref = firebase.firestore().collection("users");

  const getUsers = () => {
    ref.onSnapshot(querySnapshot => {
      const items = [];
      querySnapshot.forEach(doc => {
        items.push({ ...doc.data(), id: doc.id });
      });
      console.log(items);

      setUsers(items);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>users</h1>
      {users.map((user, i) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
