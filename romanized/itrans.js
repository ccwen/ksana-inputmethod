var map={
	"A":"ā",
	"I":"ī",
	"U":"ū",
	"M":"ṃ",
	"N":"m̐",
	"H":"ḥ",
	"T":"ṭ",
	"D":"ḍ",
	"N":"ṇ",
	"S":"ṣ",
	"L":"ḻ",
	"x":"kṣ",
	"|":"।"

}
var convert=function(s) {
	var i=0,o="";
	while (i<s.length) {
		var c=s[i],n=s[i+1];
		var m=map[c];
		if (!m) {
			if (c==="a" && n==="a") {
				o+="ā"; i++;
			} else if (c==="i" && n==="i"){
				o+="I"; i++;
			} else if (c==="u" && n==="u"){
				o+="ū"; i++;
			} else if (c==="." && n==="m"){
				o+="ṃ"; i++;
			} else if (c==="." && n==="m"){
				o+="ṃ"; i++;
			} else if (c==="R" && (n==="R"||n==="^") ){
				var t=s[i+2];
				if (t==="i") {
					o+="ṛ";	i+=2;
				} else if (t==="I") {
					o+="ṝ";	i+=2;
				} else 	{o+=c;}
			} else if (c==="L" && (n==="L"||n==="^") ){
				var t=s[i+2];
				if (t==="i") {
					o+="ḷ";	i+=2;
				} else if (t==="I") {
					o+="ḹ";	i+=2;
				} else 	{o+=c;}
			} else if (c==="N" && n==="^") {
				o+="ṅ";
				i++;
			} else if (c==="~"&& n==="N") {
				o+="ṅ";
				i++;
			} else if (c==="~"&& n==="n") {
				o+="ñ";
				i++;
			} else if (c==="J"&& n==="N") {
				o+="ñ";
				i++;
			} else if (c==="s"&& n==="h") {
				o+="ś";
				i++;
			} else if (c==="s"&& n==="h") {
				o+="ś";
				i++;
			} else if (c==="|"&& n==="|") {
				o+="॥";
				i++;
			} else  		{o+=c;}
		} else {
			o+=m;
		}
		i++;
	}
	return o;
}
var isValid=function(s) {
	return true;
}
module.exports={convert:convert,isValid:isValid}