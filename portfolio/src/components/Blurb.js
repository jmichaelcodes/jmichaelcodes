import React from 'react'

class Blurb extends React.Component {
    render() {
        return <div className="blurb"> 
    <div className="card horizontal">
      <div className="card-image">
        <img src="./img/avatar.jpg"/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>I am a Front-End developer who has developed several applications, both as a team member and individually, with a personal application in the Google Play Store. Armed with expertise in Material Design, I specialize in creating clean, modern UIs and front-end experiences
                </p>
        </div>
        <div className="card-action">
          <a href="https://github.com/jmichaelcodes"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jmichaelcodes"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>

            </div>
    }
}

export default Blurb