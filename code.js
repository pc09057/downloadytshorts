var text = "shorts2k5user2k12";
function codecheck() {
if(document.getElementById('passcode').value != text) {
alert('Incorrect code, Try Again.');
return false;
}
if(document.getElementById('passcode').value == text) {
alert('Correct code.');
}
}
