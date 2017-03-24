import React, { Component } from 'react';
import logo from './logo.svg';
import WorkSample from './WorkSample';

import Sidebar from './Sidebar'

class Work extends Component {
  render() {
    return <div>

      <div className="container">

        <div className="row topRow">

          <div className="col-sm-3 leftColumn">

            <img src="./img/avatar.jpg" alt="Photo" className="photo" />

            <div className="socialMedia row">

              <br />
              <div className="col-sm-6">
                <a href="https://github.com/jmichaelcodes" className="col-sm-4 github pull-right" target="_blank">
                  <i className="fa fa-github"></i>
                </a>

              </div>
              <div className="col-sm-6">
                <a href="https://www.linkedin.com/in/jmichaelcodes" className="col-sm-4 linkedIn text-center" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>

              </div>
              </div>

            <Sidebar/>


          </div>

          <div className="col-sm-9 rightColumn">

            <div className="blurb"> 
              I am a Front-End developer who has developed several applications, both as a team member and individually, with a personal application in the Google Play Store. Armed with expertise in Material Design, I specialize in creating clean, modern UIs and front-end experiences
                </div>

                            <div className="notifaction">
              <img className="notifactionIcon" src="./img/notifaction.png" />
              <div className="notifactionText"><a href="https://play.google.com/store/apps/details?id=jmichaelcodes.notifaction">NTFXN Notification Shortcuts</a>
                <br /> Available in the Google Play Store
                </div>
            </div>

            <div className="row icons">

              <div className="col-sm-2 imageGallery">
                <img className="image" src="./img/android.png" />
              </div>
              <div className="col-sm-2 imageGallery">
                <img className="image" src="./img/bootstrap.png" />
              </div>
              <div className="col-sm-2 imageGallery">
                <img className="image" src="./img/css.png" />
              </div>
              <div className="col-sm-2 imageGallery">
                <img className="image" src="./img/html.png" />
              </div>
              <div className="col-sm-2 imageGallery">
                <img className="image" src="./img/java.png" />
              </div>
              <div className="col-sm-2 imageGallery">
                <img className="image" src="./img/javascript.jpeg" />
              </div>

            </div>


            <div className="testimonials">
            <blockquote className="blockquote-reverse">
              <p>              “Julius   has been an absolute pleasure to work with. He is bright, focused, and incredibly driven. He has a very keen eye for design & UI/UX work and is always up to date on the newest design guidelines. He has been a wonderful coworker and team member.”</p>
              <footer>Elyse Swoverland <cite title="Source Title">Senior Developer</cite></footer>
            </blockquote>

            <br /><br />

            <blockquote>
              <p>As an apprentice, Julius made significant contributions on a large team, jumped into an existing code base to fix several bugs, and acted as the sole developer on a few projects (performing very well with very little guidance).
 
                Julius has a real passion for UI/UX and brought his knowledge to the Android team. I would happily serve as a reference for anyone looking to hire Julius!</p>
              <footer>Tiffany Trusty <cite title="Source Title">Director of Apprenticeship</cite></footer>
            </blockquote>
            </div>

            <div className="experience">
              <div className="panel-heading">Experience</div>
              <div className="list-group">
                <div href="#" className="list-group-item">
                  <h4 className="list-group-item-heading"><strong>The Iron Yard</strong><span className="pull-right">Jan 2017 - April 2017</span></h4>
                  <p className="list-group-item-text"><em>Front End Student</em> 
                    <br/>
                    Studied Front End languages and frameworks, including: HTML5, Bootstrap, CSS3, JavaScript, Node, React, and more.
                  </p>
                </div>
                <div href="#" className="list-group-item">
                  <h4 className="list-group-item-heading"><strong>iLAB</strong><span className="pull-right">Aug 2016 - Oct 2016</span></h4>
                  <p className="list-group-item-text"><em>QA Analyst</em> 
                    <br/>
                    Responsible for test case execution and defect logging.
                  </p>
                </div>
                <div href="#" className="list-group-item">
                  <h4 className="list-group-item-heading"><strong>Eleven Fifty</strong><span className="pull-right">Jul 2015 - Aug 2016</span></h4>
                  <p className="list-group-item-text"><em>Android & Java Apprentice</em> 
                    <br/>
                  Through apprenticeship, studied, practiced, and worked on multiple billable projects, both individually and as a team. Gained experience in Android Development, Java, UI design, Git, project management, and other disciplines.                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  }
}

export default Work;
