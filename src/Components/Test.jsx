import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  const [user, setUser] = useState([]);

  const ref = firebase.firestore().collection("user");

  const getUser = id => {
    ref.get(id).then(item => {
      const items = item.docs.map(doc => doc.data());

      const user = items.filter(item => item.id === id);
      setCard(items);
      setUser(user);
    });
  };

  getUser(id);

  console.log(card, "---", user);

  // useEffect(() => {
  //   getUser(id);
  // }, [card, user]);

  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
      <div
        className="h-64 bg-cover hover:bg-gray"
        style={{
          backgroundImage:
            'url("https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png")'
        }}
      />
      <div className="mx-6 my-4 border-b border-gray-light">
        <div className="font-medium text-base text-gray-darker mb-4">Title</div>
        <p className="font-normal text-gray-dark text-sm mb-2">Name</p>
        <p className="font-normal text-gray-dark text-sm mb-4">Email</p>
      </div>
      <div className="mx-6 my-4 flex">
        <div className="flex-grow">
          <span className="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
            <svg fill="white" width={16} height={16} viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
            </svg>
          </span>
          <span className="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
            <svg fill="white" width={16} height={16} viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
            </svg>
          </span>
        </div>
        <div className="flex-grow text-right">
          <a href="#" className="no-underline">
            <svg
              className="mx-2"
              fill="gray-dark"
              width={28}
              height={28}
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
            </svg>
          </a>
          <a href="#" className="no-underline">
            <svg
              className="mx-2"
              fill="gray-dark"
              width={28}
              height={28}
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
            </svg>
          </a>
          <a href="#" className="no-underline">
            <svg
              className="ml-2"
              fill="gray-dark"
              width={28}
              height={28}
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Test;
