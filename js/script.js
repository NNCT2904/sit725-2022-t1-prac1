const changeText = () => {
    var number = getRandomNumberBetween(0,9)
    console.log("Index: ", number)
    document.getElementById("randomNumber").innerHTML = number;
}

const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}