import React from "react";

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="about-card" style={{ textAlign: "center" }}>

        {/* Profile Image */}
        <img
          src="src/assets/react.svg"
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginBottom: "20px",
            objectFit: "cover",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}
        />

        <p>
          Hello! I'm <strong>Priya Selvi</strong>, a passionate IT student from
          Tirunelveli. I enjoy learning new technologies, building applications,
          and improving my coding skills.
        </p>

        <p>
          My interests include web development, Java programming, Spring Boot,
          and creating useful digital solutions. I love problem-solving and
          exploring new tech.
        </p>

        <p>
          When I'm not studying, I enjoy reading, experimenting with projects,
          and learning new creative ideas.
        </p>
      </div>
    </div>
  );
}
