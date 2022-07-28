function CV(props) {
  return (
    <div className="cv">
      <div
        className="personalDetai"
        class="flex flex-col bg-slate-300 h-500 h-20 justify-center align-center m-3"
      >
        <div class="flex flex-row justify-center align-center text-3xl underline">
          <p>{props.name} </p>
        </div>
        <div class="flex flex-row justify-center align-center gap-5">
          <h3>{props.email}</h3>

          <h3>{props.number}</h3>
          <h3>{props.location}</h3>
        </div>
      </div>

      <div class="mt-5">
        <h2 class="">Education</h2>
        <hr class="w-auto h-1 bg-gray-300 0 border-r-2"></hr>
      </div>

      <div className="Education" class="grid grid-cols-3 grid-rows-1 mb-5">
        <div className="right" class="flex flex-col">
          {props.object.map((x) => (
            <div>
              <h3 class="bg-red-500">{x.school}</h3>
              <h3 class="bg-red-700">{x.course}</h3>
            </div>
          ))}
        </div>
        <div className="left" class="flex gap-3 justify-end col-start-3 pl-2">
          <p>{props.startDate} - </p>
          <p>{props.endDate}</p>
        </div>
        <div className="right" class="flex flex-col">
          <h1>{props.course2}</h1>
          <h3>{props.school2}</h3>
        </div>
        <div className="left" class="flex gap-3 justify-end col-start-3 pl-2">
          <p>{props.startDate2} - </p>
          <p>{props.endDate2}</p>
        </div>
      </div>

      <div class="mt-5">
        <h2 class="">Work Experience</h2>
        <hr class="w-auto h-1 bg-gray-300 0 border-r-2"></hr>
      </div>
      <div class="grid grid-cols-3 grid-rows-1 mb-5">
        <div className="right" class="flex flex-col">
          <h1>{props.job}</h1>
          <h3>{props.workPlace}</h3>
        </div>
        <div className="left" class="flex gap-3 justify-end col-start-3 pl-2">
          <p>{props.workStart} - </p>
          <p>{props.workEnd}</p>
        </div>
      </div>
    </div>
  );
}

export default CV;
