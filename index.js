
let img
let upload
let saturate
let contrast
let brightness
let sepia
let grayscale
let blur
let hueRotate
let download 
let reset
let imgBox
let canvas=document.getElementById(`canvas`)
let ctx =canvas.getContext(`2d`)


window.onload = () => {
    img=document.getElementById(`img`)
    upload=document.getElementById(`upload`)
    saturate=document.getElementById(`saturate`)
    contrast=document.getElementById(`contrast`)
    brightness=document.getElementById(`brightness`)
    sepia=document.getElementById(`sepia`)
    grayscale=document.getElementById(`grayscale`)
    blur=document.getElementById(`blur`)
    hueRotate=document.getElementById(`hue-rotate`)
    download = document.getElementById(`download`)
    reset=document.querySelector(`span`)
    imgBox=document.querySelector(`.imgbox`)
    canvas=document.getElementById(`canvas`)
    ctx =canvas.getContext(`2d`)

    
    
    download.style.display=`none`;
    reset.style.display=`none`;
    imgBox.style.display=`none`;


    upload.onchange = () => {
        alert("upload Button change")
        download.style.display=`block`;
        reset.style.display=`block`;
        imgBox.style.display=`block`;
        let file=new FileReader();
        file.readAsDataURL(upload.files[0]);
        file.onload=function(){
            img.src=file.result;
        }
        //console.log(img);  
        img.onload=() =>{
            canvas.width = img.width;
            canvas.height = img.height;
            
            ctx.drawImage(img,0,0,canvas.width, canvas.height)
            img.style.display=`none`
        }
    }
  
    
}
function resetValue(){
    ctx.drawImage(img,0,0,canvas.width, canvas.height)

    ctx.filter=`none`;
    saturate.value=`100`;
    contrast.value=`100`;
    brightness.value=`100`;
    sepia.value=`0`;
    grayscale.value=`0`;
    blur.value=`0`;
    hueRotate.value=`0`;
};




let data = document.querySelectorAll("[type = range]");
let objRange = {

}

for(let i = 0; i < data.length; i++){
    objRange[data[i].id] = data[i].value;
}

// let keysOfObjRange = Object.keys(objRange);

for(let i = 0; i < data.length; i++){

    
    data[i].onchange = () => {
        
        objRange[data[i].id] = document.getElementById(`${data[i].id}`).value;


        ctx.filter = `
            saturate(${objRange.saturate}%)
            contrast(${objRange.contrast}%)
            brightness(${objRange.brightness}%)
            sepia(${objRange.sepia}%)
            grayscale(${objRange.grayscale})
            blur(${objRange.blur}px)
            hue-rotate(${objRange["hue-rotate"]}deg)
            `
            /* ${keysOfObjRange[0]}(${objRange[keysOfObjRange[0]]}%)
            ${keysOfObjRange[1]}(${objRange[keysOfObjRange[1]}%)
            ${keysOfObjRange[2]}(${objRange[keysOfObjRange[2]]}%)
            ${keysOfObjRange[3]}(${objRange[keysOfObjRange[3]]}%)
            ${keysOfObjRange[4]}(${objRange[keysOfObjRange[4]]})
            ${keysOfObjRange[5]}(${objRange[keysOfObjRange[5]]}px)
            ${keysOfObjRange[6]}(${objRange[keysOfObjRange[6]]}deg) */
            ctx.drawImage(img,0,0,canvas.width,canvas.height)
            download.onclick = () =>{
                download.href = canvas.toDataURL()
            }
        }
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
