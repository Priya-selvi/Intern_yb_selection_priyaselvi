import React from "react";
import { Link } from "react-router-dom";

export default function First({ data }) {
  return (
    <div className="container">
      <h1>Personal Details</h1>

      <table>
        <thead>
          <tr>
            <th>Detail</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Department</td>
            <td>{data.department}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{data.location}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{data.year}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{data.email}</td>
          </tr>
        </tbody>
      </table>

      <Link to="/edit">
        <button className="save-btn" style={{ marginTop: "20px" }}>
          Edit Details
        </button>
      </Link>
    </div>
  );
}
