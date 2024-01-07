import React from "react"
import "../css sheets/essay-page.css";


function Persuasive() {
  
    return (
      <>
        <div className="essay-div">
            <h1>Persuasive Essay</h1>
            <div>
                <h2>Title</h2>
                <input className="title-input"></input>
            </div>

            <div>
                <h2>Introduction</h2>
                <textarea className="paragraph-area"></textarea>
            </div>

            <div>
                <h2>Body Paragraph 1</h2>
                <textarea className="paragraph-area"></textarea>
            </div>

            <div>
                <h2>Body Paragraph 2</h2>
                <textarea className="paragraph-area"></textarea>
            </div>

            <div>
                <h2>Body Paragraph 3</h2>
                <textarea className="paragraph-area"></textarea>
            </div>

            <div>
                <h2>Conclusion</h2>
                <textarea className="paragraph-area"></textarea>
            </div>
        </div>
      </>
    )
  }

  export default Persuasive
  