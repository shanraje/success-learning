<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<title>Apollo Hospitals-Sign in</title>
	<link href="<c:url value="/resources/css/apolloCss.css" />" rel="stylesheet" type="text/css" >
    <img src="<c:url value="/resources/images/AplolloScreen.jpg"/>"/>
</head>
<body>
<h1>Patient Registration form</h1>
<div class="layout">

<div class="firstName">
<label class="required">First Name</label>
<input id="fName" type="text" name="firstNameInput">
<label id="errorValueFname" class="error" >Please enter first name</label>
</div>
<div class="lastName">
<label class="required">Last Name</label>
<input id="lName" type="text" name="lastNameInput">
<label id="errorValueLname" class="error" >Please enter last name</label>
</div>
<div class="date">
<label class="required">Date of birth</label>
<input id ="dob" type="date" name="birthInput" >
<label id="errorValueDate" class="error" >Please select the appropriate date of birth.</label>
</div>
<div class="gender">
<label class="required">Gender</label>
<select id="genderSelect" name="Gender">
<option value="Select">Select</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Others">Others</option>
</select>
<label id="errorValueGender" class="error" >Please select the appropriate gender</label>
</div>
<div class="phno">
<label class="required" >Phone number</label>
<input id="phno" type="number" name="phoneNumberInput">
<label id="errorValueNumber" class="error" >Please enter a valid phone number</label>
</div>
<div class="address">
<label class="required">Address for contact</label>
<textarea id="textArea" name="addressTextArea" rows="5" cols="40"></textarea>
<label id="errorValueAddress" class="error" >Please enter address</label>
</div>
<button id = "submitButton" name="submit">Proceed</button>
</div>
</div>
</body>
</html>