'use strict';
const userFirstName = prompt('What is your name?')
const userLastName = prompt('What is your last name?')
const userName = (userFirstName + userLastName);
alert('Hello ' + userFirstName + " " + userLastName);
function quiz (){
    let points = 0;
    let answerFirst = prompt('Is canada my dream vacation?');
    answerFirst = answerFirst.toLowerCase();
        if (answerFirst === 'n' || answerFirst ==='no'){
        alert ('correct!');
        //console.log('Correct!')
        points ++;
        }
        else {
        alert('Incorrect...')
        //console.log('Incorrect...')
    }

    let answerSecond = prompt('Is summer my favorite season?');
    answerSecond = answerSecond.toLowerCase();
    if (answerSecond === 'n' || answerSecond ==='no') {
        alert ('Correct!'); 
        //console.log('Correct!')
        points ++;
    }
    else { 
        alert('Incorrect...')
        //console.log('Incorrect...')
    }
    let answerThird = prompt('Is my name Collin?');
    answerThird = answerThird.toLowerCase();
    if (answerThird === 'y' || answerThird ==='yes') {
        alert ('Correct!');
        //console.log('Correct!')
            points ++
    }
    else {
        alert('Incorrect...')
        //console.log('Incorrect...')  
    }
    let answerFourth = prompt('Is sushi my favorite food?');
    answerFourth = answerFourth.toLowerCase();
    if (answerFourth === 'y' || answerFourth ==='yes'){
        alert ('Correct!');
        //console.log('Correct!')
        points ++;
    }
    else {
        alert('Incorrect...')
        //console.log('Incorrect...') 
    }
    let answerFifth = prompt('Am I 22 years old?');
    answerFifth = answerFifth.toLowerCase();
    if (answerFifth === 'y' || answerFifth ==='yes') {
        alert ('Correct!');
        //console.log('Correct!')
            points ++;
    }
    else {
        alert('Incorrect...')
        //console.log('Incorrect...')
    }
        alert ('You sucessfully got ' + points + ' out of 5 points');
    let attempt = 0;
    for(;attempt < 4; attempt++){
        const favNum = 7
        let answerSixth =parseInt(prompt('what is my favorite number?'));
        if  (answerSixth <  7) {
            alert('Guess is too low');
        } else if (answerSixth > 7) {
            alert('Guess is too high');
        } else { 
            alert('You are right! My favorite number is 7!')
            points++;
            break;
        }          
   }
    if (attempt == 4)
       alert('The correct answer is 7')
}
    let correctAnswers = 0 ;
    let userCorrect = false ;
    const favBands = ['my chemical romance', 'green day', 'cold play', 'metallica', 'pantera', 'disturbed'];
    let guesses = 0 ; 
    while (guesses < 6){
        let bandQuestion = prompt('What bands do I like?').toLowerCase();
        console.log(bandQuestion)}
        for (var i = 0; i < favBands.length; i++){
            if (bandQuestion === favBands[i]){
                 alert('You are right I do enjoy listening to them');
                guesses = 6 ;
                correctAnswers = correctAnswers + 1 ;
                userCorrect = true ;
                points++;
                break;
            }
        }
        if(guesses !== 6){
            alert('That is not a favorite band...')
          
        }
        guesses++;
     
        if (userCorrect === false){
            alert('Ran out of guesses. I enjoy listening to My Chemical Romance, Green Day, Cold Play, Metallica, Pantera, and Disturbed.')

        }
    alert ('You scored ' + points + ' out of ' + points);
      
