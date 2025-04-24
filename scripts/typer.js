const textArray = [
  "WELCOME TO L1BERTY3VIL'S.", 
  "欢迎访问！",
  "ようこそ！",
  "방문을 환영합니다!"
];

let arrayIndex = 0;
let letterIndex = 0;

const typewriter = document.getElementById('typewriter');

function typein()
{
  const currentText = textArray[arrayIndex];
  const currentLetter = currentText.slice(0, ++letterIndex);

  // textContent是HTML元素对象的属性，表示该元素的文本内容
  typewriter.innerHTML = currentLetter;

  if(currentLetter.length === currentText.length)
  {
    arrayIndex++;
    letterIndex = 0;
    setTimeout(typein, 2500);
  }
  else 
  {
    setTimeout(typein, 150);
  }

  if(arrayIndex === textArray.length)
  {
    arrayIndex = 0;
  }
}


typein();