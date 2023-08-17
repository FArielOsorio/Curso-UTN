let numbers = ["erdinger","corona","delirium"];

show(numbers);







function show(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function showDom(element, arr){
    document.getElementById(element).innerHTML="";
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}