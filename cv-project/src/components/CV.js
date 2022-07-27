function CV(props) {
  return (
    <div className="cv">
      <h1 class="font-bold underline text-2xl">CV Preview</h1>
      <div className="personalDetai" class="flex flex-col ">
        <div class="flex flex-row justify-center align-center text-3xl underline">
          <p>{props.name} </p>
        </div>
        <div class="flex flex-row justify-center align-center gap-5">
          <h3>{props.email}</h3>
          <h3>{props.number}</h3>
          <h3>{props.location}</h3>
        </div>
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
