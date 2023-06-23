import React from "react";

const Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5 text-center">
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
