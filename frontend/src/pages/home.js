import React from "react";
import Shoutout from "../components/shoutout";

const Home = () => {
  const shoutouts = [
    {
      name: "John Doe",
      title: "First Shoutout",
      text: "This is the first shoutout",
    },
    {
      name: "Jane Doe",
      title: "Second Shoutout",
      text: "This is the second shoutout",
    },
    {
      name: "John Smith",
      title: "Third Shoutout",
      text: "This is the third shoutout",
    },
  ];

  const DeleteShoutOut = (name) => {
    console.log(`Deleting shoutout from ${name}`);
  };

  return (
    <div className="flex mt-16 w-full min-h-screen lg:rounded-t-[10rem] md:rounded-t-[5rem] rounded-t-3xl bg-slate-50">
      <div className="flex flex-col gap-4 w-full items-center md:p-16 px-4 py-16">
        {shoutouts.map((shoutout) => (
          <Shoutout
            name={shoutout.name}
            title={shoutout.title}
            text={shoutout.text}
            deleteShout={() => DeleteShoutOut(shoutout.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
