const text = document.querySelector('.text');
const clipboard = document.querySelector('.clipboard');
const area = document.querySelector('.area');
let inputText = {
  originalValue: '',
  fromUnit: '',
  toUnit: '',
  convertedValue: ''
};

function parsingTextInput(){
  let str = text.value;
  // deleting of sapces
  str = str.replace(/\s/g, '');
  let parsingVal = '';
  let len = str.length;
  let sym = '';
  let i = 0;
  sym = str[i];
  let passing = 0;
  // if first symbol is numeric then it is begin of originalValue
  if (sym >= '0' & sym <= '9'){
    parsingVal += sym;
    while (!passing){
      i++;
      sym = str[i];
      if (sym >= '0' & sym <= '9'){
        parsingVal += sym;
      }
      else if (sym == '.'){
        parsingVal += sym;
      }
      else if (sym == ','){
        parsingVal += sym;
      }
      // if currnet symbol is alfabet then it is begin of fromUnit
      else if (sym.match(/[A-я]|[A-z]/)){
        passing = 1;
        inputText.originalValue = parsingVal;
        parsingVal = sym;
        console.log(inputText);
      }
    }
    passing = 0;
    while (!passing){
      i++;
      sym = str[i];
      if (sym.match(/[A-я]|[A-z]/)){
        parsingVal += sym;
      }
      else if (sym == '='){
        passing = 1;
        inputText.fromUnit = parsingVal;
        parsingVal = '';
      }
    }
    passing = 0;
    while (!passing){
      i++;
      if (i < len){
        sym = str[i];
        if (sym.match(/[A-я]|[A-z]/)){
          parsingVal += sym;
        }
      } else {
          inputText.toUnit = parsingVal;
          parsingVal = '';
          passing = 1;
      }
    }
  }
  console.log(inputText);
  
  // regexp = new RegExp("шаблон", "флаги");
//   // parsing of text like this:
   // 800 кгс = 7845,32 Н
// // 1) three possible init states:
// // ''; 800; 800 кгс; 800 кгс = ; 800 кгс = Н
// // if find symbol '='. If it exist then 
// clipboard.innerHTML += 123;
// let str = '800 кгс = 7845,32 Н' -> номер / текст / = / номер / текст

// Количество символов
// поиск "="
// всё, что слева - ввод, всё, что справа вывод
// если inputText.originalValue == null, то 




}
text.addEventListener('change', parsingTextInput);
area.addEventListener('keydown', function (e) {
  console.log(e.code);
  // if (e.shiftKey & e.code == 'Digit6'){console.log('Symbol^')};
  document.getSelection().removeAllRanges();
  let range = new Range();
  range.setStart(area,0);
  range.setEnd(area,2);
  document.getSelection().addRange(rangeb);
});