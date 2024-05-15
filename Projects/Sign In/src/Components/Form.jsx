
function Form({ handleFormSubmit, emailRef, formRef }) {
  return <>

    <div className="card" ref={formRef}>
      <h2 >Signup Form</h2>


      <div className="login_register">
        <a href="#" className="login" target="blank">Login</a>
        <a href="#" className="register" target="blank">Signup</a>
      </div>


      <form className="form" action="#" onSubmit={handleFormSubmit} >
        <input type="email" placeholder="Email Adress" ref={emailRef} className="email" />
        <input type="password" placeholder="password" className="pass" />
        <input type="text" placeholder="Confirm Password" className="confirm_pass" />
        <button type="submit" className="login_btn" >Singup</button>
      </form>






    </div>


  </>

}
export default Form