var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_X = 10;
player_Y = 10;
var player_objects = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_objects = Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top : player_Y,
            left : player_X
        });
        canvas.add(player_objects);
    });
   
}

function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top : player_Y,
        left : player_X
    });
    canvas.add(block_image_object);
});
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);

if (keyPressed == '38'){
    up ();
    console.log("up");
}

if (keyPressed == '40'){
    down ();
    console.log("down");
}

if (keyPressed == '37'){
    left ();
    console.log("left");
}

if (keyPressed == '39'){
    right ();
    console.log("right");
}

if (keyPressed == '87'){
    new_image("wall.jpg");
    console.log("w");
}

if (keyPressed == '71'){
    new_image("ground.png");
    console.log("g");
}

if (keyPressed == '76'){
    new_image("light_green.png");
    console.log("l");
}

if (keyPressed == '84'){
    new_image("trunk.jpg");
    console.log("t");
}

if (keyPressed == '82'){
    new_image("roof.jpg");
    console.log("r");
}

if (keyPressed == '89'){
    new_image("yellow_wall.png");
    console.log("y");
}

if (keyPressed == '68'){
    new_image("dark_green.png");
    console.log("d");
}

if (keyPressed == '85'){
    new_image("unique.png");
    console.log("u");
}

if (keyPressed == '67'){
    new_image("cloud.jpg");
    console.log("c");
}

if (e.shiftKey == true && keyPressed == '80'){
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    console.log("shift + p");
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if (e.shiftKey == true && keyPressed == '77'){
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    console.log("shift + m");
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

}

function up(){
    if (player_Y>=0){
        player_Y=player_Y-block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When up arrow key is pressed, X =" + player_X + "Y =" + player_Y);
        canvas.remove(player_objects);
        player_update();
    }
}

function down(){
    if (player_Y<=500){
        player_Y=player_Y+block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When down arrow key is pressed, X =" + player_X + "Y =" + player_Y);
        canvas.remove(player_objects);
        player_update();
    }
}

function left(){
    if (player_X>0){
        player_X=player_X-block_image_width;
        console.log("Block Image Width = " + block_image_width);
        console.log("When left arrow key is pressed, X =" + player_X + "Y =" + player_Y);
        canvas.remove(player_objects);
        player_update();
    }
}

function right(){
    if (player_X<=850){
        player_X=player_X+block_image_width;
        console.log("Block Image Width = " + block_image_width);
        console.log("When right arrow key is pressed, X =" + player_X + "Y =" + player_Y);
        canvas.remove(player_objects);
        player_update();
    }
}