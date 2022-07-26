function Form() {
  return (
    <form>
      <legend> Input details</legend>
      <fieldset>
        <div className="personal">
          <div className="nameDiv">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="numberDiv">
            <label htmlFor="number">Number:</label>
            <input type="text" name="number" id="number" />
          </div>
          <div className="emailDiv">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="locationDiv">
            <label htmlFor="location">Location:</label>
            <input type="text" name="location" id="location" />
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
    </form>
  );
}

export default Form;
