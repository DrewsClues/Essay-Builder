import React from "react"
import { ProgressBar, Accordion, Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { FaRegCopy } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import "../css-sheets/home.css";


function Home() {

  return (

    <div className='home-container-content'>
    <div className='home-containter-head'>
    </div>
    <div className='home-container-body'> 

      <div className='home-mission-div'>
        <br/>
        <h1>Welcome to</h1>
          ESSAY BUILDER
        <h3>Step By Step Essay Drafting</h3>
        <h3>Helpful Tips & Reminders</h3>
        <h3>Compile & Download</h3>
        <br/>
        
      </div>

      <div>
        <img src='Logolg-outline.png' className='home-image'></img>
      </div>
      <br/>
    
    </div>
    
  </div>

);
  }

  export default Home
  