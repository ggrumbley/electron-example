const catPic = require('cat-picture');
const image = require('lightning-image-poly');
const remote = require('electron').remote;
const fs = require('fs');


const src = catPic.src;
catPic.remove();

let viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

function save() {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, (err, data) => {
    fs.writeFile('annotation.pdf', data, (err) => {
      if (err) alert('error generating pdf: ' + err.message)
      else alert('PDF Saved')
    });
  });
};

window.addEventListener('keydown', (e) => {
  if (e.keyCode == 80) {
    save();
  }
});
