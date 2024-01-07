import React from "react"
import { ProgressBar, Accordion } from "react-bootstrap";
import "../css sheets/essay-page.css";


function Persuasive() {
    function EssayProgression() {
        const now = 0;;
        return <ProgressBar now={now} label={`${now}%`} />
      }


  
    return (
      <>
        <div className="essay-div">
            <h1>Persuasive Essay</h1>
            <EssayProgression/>
            
           
            <Accordion defaultActiveKey={['0']} alwaysOpen className="essay-accordion"> 
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Essay Title</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions">
                            Begin by writing a creative title for your essay! (Don't just copy the essay topic)
                        </p>
                        <input className="title-input"></input>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Introduction</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions" style={{ whiteSpace: 'pre-line' }}>
                                Begin with an introduction paragraph, it should include the following:
                        </p>
                            <ul>
                                - Hook (Interesting sentence to grab reader's attention)                            
                            </ul>
                            <ul>
                                - Background (Important information needed to understand the topic)
                            </ul>
                            <ul>
                                - Thesis (What are the three reasons for your essay position?)
                            </ul>
                        <textarea className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Body Paragraph 1</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions" style={{ whiteSpace: 'pre-line' }}>
                            Begin with a topic sentence that tells the reader what your first paragraph is about.
                            Try to use about FIVE SENTENCES to explain your reason using two details and two examples for each. 
                        </p>
                        <textarea className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Body Paragraph 2</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions" style={{ whiteSpace: 'pre-line' }}>
                            Begin with a topic sentence that tells the reader what your second paragraph is about.
                            Try to use about FIVE SENTENCES to explain your reason using two details and two examples for each. 
                        </p>
                        <textarea className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Body Paragraph 3</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions" style={{ whiteSpace: 'pre-line' }}>
                            Begin with a topic sentence that tells the reader what your third paragraph is about.
                            Try to use about FIVE SENTENCES to explain your reason using two details and two examples for each. 
                        </p>
                        <textarea className="paragraph-area"></textarea>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Conclusion</Accordion.Header>
                    <Accordion.Body>
                    <p className="essay-instructions" style={{ whiteSpace: 'pre-line' }}>
                            Now time to write your Conclusion Paragraph, make sure to include the following:
                        </p>
                            <ul>
                                - Restate your thesis statement                      
                            </ul>
                            <ul>
                                - Summarize your main ideas
                            </ul>
                            <ul>
                                - Finish with a clincher (Your last thoughts on the essay, for example "I think....", "I hope.....")
                            </ul>
                        <textarea className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>Finished Essay</Accordion.Header>
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
  