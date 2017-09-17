var colors=['blue','yellow','red','deeppink','purple'];
var i=0;
function changColor() {
    $("#header").css("color",colors[i]);
    i++;
    if(i==colors.length){
        i=0
    }
}
setInterval(changColor,500);

var enemyList=new Array();
var highlightedList=new Array();
var clickedDiv;

function searchIsEnemy(parentId){
    for(var i in enemyList){
        if(enemyList[i]=="#"+parentId){
            return true;
        }
    }
}
function seachIsHighlighted(parentId){
    for(var i in highlightedList){
        if(highlightedList[i]=="#"+parentId){
            return true;
        }
    }
}
function cellClickEvent(parentId){
    if(seachIsHighlighted($(parentId).attr("id"))){
        var pId=parentId;
        var cId="#"+clickedDiv;
        $(pId).html("<p>");
        $($(pId).contents()).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }
}

function imgClickEventWitePawn(parentID){
    if(searchIsEnemy($(parentID).parent().attr("id"))){
        $(parentID).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        whitePawnPath($(parentID).parent().attr("id"));

    }
}

function imgClickEventBlackPawn(parentID){
    if(searchIsEnemy($(parentID).parent().attr("id"))){
        $(parentID).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else{
        setInitialColour();
        blackPawnPath($(parentID).parent().attr("id"));

    }
}

$("#wpone1").click(function (){
    imgClickEventWitePawn("#wpone1");
});
$("#wpone2").click(function (){
    imgClickEventWitePawn("#wpone2");
});
$("#wpone3").click(function (){
    imgClickEventWitePawn("#wpone3");
});
$("#wpone4").click(function (){
    imgClickEventWitePawn("#wpone4");
});
$("#wpone5").click(function (){
    imgClickEventWitePawn("#wpone5");
});
$("#wpone6").click(function (){
    imgClickEventWitePawn("#wpone6");
});
$("#wpone7").click(function (){
    imgClickEventWitePawn("#wpone7");
});
$("#wpone8").click(function (){
    imgClickEventWitePawn("#wpone8");
});

$("#bpone1").click(function (){
    imgClickEventBlackPawn("#bpone1");
});
$("#bpone2").click(function (){
    imgClickEventBlackPawn("#bpone2");
});
$("#bpone3").click(function (){
    imgClickEventBlackPawn("#bpone3");
});
$("#bpone4").click(function (){
    imgClickEventBlackPawn("#bpone4");
});
$("#bpone5").click(function (){
    imgClickEventBlackPawn("#bpone5");
});
$("#bpone6").click(function (){
    imgClickEventBlackPawn("#bpone6");
});
$("#bpone7").click(function (){
    imgClickEventBlackPawn("#bpone7");
});
$("#bpone8").click(function (){
    imgClickEventBlackPawn("#bpone8");
});
function setInitialColour(){
    var divBoxes = $(".higlightedBoxes");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("higlightedBoxes");
    }
    divBoxes = $(".enemyBoxes");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("enemyBoxes");
    }
    for(var l in enemyList){
        enemyList.pop();
    }
    for(var k in highlightedList){
        highlightedList.pop();
    }
    clickedDiv="null";
}

