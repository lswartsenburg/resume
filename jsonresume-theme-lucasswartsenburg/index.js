const Handlebars = require('handlebars');
const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');

const HELPERS = join(__dirname, 'theme/hbs-helpers');

Handlebars.registerHelper('birthDate', require(join(HELPERS, 'birthDate.js')).default);
Handlebars.registerHelper('paragraphSplit', require(join(HELPERS, 'paragraphSplit.js')).default);
Handlebars.registerHelper('spaceToDash', require(join(HELPERS, 'spaceToDash.js')).default);
Handlebars.registerHelper('toLowerCase', require(join(HELPERS, 'toLowerCase.js')).default);
Handlebars.registerHelper('monthYear', require(join(HELPERS, 'monthYear.js')).default);
Handlebars.registerHelper('year', require(join(HELPERS, 'year.js')).default);
Handlebars.registerHelper('dayMonthYear', require(join(HELPERS, 'dayMonthYear.js')).default);

function render(resume) {
  const css = readFileSync(`${__dirname}/style.css`, 'utf-8');
  const tpl = readFileSync(`${__dirname}/entire-page.hbs`, 'utf-8');
  const partialsDir = join(__dirname, 'theme/partials');
  const filenames = readdirSync(partialsDir);

  filenames.forEach((filename) => {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) return;
    const name = matches[1];
    const filepath = join(partialsDir, filename);
    const template = readFileSync(filepath, 'utf8');
    Handlebars.registerPartial(name, template);
  });

  return Handlebars.compile(tpl)({
    css,
    resume,
  });
}

module.exports = { render };
