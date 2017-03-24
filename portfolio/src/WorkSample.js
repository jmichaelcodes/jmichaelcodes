import React, { Component } from 'react';

class WorkSample extends Component {
    render() {
        return <div className="container">
            <div className="row webRow text-center">
                <h1 className="portfolioHeading">Web</h1>
                <br />
                <div className="col-sm-6">
                    <a href="https://jmichaelcodes.github.io/w1d4-recreate-a-mockup/">
                        <img src="./img/screenshots/skinnyties.png" alt="Skinny Ties" class="img-thumbnail" />
                    </a>
                </div>
                <div className="col-sm-6">
                    <a href="https://jmichaelcodes.github.io/w2d4-recreate-surf-paddle/">
                        <img src="./img/screenshots/surfandpaddle.png" alt="Surf and Paddle" class="img-thumbnail" />
                    </a>
                </div>
            </div>
            <br />
            <div className="row secondWebRow">
                <div className="col-sm-6">
                    <a href="./img/screenshots/noteslist.png">
                        <img src="./img/screenshots/noteslist.png" alt="Notes List" class="img-thumbnail" />
                    </a>
                </div>
                <div className="col-sm-6">
                    <a href="./img/screenshots/noteempty.png">
                        <img src="./img/screenshots/noteempty.png" alt="Note Form" class="img-thumbnail" />
                    </a>
                </div>
            </div>
            <br /><br />
            <h1 className="portfolioHeading androidHeading text-center">Android</h1>
            <br />
            <div className="row">
            <div className="col-sm-3">
                <a href="./img/screenshots/4.png">
                    <img src="./img/screenshots/4.png" alt="NTFXN Notification" class="img-thumbnail" />
                </a>
            </div>
            <div className="col-sm-3">
                <a href="./img/screenshots/5.png">
                    <img src="./img/screenshots/5.png" alt="NTFXN Lock Screen" class="img-thumbnail" />
                </a>
            </div>
            <div className="col-sm-3">
                <a href="./img/screenshots/1.png">
                    <img src="./img/screenshots/1.png" alt="NTFXN 1" class="img-thumbnail" />
                </a>
            </div>
            <div className="col-sm-3">
                <a href="./img/screenshots/2.png">
                    <img src="./img/screenshots/2.png" alt="NTFXN 2" class="img-thumbnail" />
                </a>
            </div>
            </div>
            <br/><br/>
            <div className="row">
            <div className="col-sm-3">
                <a href="./img/screenshots/4.png">
                    <img src="./img/screenshots/4.png" alt="NTFXN Notification" class="img-thumbnail" />
                </a>
            </div>
            <div className="col-sm-3">
                <a href="./img/screenshots/5.png">
                    <img src="./img/screenshots/5.png" alt="NTFXN Lock Screen" class="img-thumbnail" />
                </a>
            </div>
            <div className="col-sm-3">
                <a href="./img/screenshots/1.png">
                    <img src="./img/screenshots/1.png" alt="NTFXN 1" class="img-thumbnail" />
                </a>
            </div>
            <div className="col-sm-3">
                <a href="./img/screenshots/2.png">
                    <img src="./img/screenshots/2.png" alt="NTFXN 2" class="img-thumbnail" />
                </a>
            </div>
            </div>
            <br/><br/>
        </div>
    }
}

export default WorkSample;
