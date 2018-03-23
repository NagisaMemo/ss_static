var footer = document.querySelector("div#jiesuanbar");
const maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

function func2()
{
    "use strict";
    const y = window.scrollY;
    const trigger = maxY - 25;
    if (y >= trigger) {
        footer.style.marginBottom = "80px";
        footer.style.transition = "margin-bottom 0.25s";
    } else {
        footer.style.margin = "0";
    }
}

function func1()
{
    window.addEventListener("scroll",func2)
}

window.onload = func1;

//购物车页面在不能提交时“确认”按钮是暗的，至少选中了一个之后就亮起来的功能
function countchecked(){
    let count=0;
    $(".formdata").each(function(i,div){
        const selected=$(div).eq(0).find("input").is(':checked');
        if(selected){
            count++;
            console.log(count);
        }
    });
    if(count==0){
        $("#confbutt").css("background","#aaa")
    }
    else{
        $("#confbutt").css("background","#333")
    }
}
countchecked();
$(".selectallinput").click(function(){
    countchecked();
});
