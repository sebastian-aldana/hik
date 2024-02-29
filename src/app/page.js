"use client";

import userStore from "@/store/users";
import axios from "axios";
import { useEffect } from "react";

const getUserIds = async () => {};

const Home = () => {
  const { usersToSayHello, addUserToSayHello } = userStore();

  useEffect(() => {
    addUserToSayHello();
  }, []);

  return (
    <div>
      {usersToSayHello.map((user) => {
        return (
          <div key={user}>
            <h1>Hello {user}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
