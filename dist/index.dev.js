"use strict";

var img;
var upload;
var saturate;
var contrast;
var brightness;
var sepia;
var grayscale;
var blur;
var hueRotate;
var download;
var reset;
var imgBox;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.onload = function () {
  img = document.getElementById("img");
  upload = document.getElementById("upload");
  saturate = document.getElementById("saturate");
  contrast = document.getElementById("contrast");
  brightness = document.getElementById("brightness");
  sepia = document.getElementById("sepia");
  grayscale = document.getElementById("grayscale");
  blur = document.getElementById("blur");
  hueRotate = document.getElementById("hue-rotate");
  download = document.getElementById("download");
  reset = document.querySelector("span");
  imgBox = document.querySelector(".imgbox");
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  download.style.display = "none";
  reset.style.display = "none";
  imgBox.style.display = "none";
  typeOfImg.style.display = "none";

  upload.onchange = function () {
    // alert("upload Button change")
    download.style.display = "block";
    reset.style.display = "block";
    imgBox.style.display = "block";
    typeOfImg.style.display = "block";
    var file = new FileReader();
    file.readAsDataURL(upload.files[0]);

    file.onload = function () {
      img.src = file.result;
    }; //console.log(img);  


    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.style.display = "none";
    };
  };
};

function resetValue() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  hueRotate.value = "0";
}

;
var data = document.querySelectorAll("[type = range]");
var objRange = {};

for (var i = 0; i < data.length; i++) {
  objRange[data[i].id] = data[i].value;
} // let keysOfObjRange = Object.keys(objRange);


var _loop = function _loop(_i) {
  data[_i].onchange = function () {
    objRange[data[_i].id] = document.getElementById("".concat(data[_i].id)).value;
    ctx.filter = "\n            saturate(".concat(objRange.saturate, "%)\n            contrast(").concat(objRange.contrast, "%)\n            brightness(").concat(objRange.brightness, "%)\n            sepia(").concat(objRange.sepia, "%)\n            grayscale(").concat(objRange.grayscale, ")\n            blur(").concat(objRange.blur, "px)\n            hue-rotate(").concat(objRange["hue-rotate"], "deg)\n            ");
    /* ${keysOfObjRange[0]}(${objRange[keysOfObjRange[0]]}%)
    ${keysOfObjRange[1]}(${objRange[keysOfObjRange[1]}%)
    ${keysOfObjRange[2]}(${objRange[keysOfObjRange[2]]}%)
    ${keysOfObjRange[3]}(${objRange[keysOfObjRange[3]]}%)
    ${keysOfObjRange[4]}(${objRange[keysOfObjRange[4]]})
    ${keysOfObjRange[5]}(${objRange[keysOfObjRange[5]]}px)
    ${keysOfObjRange[6]}(${objRange[keysOfObjRange[6]]}deg) */

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    download.onclick = function () {
      var typeOfImg = document.getElementById("typeOfImg");
      var value = typeOfImg.options[typeOfImg.selectedIndex].value;

      if (value === "image/jpeg") {
        download.href = canvas.toDataURL("image/jpeg");
      } else {
        download.href = canvas.toDataURL();
      }
    };
  };
};

for (var _i = 0; _i < data.length; _i++) {
  _loop(_i);
}
/*let filters=document.querySelectorAll("ul li input");

for(let i = 0; i < filters.length; i++){

}*/
// filters.forEach(inputs =>{
// filter.addEventListener(`input`,function(){
//     console.log('Something changes',saturate.value);
//     img.style.filter = `
//     saturate(${saturate.value}%)
//     contrast(${contrast.value}%)
//     brightness(${brightness.value}%)
//     sepia(${sepia.value}%)
//     grayscale (${grayscale.value})
//     blur(${blur.value}px)
//     hue-rotate(${hueRotate.value}deg) 
//     `
// })
// });