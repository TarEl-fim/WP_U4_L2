
function genKeyboard(){  
  const body = document.getElementsByTagName('body')[0];

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  div1.id = 'box1';
  div2.id = 'box2';

  const OutputBox = document.createElement('div');
  OutputBox.id = 'Output';
  div1.appendChild(OutputBox);

  const InputBox = document.createElement('div');

  InputBox.id = 'Input';
  div2.appendChild(InputBox);

  const SubmitKey = CreateKey('Submit');
  div2.appendChild(SubmitKey);

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
  const invisDiv = document.createElement('div');
  invisDiv.className = 'invisi';
  
  body.appendChild(invisDiv);
  SpaceBar = CreateKey(' ');
  SpaceBar.id = 'Space';
  invisDiv.appendChild(SpaceBar);
}

function click(id){
  if (id=='Submit'){
    const Out = document.getElementById('Output');
    const Inp = document.getElementById('Input');
    Out.textContent += Inp.textContent + '\n';
    Inp.textContent = '';
  }else{
    console.log(id);
    const Inp = document.getElementById('Input');
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