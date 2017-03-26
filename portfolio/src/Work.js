import React, { Component } from 'react';
import logo from './logo.svg';
import WorkSample from './WorkSample';

import Blurb from './components/Blurb'
import Experience from './components/Experience'
import Head from './components/Head'
import Icons from './components/Icons'
import Notifaction from './components/Notifaction'
import Sidebar from './components/Sidebar'
import Testimonials from './components/Testimonials'

class Work extends Component {
  render() {
    return <div className="container">
        <Blurb/>
        <Icons/>
        <Experience/>
        <Notifaction/>
        <Testimonials/>
    </div>
  }
}

export default Work;
