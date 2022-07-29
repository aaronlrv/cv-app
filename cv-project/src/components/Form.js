import { useState } from "react";
import CV from "./CV";

function Form() {
  let [name, setName] = useState("John");
  let [number, setNumber] = useState("06531239685");
  let [email, setEmail] = useState("example@mail.com");
  let [location, setLocation] = useState("USA, Kentucky");
  let [summary, setSummary] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  let [work, setWork] = useState([]);
  let [education, setEducation] = useState([]);
  let [workSummary, setWorkSummary] = useState("");

  let props = {
    name: name,
    education,
    work,
    summary,
    number: number,
    email: email,
  };

  function addEducation(e) {
    e.preventDefault();
    let schoolName = document.getElementById("school").value;
    let courseName = document.getElementById("course").value;
    let startDate = document.getElementById("dateStart").value;
    let endDate = document.getElementById("dateEnd").value;

    setEducation((prev) => [
      ...prev,
      {
        school: schoolName,
        course: courseName,
        startDate: startDate,
        endDate: endDate,
      },
    ]);
  }

  function addWork(e) {
    e.preventDefault();
    let workPlace = document.getElementById("workPlace").value;
    let workStart = document.getElementById("workStart").value;
    let workEnd = document.getElementById("workEnd").value;
    let jobRole = document.getElementById("jobRole").value;
    let summary = document.getElementById("a").value;
    console.log(summary);

    setWork((prev) => [
      ...prev,
      {
        workPlace: workPlace,
        workStart: workStart,
        workEnd: workEnd,
        jobRole: jobRole,
        summary: summary,
      },
    ]);
  }

  return (
    <div className="form" class="grid grid-cols-2 grid-rows-1 ">
      <form class="m-3 border-black border-2">
        <div class="m-3">
          <legend class="mb-5 font-bold underline size text-2xl">
            {" "}
            Personal details
          </legend>
          <fieldset>
            <div className="personal" class="mb-8">
              <div className="nameDiv" class="mb-3">
                <label class="mt-3 w-24 inline-block" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
              <div className="numberDiv" class="mb-3">
                <label class="mt-3 w-24 inline-block" htmlFor="number">
                  Number:
                </label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
              <div className="emailDiv" class="mb-3">
                <label class="mt-3 w-24 inline-block" htmlFor="email">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
              <div className="locationDiv" class="mb-3">
                <label class="mt-3 w-24 inline-block" htmlFor="location">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
              <div className="summaryDiv" class="mb">
                <label class="mt-3 w-24 inline-block" htmlFor="summary">
                  Summary
                </label>
                <input
                  onChange={(e) => setSummary(e.target.value)}
                  type="text"
                  name="summary"
                  id="summary"
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
            </div>
          </fieldset>

          <legend class="mb-5 font-bold underline size text-2xl">
            {" "}
            Education
          </legend>
          <fieldset>
            <div className="education">
              <div className="school" class="mb-8">
                <div className="schoolDiv">
                  <label class="mt-3 w-24 inline-block" htmlFor="school">
                    School:
                  </label>
                  <input
                    type="text"
                    name="school"
                    id="school"
                    class="border-solid border-2 border-slate-700 rounded-md"
                  />
                </div>
                <div className="courseDiv">
                  <label class="mt-3 w-24 inline-block" htmlFor="course">
                    Course Name:
                  </label>
                  <input
                    type="text"
                    name="course"
                    id="course"
                    class="border-solid border-2 border-slate-700 rounded-md"
                  />
                </div>
                <div className="dateStart">
                  <label class="mt-3 w-24 inline-block" htmlFor="dateStart">
                    Start Date
                  </label>
                  <input
                    type="text"
                    name="dateStart"
                    id="dateStart"
                    class="border-solid border-2 border-slate-700 rounded-md"
                  />
                </div>
                <div className="dateEnd">
                  <label class="mt-3 w-24 inline-block" htmlFor="dateEnd">
                    End Date
                  </label>
                  <input
                    type="text"
                    name="dateEnd"
                    id="dateEnd"
                    class="border-solid border-2 border-slate-700 rounded-md"
                  />
                </div>
              </div>
            </div>
            <button onClick={(e) => addEducation(e)}>Submit</button>
          </fieldset>

          <legend class="mb-5 font-bold underline size text-2xl">
            Work experience
          </legend>
          <fieldset>
            <div className="work">
              <div className="workDiv">
                <label class="mt-3 w-24 inline-block" htmlFor="workPlace">
                  Work Place:
                </label>
                <input
                  type="text"
                  name="workPlace"
                  id="workPlace"
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
              <div className="">
                <label class="mt-3 w-24 inline-block" htmlFor="workStart">
                  Work Start:
                </label>
                <input
                  type="text"
                  name="workStart"
                  id="workStart"
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
              <div className="">
                <label class="mt-3 w-24 inline-block" htmlFor="workEnd">
                  Work End:
                </label>
                <input
                  type="text"
                  name="workEnd"
                  id="workEnd"
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
              <div className="">
                <label class="mt-3 w-24 inline-block" htmlFor="jobRole">
                  Job role:
                </label>
                <input
                  type="text"
                  name="jobRole"
                  id="jobRole"
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
              <div className="">
                <label class="mt-3 w-24 inline-block" htmlFor="summary">
                  Job Summary
                </label>
                <input
                  type="text"
                  name="summary"
                  id="a"
                  class="border-solid border-2 border-slate-700 rounded-md"
                />
              </div>
            </div>
            <button onClick={(e) => addWork(e)}>Submit work</button>
          </fieldset>
        </div>
      </form>

      <CV {...props} />

      {/* <CV   />
      <CV number={number} />
      <CV email={email} />
      <CV location={location} />
      <CV school={school} />
      <CV startDate={startDate} />
      <CV endDate={endDate} />
      <CV workPlace={workPlace} />
      <CV workStart={workStart} />
      <CV workEnd={workEnd} />
      <CV job={job} /> */}
    </div>
  );
}

export default Form;
