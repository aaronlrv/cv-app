function CV(props) {
  return (
    <div className="cv">
      <div className="personalDetai">
        <h1>{props.name} </h1>
        <h3>{props.email}</h3>
        <h3>{props.number}</h3>
        <h3>{props.location}</h3>
      </div>
    </div>
  );
}

export default CV;
