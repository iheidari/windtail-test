//Arrow function
const Contact = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <div>
        <div>{props.name}</div>
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </div>
    </div>
  );
};

export default Contact;
