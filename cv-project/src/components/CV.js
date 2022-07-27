function CV(props) {
  return (
    <div className="cv">
      <div className="personalDetai">
        <p>{props.name} </p>
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

      <div className="workExperience">
        <h1>{props.job}</h1>
        <h1>{props.workPlace}</h1>
        <h3>{props.workStart}</h3>
        <h3>{props.workEnd}</h3>
      </div>
    </div>
  );
}

export default CV;
