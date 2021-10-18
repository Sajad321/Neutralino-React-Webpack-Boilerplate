import React, { useState } from "react";
import Loading from "../common/Loading";
// const apiUrl = process.env.API_URL;

const HomePage = () => {

  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      Welcome
      <button
        id="logOutButton"
        className="nav-link btn btn-outline mt-5 mr-auto ml-auto"
      >
        logout
      </button>
    </div>
  );

};
export default HomePage;
