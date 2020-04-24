var a=[
	{
		username:"akshay",
		password:"24"
	}
];

var news=[
	{
	 user:"anjali",
	 post:"feeling happy"
	},
	{
	 user:"rajesh",
	 post:"i m rich"
	}
]

var usernameprompt=prompt("enter username");
var passwordprompt=prompt("enter password");

signIn(usernameprompt,passwordprompt);

function signIn(user, pass){
	if(user === a[0].username && pass === a[0].password)
	{
		console.log(news);
	}
	else
	{
	 alert("incorrect username or password");
	}

}
