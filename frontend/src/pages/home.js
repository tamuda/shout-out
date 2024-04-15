import React from "react";
import Shoutout from "../components/shoutout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "./UserContext";

const Home = () => {
  const [shoutouts, setShoutouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { user, updateUser, isAdmin } = useUserContext();
  const [showModal, setShowModal] = useState(false);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/shoutoutsapp/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const DeleteShoutOut = (soid) => {
    axios
      .delete(`http://localhost:5050/api/v1/shoutoutsapp/shoutouts/${soid}`)
      .then(() => {
        setShoutouts((prevShoutouts) =>
          prevShoutouts.filter((shoutout) => shoutout.soid !== soid)
        );
      })
      .catch((error) => {
        console.error("Error deleting shoutout:", error);
      });
  };

  const getUser = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/shoutoutsapp/user",
        {
          id: id,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
    }
  };

  useEffect(() => {
    const apiUrl = "http://localhost:5050/api/v1/shoutoutsapp/shoutouts";

    axios
      .get(apiUrl)
      .then(async (response) => {
        // Map through the array of shoutouts and fetch the user for each shoutout
        const fetchUsers = response.data.map((shoutout) => {
          return getUser(shoutout.userid).then((userData) => {
            return { ...shoutout, user: userData };
          });
        });

        Promise.all(fetchUsers).then((completedShoutouts) => {
          setShoutouts(completedShoutouts); // Now all shoutouts have user data included
          setIsLoading(false);
        });
      })
      .catch((error) => {
        console.error("Error fetching shoutouts:", error);
        setError(error);
        setIsLoading(false);
      });
    getUsers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading shoutouts: {error.message}</p>;
  }

  return (
    <motion.div
      className="flex mt-16 w-full min-h-screen lg:rounded-t-[10rem] md:rounded-t-[5rem] rounded-t-3xl bg-slate-50"
      layout
      layoutId={Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}
    >
      <div
        className="absolute px-4 py-2 bg-pink-100 hover:bg-pink-300 cursor-pointer text-pink-800 rounded-xl  top-10 right-10 "
        onClick={() => setShowModal(true)}
      >
        Select user
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg text-black">
            <h2 className="text-2xl font-bold pb-4">SELECT USER</h2>
            <ul className="flex flex-col gap-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="cursor-pointer hover:bg-blue-100 px-2"
                  onClick={() => {
                    updateUser({
                      name: user.name,
                      usertype: user.usertype,
                      userId: user.userid,
                    });

                    setShowModal(false);
                    console.log(user);
                  }}
                >
                  {user.name} ({user.usertype})
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 w-full items-center md:p-16 px-4 py-16">
        {shoutouts.map((shoutout) => {
          const userName =
            shoutout.user && shoutout.user.length > 0
              ? shoutout.user[0].name
              : "Default Name";
          return (
            <Shoutout
              key={shoutout.soid}
              name={userName}
              soid={shoutout.soid}
              title={shoutout.title}
              text={shoutout.message}
              deleteShout={() => DeleteShoutOut(shoutout.soid)}
              isAdmin={isAdmin}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Home;
