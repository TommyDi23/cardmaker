import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//import Test from "./Test";
import firebase from "../firebase";
import { Redirect } from "react-router-dom";

const DetailsAdder = () => {
  const [toTest, setToTest] = useState(false);
  // const [card, setCard] = useState([]);
  const [userDetails, setUserDetails] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    telephone: "",
    title: "",
    company: ""
  });

  if (toTest === true) {
    return <Redirect to={`/${userDetails.id}`} />;
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addDetails(userDetails);
    setToTest(true);
  };
  const ref = firebase.firestore().collection("user");

  // const getUsersByID = () => {
  //   ref.onSnapshot(querySnapshot => {
  //     const items = [];
  //     querySnapshot.forEach(doc => {
  //       items.push({ ...doc.data(), id: doc.id });
  //     });
  //     setUsers(items);
  //   });
  // };

  // const getUser = () => {
  //   ref.get().then(item => {
  //     const items = item.docs.map(doc => {
  //       return { ...doc.data(), id: doc.id };
  //     });
  //     console.log(items[0].id, "<--- this is what you get");
  //     setUserDetails(items);
  //   });
  // };

  const addDetails = () => {
    ref
      .doc(userDetails.id)
      .set(userDetails)
      .then(() => {
        setUserDetails({
          ...userDetails,
          name: "",
          email: "",
          telephone: "",
          title: "",
          company: ""
        });
      });
  };

  // useEffect(() => {
  //  getUser();
  // }, []);

  return (
    <div className="bg-green-100 antialiased flex font-sans text-gray-900">
      <form
        className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-4xl font-bold">Enter Details</h1>
          <p className="text-gray-600">
            Please provide details you wish to to be placed on your card
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label for="firstname">Name</label>
            <input
              className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label for="email">Email</label>
            <input
              className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text"
              name="email"
              id="email"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label for="title">Title</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text"
            name="title"
            id="title"
            value={userDetails.title}
            onChange={handleChange}
          />
          <p className="text-sm text-gray-600">e.g. Software Developer</p>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label for="Telephone">Telephone</label>
            <input
              className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text"
              name="telephone"
              id="telephone"
              value={userDetails.telephone}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label for="Email">Company</label>
            <input
              className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text"
              name="company"
              id="company"
              value={userDetails.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label for="companyLogo">Company Logo</label>
          <div className="flex w-1/4">
            <div className="rounded-l flex text-white items-center px-4 bg-gray-400">
              <button>upload</button>
            </div>
          </div>
        </div>
        <div>
          <button className="border" type="submit">
            Create card
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetailsAdder;
