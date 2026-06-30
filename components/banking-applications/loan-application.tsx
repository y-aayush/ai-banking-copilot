const LoanApplication = () => {
  return (
    <div>
      <h1>Loan Application</h1>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ringer@0ne0nes.com"
            defaultValue="ringer@0ne0nes.com"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />
        </div>
        <div>
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input type="number" id="loanAmount" name="loanAmount" />
        </div>
        <div>
          <label htmlFor="emailConfirmation">Confirm Email:</label>
          <input
            type="email"
            id="emailConfirmation"
            name="emailConfirmation"
            placeholder="ringer@0ne0nes.com"
            defaultValue="ringer@0ne0nes.com"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoanApplication
