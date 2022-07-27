function CV(props) {
  return (
    <div className="cv">
      <div className="personalDetai">
        <h1>{props.name} </h1>
        <h3>{props.email}</h3>
        <h3>{props.number}</h3>
        <h3>{props.location}</h3>
      </div>

      <div className="Education">
        <h1>{props.course}</h1>
        <h3>{props.school}</h3>
        <p>{props.startDate}</p>
        <p>{props.endDate}</p>
      </div>
    </div>
  );
}

export default CV;
