import React from 'react'

class Head extends React.Component {
    render() {
        return <div className="head">

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
        </div>

    }
}

export default Head