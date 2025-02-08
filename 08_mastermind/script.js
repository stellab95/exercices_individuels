function isColorsCorrect(mastermindColors){
    let colors = ["blue", "red", "yellow", "green"]
    
    for (let i = 0; i < colors.length; i++){
    if (mastermindColors.includes(colors[i])){
        console.log('correct');
    } else {
        console.log('incorrect');
    }
    }
    }
    isColorsCorrect(["red", "blue", "violet", "green"])
    
    function isCodebreakerCorrect(codebreakerChoice){
     let goodCombination = ["red", "blue", "yellow", "green"]
    
     for (let i = 0; i < goodCombination.length; i++)
     if(goodCombination[i] === codebreakerChoice){
        return true; 
    } else {
        return false;
    }
    }
    let result = isCodebreakerCorrect(["red", "blue", "yellow", "green"])
    console.log(result);
    