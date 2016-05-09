title: Tween
---

# use tween

When you create the instance of ```Ash.S```, you can set the easing formula for each scripts.

### html

```
<!--demo1-->
 <div class='demo_holder'>
    <div id="demo_block" class='demo_block'></div>
 </div>
<!--demo1-->
```

### css

```
/*demo1*/ 
.demo_block{position:absolute; top:50px; left:0px; width:60px; height:60px; background-color:#64B5F6;border-radius:50%;}
.demo_holder{width: 100%; height: 200px; position: relative;}
/*demo1*/
```


### javascript
```
	//demo1
	var block = document.getElementById('demo_block'),
		 myAsh = new Ash.S([{
		    dom: block,
		    css:[{left:'0px',width:'60px',height:'60px'},
		    {left:'400px',width:'40px',height:'40px'}],
		    time:200,
		    tween:'bounceEaseIn'
		 }]);
	myAsh.repeat(Infinity);
	//demo1
```
### demo

demo1

# define your own easing formula

To define your own easing formula, you will need to store it at ```Ash.Tween```.

```
/*
* define easing formula
* @param t {num} current time
* @param b {num} beginning value
* @param c {num} change in value
* @param d {num} duration
*/
Ash.Tween.MyTweenName = function(t,b,c,d){
    return c*t/d + b;
};
//use it
Ash.play([{
    dom:document.getElementById('Hello'),
    css:[{width:'100px'},{width:'200px'}],
    time:20,
    tween:'MyTweenName'    // Use your own easing formula
}]);
```