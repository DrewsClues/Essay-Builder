import React from "react"
import { ProgressBar, Accordion, Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { FaRegCopy } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
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


    //Download finished essay
    function downloadAsWordFile(content, filename) {
        const blob = new Blob([content], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename + '.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert("Downloading Essay as a Word Document")
    }




    //Check for changes in textareas to update check boxes
      React.useEffect(() => {
        if (
          title !== '' && titleisChecked == false
        ) {
            setTitletisChecked(true);
            setProgressbar(progressbar + 5)
        }
        if (
            title == '' && titleisChecked == true
          ) {
              setTitletisChecked(false);
              setProgressbar(progressbar - 5)
          }
        if (
            introduction !== '' && introisChecked == false
        ) {
            setIntroisChecked(true);
            setProgressbar(progressbar + 17.5)
        }
        if (
            introduction == '' && introisChecked == true
        ) {
            setIntroisChecked(false);
            setProgressbar(progressbar - 17.5)
            }
        if (
            body1 !== '' && body1isChecked == false
        ) {
            setBody1isChecked(true);
            setProgressbar(progressbar + 20)
        }
        if (
            body1 == '' && body1isChecked == true
        ) {
            setBody1isChecked(false);
            setProgressbar(progressbar - 20)
            }
        if (
            body2 !== '' && body2isChecked == false
        ) {
            setBody2isChecked(true);
            setProgressbar(progressbar + 20)
        }
        if (
            body2 == '' && body2isChecked == true
        ) {
            setBody2isChecked(false);
            setProgressbar(progressbar - 20)
            }
        if (
            body3 !== '' && body3isChecked == false
        ) {
            setBody3isChecked(true);
            setProgressbar(progressbar + 20)
        }
        if (
            body3 == '' && body3isChecked == true
        ) {
            setBody3isChecked(false);
            setProgressbar(progressbar - 20)
            }
        if (
            conclusion !== '' && conclusionisChecked == false
        ) {
            setConclusionisChecked(true);
            setProgressbar(progressbar + 17.5)
        }
        if (
            conclusion == '' && conclusionisChecked == true
        ) {
            setConclusionisChecked(false);
            setProgressbar(progressbar - 17.5)
            }
          
      }, [title, introduction, body1, body2, body3, conclusion, titleisChecked]);


      function Copyfinishedessay () {
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = finish;

            document.body.appendChild(tempTextarea);

            tempTextarea.select();
            tempTextarea.setSelectionRange(0, 99999); // For mobile devices

            document.execCommand('copy');

            document.body.removeChild(tempTextarea);

        alert("Completed essay copied to clipboard!")
      }






    function CompileEssay (){
        if (
            titleisChecked === false || 
            introisChecked === false || 
            body1isChecked === false || 
            body2isChecked === false || 
            body3isChecked === false || 
            conclusionisChecked === false
        ) {
            alert("You've left a section blank, double check and make sure to complete your essay 100% :) ")
            return;
        }



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

        return <ProgressBar Classname="progress-bar" now={progressbar} label={`${progressbar}%`} />
      }


    function Evidencetransitions() {
    return (
        <Dropdown >
        <Dropdown.Toggle variant="dark" className="transition-instructions">
            Evidence Transitions
        </Dropdown.Toggle>
    
        <Dropdown.Menu >
            <Dropdown.Item >For example,</Dropdown.Item>
            <Dropdown.Item >For instance,</Dropdown.Item>
            <Dropdown.Item >To illustrate,</Dropdown.Item>
            <Dropdown.Item >To give an example,</Dropdown.Item>
            <Dropdown.Item >As an example,</Dropdown.Item>
            <Dropdown.Item >To illustrate my point,</Dropdown.Item>

        </Dropdown.Menu>
        </Dropdown>
    );
    }

    function Reinforcementtransitions() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="transition-instructions" >
                Reinforcement Transitions
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <Dropdown.Item >Additionally,</Dropdown.Item>
                <Dropdown.Item >Furthermore,</Dropdown.Item>
                <Dropdown.Item >Moreover,</Dropdown.Item>
                <Dropdown.Item >In addition,</Dropdown.Item>
                <Dropdown.Item >Also,</Dropdown.Item>
                <Dropdown.Item >As well as that,</Dropdown.Item>
                <Dropdown.Item >On top of that,</Dropdown.Item>
                <Dropdown.Item >What's more,</Dropdown.Item>
    
            </Dropdown.Menu>
            </Dropdown>
        );
        }

    function Transitiontonextpoint() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="transition-instructions">
                Next point Transitions
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <Dropdown.Item >Moving on,</Dropdown.Item>
                <Dropdown.Item >Next,</Dropdown.Item>
                <Dropdown.Item >Another key point,</Dropdown.Item>
                <Dropdown.Item >Moving forward,</Dropdown.Item>
                <Dropdown.Item >To continue to my next point,</Dropdown.Item>
                <Dropdown.Item >To continue,</Dropdown.Item>
    
            </Dropdown.Menu>
            </Dropdown>
        );
        }

    function Differencetransitions() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="transition-instructions">
                Difference Transitions
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <Dropdown.Item >However,</Dropdown.Item>
                <Dropdown.Item >On the other hand,</Dropdown.Item>
                <Dropdown.Item >On the contrary,</Dropdown.Item>
                <Dropdown.Item >But,</Dropdown.Item>
                <Dropdown.Item >Conversely,</Dropdown.Item>
                <Dropdown.Item >In contrast,</Dropdown.Item>
                <Dropdown.Item >Yet,</Dropdown.Item>
                <Dropdown.Item >Although,</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        );
        }

    function Similartransitions() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="transition-instructions">
                Similar Transitions
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <Dropdown.Item >Similarly,</Dropdown.Item>
                <Dropdown.Item >Likewise,</Dropdown.Item>
                <Dropdown.Item >In the same way,</Dropdown.Item>
                <Dropdown.Item >Just as,</Dropdown.Item>
                <Dropdown.Item >Like,</Dropdown.Item>
                <Dropdown.Item >As well as,</Dropdown.Item>
                <Dropdown.Item >In a similar fashion,</Dropdown.Item>
                <Dropdown.Item >Equally,</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        );
        }
    
    function Conclusiontransitions() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="transition-instructions">
                Conclusion Transitions
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <Dropdown.Item >In conclusion,</Dropdown.Item>
                <Dropdown.Item >To conclude,</Dropdown.Item>
                <Dropdown.Item >In summary,</Dropdown.Item>
                <Dropdown.Item >To sum up,</Dropdown.Item>

            </Dropdown.Menu>
            </Dropdown>
        );
        }

    function Finishingtransitions() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="transition-instructions">
                Concluding Transitions
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <Dropdown.Item >To sum up,</Dropdown.Item>
                <Dropdown.Item >In any case,</Dropdown.Item>
                <Dropdown.Item >Thus,</Dropdown.Item>
                <Dropdown.Item >Therefore,</Dropdown.Item>
                <Dropdown.Item >In the end,</Dropdown.Item>
                <Dropdown.Item >Ultimately,</Dropdown.Item>
                <Dropdown.Item >Finally,</Dropdown.Item>
    
            </Dropdown.Menu>
            </Dropdown>
        );
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
                        <div className="button-div">
                            <Evidencetransitions/>
                            <Reinforcementtransitions/>
                            <Transitiontonextpoint/>
                            <Finishingtransitions/>
                        </div>
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
                        <div className="button-div">
                            <Evidencetransitions/>
                            <Reinforcementtransitions/>
                            <Transitiontonextpoint/>
                            <Finishingtransitions/>
                        </div>
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
                        <div className="button-div">
                            <Evidencetransitions/>
                            <Reinforcementtransitions/>
                            <Transitiontonextpoint/>
                            <Finishingtransitions/>
                        </div>
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
                        <div className="conclusion-button-div">
                            <Conclusiontransitions/>
                        </div>
                        <textarea 
                        value={conclusion}
                        onChange={(e) => setConclusion(e.target.value)}
                        className="paragraph-area"></textarea>
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="6">
                    <Accordion.Header>Finished Essay</Accordion.Header>
                    <Accordion.Body>
                        <div className="compile-button-div">
                            <Button className="essay-buttons" onClick={CompileEssay}>Compile Essay</Button>
                            <FaRegCopy className="copy-icon" onClick={Copyfinishedessay}/>
                            <RiDownload2Fill className="download-icon" onClick={() => downloadAsWordFile(finish, 'document')}/>

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
  