'use strict';

var fs = require('fs');

//var marked = require('marked');
var RegIsMd  = /\.md$/i,
	RegFirstBlood=/(?:^|[\n\r\v])([^\#\s\t\|]+[^\n\r\v]+)(?:[\n\r\v]|$)/,
	RegPathStart=/^[\.\/]*/;

var DataItem = function(path,name,info){
	this.
	this.Info = info;
};
DataItem.prototype={
	load:function(callback){

	}
};

var DataBase = function(config){
	this.Config = config;
	this.Root = this.Path_DataFolder || './_data/';
	this.Data = {};
	this.TotalMdnum = 0;
	this.init();
};
DataBase.prototype={
	init:function(){
		this.travel(this.Root,this.Data);
		console.log(this.TotalMdnum);
	},
	travel:function(folder,parent){
		var me = this,
			list = fs.readdirSync(folder),
			fileName,
			filePath;
		for(var i in list){
			fileName =list[i];
			filePath = folder+fileName;
			var info = fs.statSync(filePath);
			if(info.isDirectory()){
				parent[fileName] =  {};
				me.travel(filePath+'/',parent[fileName]);
			}else if(RegIsMd.test(filePath)){
				parent[fileName] = new DataItem(filePath,fileName,info);
				me.TotalMdnum++;
			}
		}
	},
	_loaded:function(){
		var me = this;
	},
	load:function(root){
		var me = this;
		for(var i in root){
			if(root[i] instanceof DataItem){
				root[i].load(function(){
					me._loaded();
				});
			//to add protection
			}else{
				me.load(root[i]);
			}
		}

	},
	select:function(path){
		var path = path.replace(RegPathStart,'').split('/'),
			point= this.Data;
		while(path.length>0){
			point =  point[path.shift()];
			if(point==null){
				break;
			}
		}
		return point;
	}
};

var d = new DataBase();

