$(document).ready(function(){
    // alert();
    $('.owl-carousel').owlCarousel({
    	items:2,
    	center:true,
    	lazyLoad:true,
    	autoplay:true,
    	animateOut:true,
    	animateIn:true,
    	loop:true,
    	autoplayHoverPause:true,
    	autoWidth:true,
    	dots:false,
    	autoplayTimeout:2000
    	// responsive:{
	    //       0:{
	    //           items:1
	    //       },
	    //       600:{
	    //           items:3
	    //       },
	    //       1000:{
	    //           items:5
	    //       }
	    //  }
    }); 
    var rotation2 = function(){
        $('.introduce_wrap img').rotate({
            angle: 0, 
            animateTo: 360, 
            callback: rotation2,
            easing: function(x,t,b,c,d){
                return c*(t/d)+b;
            }
        },2000);
    }
    rotation2();



    // introduce页面
    // 选项卡
            //var btns = document.getElementsByTagName("button");//获取所有按钮
            //var divs = document.getElementById("divs").getElementsByTagName("div");//获取所有盒子
    var btns = $(".introduce_btn input");
    var divs = $(".introduce_con > div");

    for(var i = 0;i<btns.length;i++){ //循环遍历所有table栏按钮
        btns[i].index = i; //获取索引号 从0开始
        btns[i].onclick = function(){ 
            //让所有btns类名都清空
            for(var i = 0;i<btns.length;i++){ //点击按钮后 清除所有按钮和盒子的类名
                btns[i].className = "";
                divs[i].className = "";
            }
            //当前点击的按钮添加类名
            this.className = "selet";
            divs[this.index].className = "show"; //给点击的按钮所对应的盒子添加类名
        }
    }




// appreciate页面
    var imgs = $(".introduce_con table img");
    var audio = $(".music1 audio");
    for(var i = 0;i<imgs.length;i++){
        imgs[i].index=i;
        imgs[i].onclick=function () {
            audio[0].src="./videos/"+this.index+".mp3";
            audio[0].autoplay="autoplay";
        }
    }






















});