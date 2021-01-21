const IMAGES = document.querySelectorAll('class');
// keys = data-type attributes
const SIZES = {
  showcase: "100vw",
  reason: "(max-width: 799px) 100vw, 372px",
  feature: "(max-width: 799px) 100vw, 558px",
  story: "(max-width: 799px) 100vw, 670px",
}

function makeSrcset(imgSrc) {
  let markup = [];
  let width = 400; //each image is plus 400

  for (let i = 0; i < 5; i++) { //there are 4 images
    markup[i] = imgSrc + '-' + width + '.jpg' + width + 'w'; // name file
    width += 400;
  }

  return markup.join(); //The join() method returns the array as a string.
}

for(let i = 0; i < IMAGES.length; i++) {
  //set the src
  let imgSrc = IMAGES[i].getAttribute('src');
  imgSrc = imgSrc.slice(0, -8) //remove the difference between two name;
  let srcset = makeSrcset(imgSrc);
  IMAGES[i].setAttribute('srcset', srcset);

  let type = IMAGES[i].getAttribute('type');
  let sizes = SIZES[type];
  IMAGES[i].setAttribute('sizes', sizes); 

}