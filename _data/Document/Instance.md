title: Instance
---

# Create an instance

After reading the last article, you will be able to write lots of animation with ash.play. It's a quit way to create animation. But if you want to use some more powerful feature of ash.js, you should learn how to create an instance of ash and use it.

## use new

```
var myAsh = new Ash.S([{
    dom:document.getElementById('Hello'),
    css:[{width:'100px'},{width:'200px'}],
    time:20
}]); 
```
The parameters are the same as those in Ash.play.

## use ash.play

```
var myAsh = Ash.play([{
    dom:document.getElementById('Hello'),
    css:[{width:'100px'},{width:'200px'}],
    time:20
}]);
```

Actually, ```Ash.play``` will create an instance of Ash.S. You just need to announce a varible to store it.

# More function

You will be able to get more function after you get an instance of Ash.S. You can find some more detail in the Api documents. Here is a demo to show some of them.

### html

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>   
    <link rel="stylesheet" type="text/css" href="test.css" media="screen"> 
    <script src="ash.js"></script>
    <script src="test.js"></script>
  </head>
  <body>
  <!--demo1-->
     <div class='demo_holder'>
        <div id="demo_block" class='demo_block'></div>
     </div>
    <a id='demo_btn_play' class='demo_btn'>Play</a>
    <a id='demo_btn_stop' class='demo_btn'>Stop</a>
    <a id='demo_btn_repeat' class='demo_btn'>Repeat</a>
  <!--demo1-->
  </body>
</html>
```

### test.css
```
/*demo1*/ 
.demo_block{position:absolute; top:50px; left:0px; width:60px; height:60px; background-color:#64B5F6;border-radius:50%;}
.demo_holder{width: 100%; height: 200px; position: relative;}
/*demo1*/
.demo_btn{display: inline-block; padding: 10px 20px; text-align: center; color: white; border-radius: 4px; background-color: #03A9F4; cursor: pointer;}
.demo_btn:hover{ background-color: #0288D1; }
```
### test.javscript

```
window.onload = function(){
	//demo1
	var block = document.getElementById('demo_block'),
		 myAsh = new Ash.S([{
		    dom: block,
		    css:[{left:'0px',width:'60px',height:'60px'},
		    {left:'400px',width:'40px',height:'40px'}],
		    time:100
		 }]);
	document.getElementById('demo_btn_play').onclick= function(){
		myAsh.play();
	};
	document.getElementById('demo_btn_stop').onclick= function(){
		myAsh.stop();
	};	
	document.getElementById('demo_btn_repeat').onclick= function(){
		myAsh.repeat(Infinity);
	};	
	//demo1
};
```
### demo

demo1