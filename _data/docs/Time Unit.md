Title: Time Unit
SortIndex: 5
---

# How browser count time?

## Browser core

In the past, we usually use setTimeout and setInterval to build HTML animation. The time unit for thoes function is millisecond. Because of the way browser run its thread, the time unit here could not be the real time unit. The thread in another big thing, you can find something to learn anywhere else. 

In Ash, we give up the real time unit and use frame instead. If you have any animation foundation or flash experience, you may know what's frame and keyframe. In short, frame is each static shot for animation. Ash.js requires you to input 2 keyframe for each period of animation, and it will generate its tween animation automatically.

## New Api

Benefit from the new HTML5 api, we have new function to control the animation. ```requestAnimationFrame``` is a very powerful api, ash.js will try to reader HTML in each its each callback.

# Parameters in Ash.js

## time and delay

The time unit is mostly used in Sprite. (delay and time) It's so simple to understand.

```
Ash.play([{
    dom:document.getElementById('Hello'),
    css:[{width:'100px'},{width:'200px'}],
    time:20,
    delay:10
}]);
```
## reander gap

Here I want to mention the secord arugments in the function ```Ash.play```. It's an optional integer. It defines the frequence that Ash.js render the HTML. Here is a demo.

### html
  <!--demo1-->
  	 <div class='demo_holder'>
    	<div id="demo_block" class='demo_block'></div>
    	<div id="demo_block2" style='top:100px;' class='demo_block'></div>
  	 </div>
  <!--demo1-->
  
### css

```
/*demo1*/ 
.demo_block{position:absolute; top:10px; left:0px; width:60px; height:60px; background-color:#64B5F6;border-radius:50%;}
.demo_holder{width: 100%; height: 200px; position: relative;}
/*demo1*/
```

### javascript

```
	//demo1
	var myAsh = new Ash.S([{
		    dom: document.getElementById('demo_block'),
		    css:[{left:'0px',width:'60px',height:'60px'},
		    {left:'400px',width:'40px',height:'40px'}],
		    time:200,
		    tween:'bounceEaseIn'
		 }]),
		 myAsh2 = new Ash.S([{
		    dom: document.getElementById('demo_block2'),
		    css:[{left:'0px',width:'60px',height:'60px'},
		    {left:'400px',width:'40px',height:'40px'}],
		    time:200,
		    tween:'bounceEaseIn'
		 }],4);
	myAsh.repeat(Infinity);
	myAsh2.repeat(Infinity);
	//demo1
```

### demo

demo1