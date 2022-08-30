let arraySize = document.querySelector('#arrSize');
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    generateNewArray(parseInt(arraySize.value));
});



let array = [];


generateNewArray();

function generateNewArray(noOfBars=60)
{
    deleteChild();
    array=[];
    for(let i=0;i<noOfBars;i++)
    {
        array.push(Math.floor(Math.random()*250)+1);
    }
    console.log(array);
    const bars=document.querySelector("#bars");
    for (let i=0; i<noOfBars; i++) {
        const bar=document.createElement("div");
        bar.style.height=`${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}
const genArray=document.querySelector(".genArray")
genArray.addEventListener("click",function(){
    generateNewArray(arraySize.value);
})




function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let delay=260;
let delayElement=document.querySelector('#arrSpeed');
delayElement.addEventListener('input',function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay=320-parseInt(delayElement.value);
});
function swap(a,b)
{
    console.log('In swap()');
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
}
function disableSortingBtn(){
    document.querySelector(".bubblesort").disabled = true;
    document.querySelector(".insertionsort").disabled = true;
    document.querySelector(".mergesort").disabled = true;
    document.querySelector(".quicksort").disabled = true;
    document.querySelector(".selectionsort").disabled = true;
}


function enableSortingBtn(){
    document.querySelector(".bubblesort").disabled = false;
    document.querySelector(".insertionsort").disabled = false;
    document.querySelector(".mergesort").disabled = false;
    document.querySelector(".quicksort").disabled = false;
    document.querySelector(".selectionsort").disabled = false;
}


function disableSizeSlider(){
    document.querySelector("#arrSize").disabled = true;
}

function disableSpeedSlider(){
    document.querySelector("#arrSpeed").disabled = true;
}

function enableSpeedSlider(){
    document.querySelector("#arrSpeed").disabled = false;
}


function enableSizeSlider(){
    document.querySelector("#arrSize").disabled = false;
}


function disableNewArrayBtn(){
    document.querySelector(".genArray").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector(".genArray").disabled = false;
}






        
    
