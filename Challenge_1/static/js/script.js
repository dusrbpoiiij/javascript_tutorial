// Challenge 1 : Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born.... Good friend?');
    var ageInDayes = (2019-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageInDayes + ' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('flex-box-result').remove();
}