/**
 * Created by Admin on 15.03.2016.
 */

var style = {
    fill: "transparent",
    stroke: "#fff",
    strokeWidth: 5
};

var circlestyle = {
    stroke: "#5affd1",
    fill: "#fff",
    strokeWidth: 5
};


var paper = Snap('#paper');

//setInterval(function(){
//    console.log("works" );
//},1000);


var line = paper.path("M 50,50").attr(style);


paper.click(function(event){

        var b = line.getSubpath().end;
    b += " L "+ event.offsetX + " " + event.offsetY ;
        line.attr({path:b});

    paper.circle(event.offsetX, event.offsetY, 15)
        .attr(circlestyle)
        .mouseover(function(event){
            this.stop().animate({r:20},500,mina.elastic())
        })
        .mouseout(function(event){
            this.stop().animate({r:15},200,mina.easeout())
        })
        .drag();
});


