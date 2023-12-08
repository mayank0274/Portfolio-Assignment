import Technologies from "./Technologies";

const About = () => {
  const skills = [
    "Frontend Development",
    "Backend Development",
    "Data Scrapping from static websites",
  ];
  return (
    <section className="about" id="about">
      <div className="generalinfo">
        <div className="intro">
          <h1>About me</h1>
          <p>
            Hello I'm Luck Sharma a student and web developer , focusing on
            backend development. I can help you in creating efficient websites.
          </p>
        </div>

        <div className="skills">
          <h1>What can I do ?</h1>
          <ul>
            {skills.map((elem) => {
              return (
                <li className="listitem" key={elem}>
                  {elem}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="experience">
        <table>
          <tr>
            <td className="highlight">Education</td>
            <td>
              <h4>2021 - 2024 : Bachelor's Of Computer Application</h4>
              <p>
                Pursuing graduation in Bachelor's Of Computer Application from
                Kurukshetra University,Kurukshetra
              </p>
            </td>
          </tr>
          <tr>
            <td className="highlight">Work Experience</td>
            <td>
              <h4>2020 - Present : Developer</h4>
              <p>
                As a self taught developer , started development journey with
                web development learn about frontend and backend development.Now
                learning and exploring python... and exploring more about web
                development.
              </p>
            </td>
          </tr>
        </table>

        <div className="myTools">
          <h1>Tools and Technologies</h1>
          <Technologies />
        </div>
      </div>
    </section>
  );
};

export default About;
