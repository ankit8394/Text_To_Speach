function speak(){
    let input = document.getElementById("input");
    let text = input.value;
    let statement = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(statement);
}