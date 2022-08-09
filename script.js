let currency1=document.querySelector("#currency1");
let currency2=document.querySelector("#currency2");
let imageDiv1=document.querySelector(".image1");
let imageDiv2=document.querySelector(".image2")
let img1=document.createElement("img");
let money=document.querySelector("#money");
let output=document.querySelector("#output");
let changeBtn=document.querySelector("#change");

let url="https://api.exchangerate.host/convert?from=USD&to=EUR";

img1.setAttribute("class","flag");
img1.src=`./${currency1.value}.png`;
imageDiv1.appendChild(img1);
let img2=document.createElement("img");
img2.setAttribute("class","flag");
img2.src=`./${currency2.value}.png`;
imageDiv2.appendChild(img2)
function setFlag1(e){
    e.preventDefault;
    img1.src=`./${currency1.value}.png`;


}
function setFlag2(e){
    e.preventDefault;
    img2.src=`./${currency2.value}.png`;
   
}

 function changeAPI(){
    
    let val1=url.substring(43,46);
    let val2=currency1.value;
    let val3=url.substring(50,53);
    let val4=currency2.value;
    let newURL= url.replace(`${val1}`,`${val2}`);
    let newURLLast=newURL.replace(`${val3}`,`${val4}`)
    return newURLLast

}
changeBtn.addEventListener("click",function(){
  let api=changeAPI();
 fetch(api).then(res=>res.json()).then(val=>output.value=Math.round(val.info.rate*money.value))
});
