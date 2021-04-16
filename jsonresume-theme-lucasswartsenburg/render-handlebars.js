var resumeTemplate = require("./component-only.hbs");


function renderHandlebars(resume) {
  return resumeTemplate(resume);
}

export default renderHandlebars;
