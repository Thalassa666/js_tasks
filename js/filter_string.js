const string = "Привет, как дела?";

let getVowels = (string) => string.replace(/[бвгджзклмнпрстфхцчшщъь]/gi, '')

console.log(getVowels(string));
