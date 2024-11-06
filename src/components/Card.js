import "./Card.css";

const Card = ({name,email,id}) => {
  return (
    <div className="container">
      <div className="card">
        <img src={`https://robohash.org/${id}?100x100`} alt="ROBO" width='100%' />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
// bg-light-blue dib mr2 br2 pa2 na2 grow bw shadow-5 tc
