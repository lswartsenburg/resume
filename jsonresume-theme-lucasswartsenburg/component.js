import React from "react";
import "./style.css";
import resumeData from "../resume.yaml";

var resumeTemplate = require("./component-only.hbs");

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    // We declare the state as shown below
    this.html = resumeTemplate({ resume: resumeData });
  }
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.html }}></div>;
  }
}
