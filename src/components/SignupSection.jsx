import React from 'react'

const SignupSection = () => {
  return (
    <section className="signup">
        <img className="subLines" src="images/images-omni/background-wavy-lines.svg" alt=""/>
        <div className="container">
          <div className="subsContent">
          <div className="sectionTitle">
            <h2>Get News Updates By Signup</h2>
          </div>

          <div className="subscribeRight">
            <form className="userInput">
              <input type="text" placeholder="Username@domain.com"/>
              <a className="btnPrimary" href="#"
              >Subscribe
              <i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </form>
            
            

          </div>
        </div>
        </div>
      </section>
  )
}

export default SignupSection