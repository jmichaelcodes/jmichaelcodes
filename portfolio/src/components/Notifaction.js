import React from 'react'

class Notifaction extends React.Component {
    render() {
        return <div className="notifaction">
              <img className="notifactionIcon" src="./img/notifaction.png" />
              <div className="notifactionText"><a href="https://play.google.com/store/apps/details?id=jmichaelcodes.notifaction">NTFXN Notification Shortcuts</a>
                <br /> Available in the Google Play Store
                </div>
            </div>
    }
}

export default Notifaction