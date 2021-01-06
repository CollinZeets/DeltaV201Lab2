'use strict';
const userFirstName = prompt('What is your name?');
const userLastName = prompt('What is your last name?')
const userName = (userFirstName + userLastName);
alert('Hello ' + userFirstName + userLastName);

function theQuiz(){
    let points = 0;
    let answerFirst = prompt('Is canada my dream vacation?');
    answerFirst = answerFirst.toLowerCase();
    if (answerfirst === 'n' || answerFirst ==='no'){
        alert ('Correct!');
        //console.log('Correct!')
        points ++;
    }
    else {
        alert('Incorrect...')
        //console.log('Incorrect...')
    }

    let answerSecond = prompt('Is summer my favorite season?');
    answerSecond = answerSecond.toLowerCase();
    if (answerSecond === 'n' || answerSecond ==='no'){
        alert ('Correct!');
        //console.log('Correct!')
        points ++;
    }
    else{ 
        alert('Incorrect...')
        //console.log('Incorrect...')
    }
    let answerThird = prompt('Is my name Collin?');
        answerThird = answerThird.toLowerCase();
    if (answerThird === 'y' || answerThird ==='yes'){
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
    if (answerfourth === 'n' || answerFourth ==='no'){
        alert ('Correct!');
        //console.log('Correct!')
        points ++;
    }
    else {
        alert('Incorrect...')
        //console.log('Incorrect...') 

        let answerFifth = prompt('Am I 22 years old?');
        answerFifth = answerFifth.toLowerCase();
        if (answerfifth === 'y' || answerFifth ==='yes'){
            alert ('Correct!');
            //console.log('Correct!')
            points ++
        }else {
            alert('Incorrect...')
            //console.log('Incorrect...')
        }
        alert ("You sucessfully got " + points + "out of 5 points");
    }
}