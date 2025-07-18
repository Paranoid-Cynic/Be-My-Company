import React from "react";
import { Link } from "react-router-dom";
export default function HomePag() {
  return (
    <div>
      <h1>Welcome to Be My Company ❤️</h1>
      <p>Book people. have fun. spend time</p>
      <p>Explore People nearby</p>
      <p>start hanging out</p>
      <Link to="/ProfileList">
        <button>Explore People Nearby</button>
      </Link>
    </div>
  );
}
