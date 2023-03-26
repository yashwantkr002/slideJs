let flag=0;


function fun(x){

    flag=flag+x;
    show(flag);
}
show(flag);
function show(num){
    let slide=document.getElementsByClassName("slide");
    console.log(slide);
    if(num==slide.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slide.length-1;
        num=slide.length-1;
    }

    for(y of slide){
        y.style.display="none" 
    }
    slide[num].style.display="block";
}
setInterval(function(){
        flag+=1;
        show(flag);
},5000);



