import { useState } from "react";

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

  function text(e) {}

  return (
    <div className="form">
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
                <input type="text" name="school" id="school" />
              </div>
              <div className="courseDiv">
                <label htmlFor="course">Course Name:</label>
                <input type="text" name="course" id="course" />
              </div>
              <div className="dateStart">
                <label htmlFor="dateStart">Start Date</label>
                <input type="text" name="dateStart" id="dateStart" />
              </div>
              <div className="dateEnd">
                <label htmlFor="dateEnd">End Date</label>
                <input type="text" name="dateEnd" id="dateEnd" />
              </div>
            </div>
          </div>
        </fieldset>

        <legend>Work experience</legend>
        <fieldset>
          <div className="work">
            <div className="workDiv">
              <label htmlFor="workPlace">Work Place:</label>
              <input type="text" name="workPlace" id="workPlace" />
            </div>
            <div className="">
              <label htmlFor="workStart">Work Start:</label>
              <input type="text" name="workStart" id="workStart" />
            </div>
            <div className="">
              <label htmlFor="workEnd">Work End:</label>
              <input type="text" name="workEnd" id="workEnd" />
            </div>
            <div className="">
              <label htmlFor="jobRole">Job role:</label>
              <input type="text" name="jobRole" id="jobRole" />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
