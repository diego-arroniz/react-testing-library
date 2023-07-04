type MovieProps = {
  id: number;
  name: string;
  description: string;
};

const Movie = ({ name, description }: Partial<MovieProps>) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Movie;
