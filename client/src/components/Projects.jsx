import React from "react";
import Tilt from "react-parallax-tilt";
import { useQuery } from "@tanstack/react-query";

export const Projects = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/projects");
      const data = await res.json();

      return data.projects;
    },
  });

  if (error) {
    return (
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
        }}
      >
        Some error occured in loading projects
      </h1>
    );
  }

  if (isLoading) {
    return (
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
        }}
      >
        Loading projects ...
      </h1>
    );
  }
  return (
    <>
      <h1 className="sectionHeading">My Projects</h1>
      <section className="projects" id="projects">
        <div className="projectList">
          {data.map((elem, i) => {
            return (
              <Tilt
                key={i}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
              >
                <div className="projectCard">
                  <img src={elem.thumbnail} />
                  <div className="projectDetails">
                    <div className="content">
                      <h1>{elem.title}</h1>
                      <a
                        href={elem.previewUrl}
                        target="_blank"
                        className="button"
                      >
                        Preview
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            );
          })}
        </div>
      </section>
    </>
  );
};
