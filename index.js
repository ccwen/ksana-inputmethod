var getIME=function() {
	return [
		{name:"ITRANS",ime:require("./romanized/itrans")}
		,{name:"Devanagari",ime:require("./indic/devanagari")}
	]
}
module.exports=getIME;