function whitePawnPath(parentID){
    clickedDiv=parentID;
    var res=parentID.split("k");
    if(res[0]>=2){
        if(res[1]==1){
            var en1="#"+(parseInt(res[0])-1)+"k"+(parseInt(res[1])+1);
            if($(en1).contents().attr("class")=="teamBlack"){
                $(en1).addClass("enemyBoxes");
                enemyList.push(en1);
            }
        }else if(res[1]==8){
            var en2="#"+(parseInt(res[0])-1)+"k"+(parseInt(res[1])-1);
            if($(en2).contents().attr("class")=="teamBlack"){
                $(en2).addClass("enemyBoxes");
                enemyList.push(en2);
            }
        }else{
            var en3="#"+(parseInt(res[0])-1)+"k"+(parseInt(res[1])+1);
            if($(en3).contents().attr("class")=="teamBlack"){
                $(en3).addClass("enemyBoxes");
                enemyList.push(en3);
            }
            var en4="#"+(parseInt(res[0])-1)+"k"+(parseInt(res[1])-1);
            if($(en4).contents().attr("class")=="teamBlack"){
                $(en4).addClass("enemyBoxes");
                enemyList.push(en4);
            }
        }

        if(res[0]==7){
            var en5="#"+(parseInt(res[0])-1)+"k"+(parseInt(res[1]));
            if($(en5).html()==""){
                $(en5).addClass("higlightedBoxes");
                highlightedList.push(en5);
                var en6="#"+(parseInt(res[0])-2)+"k"+(parseInt(res[1]));
                if($(en6).html()==""){
                    $(en6).addClass("higlightedBoxes");
                    highlightedList.push(en6);
                }
            }
        }else{
            var en7="#"+(parseInt(res[0])-1)+"k"+(parseInt(res[1]));
            if($(en7).html()==""){
                $(en7).addClass("higlightedBoxes");
                highlightedList.push(en7);
            }
        }
    }
}
function blackPawnPath(parentID){
    clickedDiv=parentID;
    var res=parentID.split("k");
    if(res[0]<=7){
        if(res[1]==1){
            var en1="#"+(parseInt(res[0])+1)+"k"+(parseInt(res[1])+1);
            if($(en1).contents().attr("class")=="teamWhite"){
                $(en1).addClass("enemyBoxes");
                enemyList.push(en1);
            }
        }else if(res[1]==8){
            var en2="#"+(parseInt(res[0])+1)+"k"+(parseInt(res[1])-1);
            if($(en2).contents().attr("class")=="teamWhite"){
                $(en2).addClass("enemyBoxes");
                enemyList.push(en2);
            }
        }else{
            var en3="#"+(parseInt(res[0])+1)+"k"+(parseInt(res[1])+1);
            if($(en3).contents().attr("class")=="teamWhite"){
                $(en3).addClass("enemyBoxes");
                enemyList.push(en3);
            }
            var en4="#"+(parseInt(res[0])+1)+"k"+(parseInt(res[1])-1);
            if($(en4).contents().attr("class")=="teamWhite"){
                $(en4).addClass("enemyBoxes");
                enemyList.push(en4);
            }
        }

        if(res[0]==2){
            var en5="#"+(parseInt(res[0])+1)+"k"+(parseInt(res[1]));
            if($(en5).html()==""){
                $(en5).addClass("higlightedBoxes");
                highlightedList.push(en5);
                var en6="#"+(parseInt(res[0])+2)+"k"+(parseInt(res[1]));
                if($(en6).html()==""){
                    $(en6).addClass("higlightedBoxes");
                    highlightedList.push(en6);
                }
            }
        }else{
            var en7="#"+(parseInt(res[0])+1)+"k"+(parseInt(res[1]));
            if($(en7).html()==""){
                $(en7).addClass("higlightedBoxes");
                highlightedList.push(en7);
            }
        }
    }
}


$("#1k1").click(function (){
    cellClickEvent("#1k1");
});
$("#1k2").click(function (){
    cellClickEvent("#1k2");
});
$("#1k3").click(function (){
    cellClickEvent("#1k3");
});
$("#1k4").click(function (){
    cellClickEvent("#1k4");
});
$("#1k5").click(function (){
    cellClickEvent("#1k5");
});
$("#1k6").click(function (){
    cellClickEvent("#1k6");
});
$("#1k7").click(function (){
    cellClickEvent("#1k7");
});
$("#1k8").click(function (){
    cellClickEvent("#1k8");
});

