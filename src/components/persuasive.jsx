import React from "react"
import { ProgressBar, Accordion, Form, Button } from "react-bootstrap";
import "../css sheets/essay-page.css";


function Persuasive() {
    //State of progressbar
    const [progressbar, setProgressbar] = React.useState(0)

    //States of User Input Areas
    const [title, setTitle] = React.useState('');
    const [introduction, setIntroduction] = React.useState('');
    const [body1, setBody1] = React.useState('');
    const [body2, setBody2] = React.useState('');
    const [body3, setBody3] = React.useState('');
    const [conclusion, setConclusion] = React.useState('');
    const [finish, setFinish] = React.useState('');

    //States for checkboxes
    const [titleisChecked, setTitletisChecked] = React.useState(false);
    const [introisChecked, setIntroisChecked] = React.useState(false);
    const [body1isChecked, setBody1isChecked] = React.useState(false);
    const [body2isChecked, setBody2isChecked] = React.useState(false);
    const [body3isChecked, setBody3isChecked] = React.useState(false);
    const [conclusionisChecked, setConclusionisChecked] = React.useState(false);

    //Check for changes in textareas to update check boxes
      React.useEffect(() => {
        if (
          title !== ''
        ) {
            setTitletisChecked(true);
        }
        if (
            title == ''
          ) {
              setTitletisChecked(false);
          }
        if (
            introduction !== ''
        ) {
            setIntroisChecked(true);
        }
        if (
            introduction == ''
        ) {
            setIntroisChecked(false);
            }
        if (
            body1 !== ''
        ) {
            setBody1isChecked(true);
        }
        if (
            body1 == ''
        ) {
            setBody1isChecked(false);
            }
        if (
            body2 !== ''
        ) {
            setBody2isChecked(true);
        }
        if (
            body2 == ''
        ) {
            setBody2isChecked(false);
            }
        if (
            body3 !== ''
        ) {
            setBody3isChecked(true);
        }
        if (
            body3 == ''
        ) {
            setBody3isChecked(false);
            }
        if (
            conclusion !== ''
        ) {
            setConclusionisChecked(true);
        }
        if (
            conclusion == ''
        ) {
            setConclusionisChecked(false);
            }
          
      }, [title, introduction, body1, body2, body3, conclusion]);









    function CompileEssay (){
        setFinish(
            `${title}

${introduction}

${body1}

${body2}

${body3}

${conclusion}
            `
        )
    }



    function EssayProgression() {

        return <ProgressBar now={progressbar} label={`${progressbar}%`} />
      }
    
    

      
 
    return (
      <>
        <div className="essay-div">
            <h1>Persuasive Essay</h1>
            <EssayProgression/>
            
           
            <Accordion defaultActiveKey={['0']} alwaysOpen className="essay-accordion"> 
                <Accordion.Item eventKey="0">
                    <Accordion.Header> 
                        <label className="checkbox-container">
                            <input type="checkbox" className="essay-checkbox" 
                                checked={titleisChecked} />
                            <span className="checkmark"></span>
                        </label>  Essay Title</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions">
                            Begin by writing a creative title for your essay! (Don't just copy the essay topic)
                        </p>
                        <input 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="title-input">
                        </input>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <label className="checkbox-container">
                            <input type="checkbox" className="essay-checkbox" checked={introisChecked} />
                            <span className="checkmark"></span>
                        </label>Introduction</Accordion.Header> 
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
                        <textarea 
                        value={introduction}
                        onChange={(e) => setIntroduction(e.target.value)}
                        className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <label className="checkbox-container">
                            <input type="checkbox" className="essay-checkbox" checked={body1isChecked} />
                            <span className="checkmark"></span>
                        </label>Body Paragraph 1</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions" style={{ whiteSpace: 'pre-line' }}>
                            Begin with a topic sentence that tells the reader what your first paragraph is about.
                            Try to use about FIVE SENTENCES to explain your reason using two details and two examples for each. 
                        </p>
                        <textarea 
                        value={body1}
                        onChange={(e) => setBody1(e.target.value)}
                        className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                    <label className="checkbox-container">
                            <input type="checkbox" className="essay-checkbox"  checked={body2isChecked}/>
                            <span className="checkmark"></span>
                    </label>Body Paragraph 2</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions" style={{ whiteSpace: 'pre-line' }}>
                            Begin with a topic sentence that tells the reader what your second paragraph is about.
                            Try to use about FIVE SENTENCES to explain your reason using two details and two examples for each. 
                        </p>
                        <textarea 
                        value={body2}
                        onChange={(e) => setBody2(e.target.value)}
                        className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <label className="checkbox-container">
                            <input type="checkbox" className="essay-checkbox" checked={body3isChecked}/>
                            <span className="checkmark"></span>
                        </label>Body Paragraph 3</Accordion.Header>
                    <Accordion.Body>
                        <p className="essay-instructions" style={{ whiteSpace: 'pre-line' }}>
                            Begin with a topic sentence that tells the reader what your third paragraph is about.
                            Try to use about FIVE SENTENCES to explain your reason using two details and two examples for each. 
                        </p>
                        <textarea 
                        value={body3}
                        onChange={(e) => setBody3(e.target.value)}
                        className="paragraph-area"></textarea>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <label className="checkbox-container">
                            <input type="checkbox" className="essay-checkbox"  checked={conclusionisChecked}/>
                            <span className="checkmark"></span>
                        </label>Conclusion</Accordion.Header>
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
                        <textarea 
                        value={conclusion}
                        onChange={(e) => setConclusion(e.target.value)}
                        className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="6">
                    <Accordion.Header>Finished Essay</Accordion.Header>
                    <Accordion.Body>
                        <div className="button-div">
                            <Button className="essay-buttons" onClick={CompileEssay}>Compile Essay</Button>
                        </div>
                           
                           <textarea 
                            value={finish}
                            onChange={(e) => setFinish(e.target.value)}
                            className="paragraph-area">
                            </textarea> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            
        </div>
      </>
    )
  }

  export default Persuasive
  