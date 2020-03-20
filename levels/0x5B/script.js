/*----------------------------------------*\
  256^3 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2020-02-06 23:31:08
  @Last Modified time: 2020-02-06 23:42:31
\*----------------------------------------*/

AppManager.ready(function(){
	InteractionHelper.onMouseEnter(".button", souris);
});

function souris(event){
	//console.log(event);
	//AppManager.levelComplete();
    document.querySelector(".button").classList.add("hide");
    document.querySelector("#resize").classList.remove("hide");
    document.querySelector("#resize").classList.add("grand");
    InteractionHelper.onTimeout(1000,  wait);
}

function wait(event){
    document.querySelector("#resize").classList.remove("grand");
    document.querySelector("#resize").classList.add("petit");
    InteractionHelper.onWindowResize( end);
}


function end(event){
	//console.log(event);
	AppManager.levelComplete();
}