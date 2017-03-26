import React from 'react'

class Sidebar extends React.Component {
    render() {
        return <div className="panel panel-default">
              <div className="panel-heading">Skills</div>

              <ul className="list-group listItems">
                <li className="list-group-item">Android</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">Git</li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">Java</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">Material Design</li>
                <li className="list-group-item">Project Management</li>
                <li className="list-group-item">UI/UX Design</li>
                <li className="list-group-item">XML</li>
              </ul>
              <div className="panel-heading">Tools</div>
              <ul className="list-group listItems">
                <li className="list-group-item">Android Studio</li>
                <li className="list-group-item">Balsamiq</li>
                <li className="list-group-item">IntelliJ</li>
                <li className="list-group-item">Git</li>
                <li className="list-group-item">Mac</li>
                <li className="list-group-item">Visual Studio</li>
                <li className="list-group-item">Windows</li>
              </ul>
            </div>
    }
}

export default Sidebar