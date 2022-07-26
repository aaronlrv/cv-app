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
    </form>
  );
}

export default Form;
