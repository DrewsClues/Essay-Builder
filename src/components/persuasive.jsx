import React from "react"
import Accordion from 'react-bootstrap/Accordion';
import "../css sheets/essay-page.css";


function Persuasive() {
  
    return (
      <>
        <div className="essay-div">
            <h1>Persuasive Essay</h1>
           
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Essay Title</Accordion.Header>
                    <Accordion.Body>
                        <input className="title-input"></input>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Introduction</Accordion.Header>
                    <Accordion.Body>
                        <textarea className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Body Paragraph 1</Accordion.Header>
                    <Accordion.Body>
                        <textarea className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Body Paragraph 2</Accordion.Header>
                    <Accordion.Body>
                        <textarea className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Body Paragraph 3</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Conclusion</Accordion.Header>
                    <Accordion.Body>
                        <textarea className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            
        </div>
      </>
    )
  }

  export default Persuasive
  