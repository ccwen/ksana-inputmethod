var getIME=function() {
	return [
		{name:"ITRANS",ime:require("./romanized/itrans")}
		,{name:"Wylie",ime:require("./indic/tibetan")}
		//,{name:"Devanagari",ime:require("./indic/devanagari")}
	]
}
module.exports=getIME;