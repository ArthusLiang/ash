title: IRD
---

# change dom's attributes while playing animation

Ash.js can not only change make the css animation, but also change dom's attibutes. The only thing you need to do is to set 'attr' property in scripts.

### javascript

```
var block = document.getElementById('demo_block'),
	myAsh = new Ash.S([{
		dom: block,
		css:[{left:'0px',width:'60px',height:'60px'},
	   		  {left:'400px',width:'40px',height:'40px'}],
    	time:200,
    	tween:'bounceEaseIn',
    	attr:[{'data-i':0},{'data-i':1}]
 	}]);
myAsh.repeat(Infinity);
```

'attr' is useful in SVG animation and MVVM framework

# build your own IRD

We the core parts which deal the 'css' and 'attr' as IRD. You can define your own IRD according to the following code.

```
var MyIRD = new function(){
    this.Name = 'MyIRD';
    this.before = function(time){

    };
    this.excute = function(sprite,time){
        var arg = sprite.MyIRD;
        //excute your code here
    };
    this.preExcute = function(time){

    };
};
Ash.loadIRD(MyIRD);
//use
Ash.play([{
	MyIRD:{},
	time:100
}]);
```