$("#2k1").click(function (){
    cellClickEvent("#2k1");
});
$("#2k2").click(function (){
    cellClickEvent("#2k2");
});
$("#2k3").click(function (){
    cellClickEvent("#2k3");
});
$("#2k4").click(function (){
    cellClickEvent("#2k4");
});
$("#2k5").click(function (){
    cellClickEvent("#2k5");
});
$("#2k6").click(function (){
    cellClickEvent("#2k6");
});
$("#2k7").click(function (){
    cellClickEvent("#2k7");
});
$("#2k8").click(function (){
    cellClickEvent("#2k8");
});
$("#3k1").click(function (){
    cellClickEvent("#3k1");
});
$("#3k2").click(function (){
    cellClickEvent("#3k2");
});
$("#3k3").click(function (){
    cellClickEvent("#3k3");
});
$("#3k4").click(function (){
    cellClickEvent("#3k4");
});
$("#3k5").click(function (){
    cellClickEvent("#3k5");
});
$("#3k6").click(function (){
    cellClickEvent("#3k6");
});
$("#3k7").click(function (){
    cellClickEvent("#3k7");
});
$("#3k8").click(function (){
    cellClickEvent("#3k8");
});
$("#4k1").click(function (){
    cellClickEvent("#4k1");
});
$("#4k2").click(function (){
    cellClickEvent("#4k2");
});
$("#4k3").click(function (){
    cellClickEvent("#4k3");
});
$("#4k4").click(function (){
    cellClickEvent("#4k4");
});
$("#4k5").click(function (){
    cellClickEvent("#4k5");
});
$("#4k6").click(function (){
    cellClickEvent("#4k6");
});
$("#4k7").click(function (){
    cellClickEvent("#4k7");
});
$("#4k8").click(function (){
    cellClickEvent("#4k8");
});
$("#5k1").click(function (){
    cellClickEvent("#5k1");
});
$("#5k2").click(function (){
    cellClickEvent("#5k2");
});
$("#5k3").click(function (){
    cellClickEvent("#5k3");
});
$("#5k4").click(function (){
    cellClickEvent("#5k4");
});
$("#5k5").click(function (){
    cellClickEvent("#5k5");
});
$("#5k6").click(function (){
    cellClickEvent("#5k6");
});
$("#5k7").click(function (){
    cellClickEvent("#5k7");
});
$("#5k8").click(function (){
    cellClickEvent("#5k8");
});
$("#6k1").click(function (){
    cellClickEvent("#6k1");
});
$("#6k2").click(function (){
    cellClickEvent("#6k2");
});
$("#6k3").click(function (){
    cellClickEvent("#6k3");
});
$("#6k4").click(function (){
    cellClickEvent("#6k4");
});
$("#6k5").click(function (){
    cellClickEvent("#6k5");
});
$("#6k6").click(function (){
    cellClickEvent("#6k6");
});
$("#6k7").click(function (){
    cellClickEvent("#6k7");
});
$("#6k8").click(function (){
    cellClickEvent("#6k8");
});
$("#7k1").click(function (){
    cellClickEvent("#7k1");
});
$("#7k2").click(function (){
    cellClickEvent("#7k2");
});
$("#7k3").click(function (){
    cellClickEvent("#7k3");
});
$("#7k4").click(function (){
    cellClickEvent("#7k4");
});
$("#7k5").click(function (){
    cellClickEvent("#7k5");
});
$("#7k6").click(function (){
    cellClickEvent("#7k6");
});
$("#7k7").click(function (){
    cellClickEvent("#7k7");
});
$("#7k8").click(function (){
    cellClickEvent("#7k8");
});
$("#8k1").click(function (){
    cellClickEvent("#8k1");
});
$("#8k2").click(function (){
    cellClickEvent("#8k2");
});
$("#8k3").click(function (){
    cellClickEvent("#8k3");
});
$("#8k4").click(function (){
    cellClickEvent("#8k4");
});
$("#8k5").click(function (){
    cellClickEvent("#8k5");
});
$("#8k6").click(function (){
    cellClickEvent("#8k6");
});
$("#8k7").click(function (){
    cellClickEvent("#8k7");
});
$("#8k8").click(function (){
    cellClickEvent("#8k8");
});
