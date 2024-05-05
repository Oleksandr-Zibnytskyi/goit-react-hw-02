import css from "./Description.module.css";

const Description = ({ name, text }) => {
    return (
      <>
        <h1>{name}</h1>
        <p>{text}</p>
      </>
    );
  };
  
  export default Description;