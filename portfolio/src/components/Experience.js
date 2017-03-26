import React from 'react'

class Experience extends React.Component {
    render() {
        return <div className=" experience">
        <ul className="collection with-header">
            <li className="collection-header"><h4>Experience</h4></li>
            <li className="collection-item"><span className="title">The Iron Yard</span><span className="pull-right">Jan 2017 - April 2017</span>
              <p><em>Front End Student</em><br/>
              Studied Front End languages and frameworks, including: HTML5, Bootstrap, CSS3, JavaScript, Node, React, and more.
              </p></li>
                <li className="collection-item"><span className="title">iLAB</span><span className="pull-right">Aug 2016 - Oct 2016</span>
              <p><em>QA Analyst</em><br/>
                Responsible for test case execution and defect logging.                    
              </p></li>
                <li className="collection-item"><span className="title">Eleven Fifty</span><span className="pull-right">Jun 2015 - Aug 2016</span>
              <p><em>Android & Java Apprentice</em><br/>
              Through apprenticeship, studied, practiced, and worked on multiple billable projects, both individually and as a team. Gained experience in Android Development, Java, UI design, Git, project management, and other disciplines.
              </p></li>
          </ul>

            </div>

    }
}

export default Experience