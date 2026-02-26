//Main code run when page first opened VV

let [hangIndex, phrase, encodedPhrase,letterCount] = reset();

function reset(){

  const body = document.getElementsByTagName('body')[0];

  let typeIndex = 0;

  const phrase = choose_Phrase();
  const encodedPhrase = encode_Phrase(phrase);

  const hangman = document.createElement('imageContainer');
  body.innerHTML += '<img src="resources/index/hangman 0.png" alt="Hanging man">';

  body.appendChild(hangman);

  body.appendChild(encodedPhrase);
  let letterCount = 0;

  return [typeIndex,phrase,encodedPhrase,letterCount];
}


function choose_Phrase(){
    phrases = [
  "Cumberland Perry Area Career and Technical Center","one little happy star","forgot a colon",
  "where did you come from","where did you go","syntax error","five hundred miles","do not stop me now", 
  "because I am having a good time","the rats go to a nice farm","Good idea","from random import choice", 
  "video killed the radio star","lines of code","The class has two birds","mint count",
  "list index out of range","the quiet game","flag on the white board","power of love","is this the fifties", 
  "here it is","mark as complete","tell me why","Sphinx of Black Quartz Judge My Vow"
  ]

  const randPhrase = phrases[Math.floor(Math.random() * phrases.length)]

  let newStr = ''

  for(let i=0;i<randPhrase.length;i++){
    
    newStr += randPhrase[i].toLowerCase();
  }

  return newStr
}



function encode_Phrase(phrase){

    const encodedPhrase = document.createElement('div');
    encodedPhrase.id = 'textBox';
    for(i=0;i<phrase.length;i++){
        letter = phrase[i]
        if(letter != ' '){
            letter = letter.toLowerCase();
            encodedLetter = ' '
            const letterdiv = document.createElement('div');
            letterdiv.classList.add('letter');
            letterdiv.classList.add('letterSpace');

            letterdiv.id = letter;
            letterdiv.textContent = encodedLetter;
            encodedPhrase.appendChild(letterdiv);
        }else{
            const letterdiv = document.createElement('div');
            letterdiv.classList.add('letterSpace');

            letterdiv.id = letter;
            letterdiv.textContent = letterdiv.id;  
            encodedPhrase.appendChild(letterdiv);
        }
        
    }

    return encodedPhrase;
}

function genKeyboard(){  
  const body = document.getElementsByTagName('body')[0];

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  div1.id = 'box1';
  div2.id = 'box2';

  const InputBox = document.createElement('div');

  InputBox.id = 'Input';
  div2.appendChild(InputBox);

  const SubmitKey = CreateKey('Submit');
  div2.appendChild(SubmitKey);

  const backspace = CreateKey('Backspace');
  div2.appendChild(backspace);

  body.appendChild(div1);
  body.appendChild(div2);

  const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";

  let counter = 0;

  for (let row=0; row<3; row++){
    const invisDiv = document.createElement('div');
    invisDiv.className = 'invisi';
    
    body.appendChild(invisDiv);
    
    while (alpha[counter] != '*' && counter < alpha.length){
      key = CreateKey(alpha[counter]);
      invisDiv.appendChild(key);
      counter += 1;
    }
    counter += 1;
  }

  const reset = CreateKey('Reset');
  div2.appendChild(reset);
}

function removeClick(id){
  console.log('penis')
}

function addClick(id){
  console.log('penis')
}

function checkPhrase(text){
  const Inp = document.getElementById('Input');
  console.log(text);
  console.log(phrase);
  for (let i=0;i<phrase.length;i++){
    if (phrase[i] == text){
      console.log(encodedPhrase)
      encodedPhrase.children[i].textContent = text;
      
      letterCount += 1;

    }else{
      const hangman = document.getElementsByTagName('img')[1];
      hangman.src = "resources/index/hangman 1.png";
      hangman.alt = alt="Hanging man";
    }
    
  }
  Inp.textContent = '';
  
}

function endGame(){
  console.log('yomama')
}


//0 = whole body
//5 = head left

function click(id){
  if (id=='Submit'){
    const Inp = document.getElementById('Input');
    checkPhrase(Inp.textContent);
    
  }else if(id=='Backspace'){
    const Inp = document.getElementById('Input');
    Inp.textContent = '';
  }else if(id=='Reset'){
    reset();
  }else{
    const Inp = document.getElementById('Input')
    Inp.textContent += id;
  }
}

function CreateKey(letter){
  const key = document.createElement('div');
  key.id = letter;
  key.textContent = letter;
  key.className = 'key';
  key.onclick = function(){click(key.textContent)};
  return key;
}
