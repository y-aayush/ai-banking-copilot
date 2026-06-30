const SavingsApplication = () => {
  return (
    <div>
      <h1>Savings Application</h1>
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
          <label htmlFor="confirmEmail">Confirm Email:</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            placeholder="ringer@0ne0nes.com"
            defaultValue="ringer@0ne0nes.com"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SavingsApplication
