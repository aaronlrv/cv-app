import { useState } from "react";
import CV from "./CV";

function Form() {
  let [name, setName] = useState("John");
  let [number, setNumber] = useState("06531239685");
  let [email, setEmail] = useState("example@mail.com");
  let [location, setLocation] = useState("USA, Kentucky");
  let [school, setSchool] = useState("Kingston Collge");
  let [course, setCourse] = useState("BS Computer Science");
  let [startDate, setStartDate] = useState("2020");
  let [endDate, setEndDate] = useState("Present");
  let [workPlace, setWorkPlace] = useState("Microsoft");
  let [workStart, setWorkStart] = useState("2000");
  let [workEnd, setWorkEnd] = useState("Present");
  let [job, setJob] = useState("Front end Developer");

  let props = {
    name: name,
    number: number,
    email: email,
    school: school,
    location: location,
    course: course,
    startDate: startDate,
    endDate: endDate,
    workPlace: workPlace,
    workStart: workStart,
    workEnd: workEnd,
    job: job,
  };
  return (
    <div
      className="form"
      class="grid grid-cols-2 grid-rows-1 bg-zinc-100 h-screen"
    >
      <form class="m-3">
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
            <div className="school">
              <div className="schoolDiv">
                <label class="mt-3 w-24 inline-block" htmlFor="school">
                  School:
                </label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
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
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
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
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
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
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
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
                value={workPlace}
                onChange={(e) => setWorkPlace(e.target.value)}
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
                value={workStart}
                onChange={(e) => setWorkStart(e.target.value)}
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
                value={workEnd}
                onChange={(e) => setWorkEnd(e.target.value)}
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
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
          </div>
        </fieldset>
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
