import React, { useRef } from "react";
import { render } from "react-dom";

import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import "./App.css";

function App(props) {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current.editor;

    unlayer.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onReady = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // For example, if you have a template design JSON, you can load it like this:
    // const templateJson = { /* DESIGN JSON GOES HERE */ };
    // unlayer.loadDesign(templateJson);
    // Alternatively, you can export the design HTML, if you have it, like this:
    // unlayer.exportHtml((data) => {
    //   const { design, html } = data;
    //   // Do something with the design and/or HTML
    // });
  };

  return (
    <>
      <div className="widget">
        <h3 className="widget-title">React Email Editor</h3>
        <div style={{ textAlign: "right" }}>
          <button className="theme-btn" onClick={exportHtml}>
            Export HTML
          </button>
        </div>

        <EmailEditor ref={emailEditorRef} onReady={onReady} />
      </div>
    </>
  );
}

export default App;
