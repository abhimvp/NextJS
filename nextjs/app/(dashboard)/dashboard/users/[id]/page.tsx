import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  // destructure the id from params object
  const { id } = params;
  return (
    <div>
      <h1>User's home profile page</h1>
      <h2>User Profile ID: {id}</h2>
    </div>
  );
};

export default Page;
