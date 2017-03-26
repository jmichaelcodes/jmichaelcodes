import React from 'react'
import { browserHistory } from 'react-router'

class Icons extends React.Component {
    render() {
        return <div className="row">

              <div className="col s2 imageGallery">
                <img className="image" src="./img/android.png" />
              </div>
              <div className="col s2 imageGallery">
                <img className="image" src="./img/bootstrap.png" />
              </div>
              <div className="col s2 imageGallery">
                <img className="image" src="./img/css.png" />
              </div>
              <div className="col s2 imageGallery">
                <img className="image" src="./img/html.png" />
              </div>
              <div className="col s2 imageGallery">
                <img className="image" src="./img/java.png" />
              </div>
              <div className="col s2 imageGallery">
                <img className="image" src="./img/javascript.jpeg" />
              </div>
            </div>
    }
}

export default Icons