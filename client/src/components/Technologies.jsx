import "../App.css";
import { useQuery } from "@tanstack/react-query";

const Technologies = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["technologies"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/v1/technologies`);
      const data = await res.json();

      return data.technologies;
    },
  });

  if (error) {
    return <h1>Some error occured</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="technologies">
      {data.map((elem) => {
        return (
          <img
            src={elem.icon}
            key={elem.name}
            alt={elem.name}
            className={elem.name == "ExpressJs" ? "invert" : ""}
          />
        );
      })}
    </section>
  );
};

export default Technologies;
