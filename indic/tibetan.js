var wylie=require("./wylie");
var convert=function(s){
	return wylie.fromWylie(s);
}
var isValid=function(s){
	return true;
}
module.exports={convert:convert,isValid:isValid}