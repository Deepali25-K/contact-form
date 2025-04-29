
function App() {
  return(
    <>
    <form className="m-[10px]">
      <h1 className="text-red-500">Contact Us</h1>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" type="text" name="first-name" aria-label="first name"/>
      </div>

      <div>
        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" type="text" name="last-name" aria-label="last name"/>
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" aria-label="email"/>
      </div>

      <button type="submit">Submit</button>
    </form>

{/* Message Sent!
Thanks for completing the form. We'll be in touch soon! */}
    </>
    
  );
}

export default App
