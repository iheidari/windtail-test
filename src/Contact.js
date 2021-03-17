//Arrow function
const Contact = (props) => {
  return (
    <div className="flex p-3 border rounded border-white m-3 bg-yellow-800">
      <img className="w-24 rounded-full" src={props.image} alt={props.name} />
      <div className="ml-3">
        <div className="text-4xl text-white">{props.name}</div>
        <a className="text-gray-300" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
