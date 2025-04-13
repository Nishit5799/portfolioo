import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center">
      <div className="loading-animation">
        {/* Your animation here, e.g., a spinning circle or custom animation */}
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
