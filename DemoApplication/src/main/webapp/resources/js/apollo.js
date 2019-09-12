$(document).ready(function()
{
	$("#errorValueFname").hide();
	$("#errorValueLname").hide();
	$("#errorValueDate").hide();
	$("#errorValueGender").hide();
	$("#errorValueNumber").hide();
	$("#errorValueAddress").hide();
	$("#submitButton").attr('disabled',true);
    var today = new Date();
    var date = today.getDate();
     var month = today.getMonth()+1;
     var year = today.getFullYear();
   if((date)<10)
   {
   	date = 0+date.toString();
   }
   if(month<10)
   {
   	month = 0+month.toString();
   }
 var maxDate = year + '-' + month + '-' + date;
 $("#dob").attr('max',maxDate);
$.buttonEnableFunction = function()
{
	
if(($("#fName").val() != "") && ($("#lName").val() != "") && ($("#dob").val() != "mm/dd/yyyy") && ($("#genderSelect").val() != "Select") &&
($("#phno").val() != "") && ($("#address").val() != ""))
{
	$("#submitButton").attr('disabled',false);
}
else{
	$("#submitButton").attr('disabled',true);
}
}
$("#fName").focusout(function()
	{
       var valueCheck = $("#fName").val(); 
if(valueCheck == "")
{
	$("#errorValueFname").show();
}
else{
		$("#errorValueFname").hide();
		$.buttonEnableFunction();
}
}
);
$("#lName").focusout(function()
	{
       var valueCheck = $("#lName").val(); 
if(valueCheck == "")
{
	$("#errorValueLname").show();
}
else{
		$("#errorValueLname").hide();
		$.buttonEnableFunction();
}
}
);
$("#address").focusout(function()
	{
       var valueCheck = $("#address").val(); 
if(valueCheck == "")
{
	$("#errorValueAddress").show();
}
else{
		$("#errorValueAddress").hide();
		$.buttonEnableFunction();
}
}
);
$("#phno").focusout(function()
	{
       var valueCheck = $("#phno").val(); 
if(valueCheck == "" || (valueCheck.length>10))
{
	$("#phno").val("");
	$("#errorValueNumber").show();
}
else{
		$("#errorValueNumber").hide();
		$.buttonEnableFunction();
}
}
);
	$("#genderSelect").focusout(function()
	{
       var genderValue = $("#genderSelect").val(); 
if(genderValue == "Select")
{
	$("#errorValueGender").show();
}
else{
		$("#errorValueGender").hide();
		$.buttonEnableFunction();
}
}


	
);
}
);
