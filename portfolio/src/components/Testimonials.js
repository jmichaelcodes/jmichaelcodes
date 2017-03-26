import React from 'react'

class Testimonials extends React.Component {
    render() {
        return <div className="row">
        <div className="col s12">
          <div className="card darken-1">
            <div className="card-content white-text">
              <span className="card-title black-text">Testimonials</span>
              <blockquote className="blockquote-reverse">
              <p className="black-text">              “Julius   has been an absolute pleasure to work with. He is bright, focused, and incredibly driven. He has a very keen eye for design & UI/UX work and is always up to date on the newest design guidelines. He has been a wonderful coworker and team member.”</p>
              <footer>Elyse Swoverland <cite title="Source Title">Senior Developer</cite></footer>
            </blockquote>

            <br /><br />

            <blockquote>
              <p className="black-text">As an apprentice, Julius made significant contributions on a large team, jumped into an existing code base to fix several bugs, and acted as the sole developer on a few projects (performing very well with very little guidance).
 
                Julius has a real passion for UI/UX and brought his knowledge to the Android team. I would happily serve as a reference for anyone looking to hire Julius!</p>
              <footer >Tiffany Trusty <cite title="Source Title">Director of Apprenticeship</cite></footer>
            </blockquote>
            </div>
          </div>
        </div>
      </div>

    }
}

export default Testimonials