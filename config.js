var CONFIG = {
  // your website's title
  document_title: "JavaScript 标准参考教程",

  // index page
  index: "README.md",

  // sidebar file
  sidebar_file: "sidebar.md",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/wuliupo/jstutorial/edit/gh-pages",
  git_url: "https://github.com/wuliupo/jstutorial",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

