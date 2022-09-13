let str="nitin";
let str2="";
for(let i=str.length;i<=0;i--){
		
	str2[i]+=str;
}
if(str==str2){
	console.log("Palindrome");
}else{

	console.log("Not a Palindrome");
}