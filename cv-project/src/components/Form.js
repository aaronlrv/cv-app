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
    <div className="form" class="grid col-span-3">
      <form>
        <legend> Personal details</legend>
        <fieldset>
          <div className="personal">
            <div className="nameDiv">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="text-red-500	"
              />
            </div>
            <div className="numberDiv">
              <label htmlFor="number">Number:</label>
              <input
                type="text"
                name="number"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="emailDiv">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="locationDiv">
              <label htmlFor="location">Location:</label>
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

        <legend> Education</legend>
        <fieldset>
          <div className="education">
            <div className="school">
              <div className="schoolDiv">
                <label htmlFor="school">School:</label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
              <div className="courseDiv">
                <label htmlFor="course">Course Name:</label>
                <input
                  type="text"
                  name="course"
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <div className="dateStart">
                <label htmlFor="dateStart">Start Date</label>
                <input
                  type="text"
                  name="dateStart"
                  id="dateStart"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="dateEnd">
                <label htmlFor="dateEnd">End Date</label>
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

        <legend>Work experience</legend>
        <fieldset>
          <div className="work">
            <div className="workDiv">
              <label htmlFor="workPlace">Work Place:</label>
              <input
                type="text"
                name="workPlace"
                id="workPlace"
                value={workPlace}
                onChange={(e) => setWorkPlace(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="workStart">Work Start:</label>
              <input
                type="text"
                name="workStart"
                id="workStart"
                value={workStart}
                onChange={(e) => setWorkStart(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="workEnd">Work End:</label>
              <input
                type="text"
                name="workEnd"
                id="workEnd"
                value={workEnd}
                onChange={(e) => setWorkEnd(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="jobRole">Job role:</label>
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
