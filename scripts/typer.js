const textArray = ["你好，欢迎来到我的个人博客。", "Welcome to my personal blog.", "希望你会喜欢！"];
let arrayIndex = 0;
let letterIndex = 0;

const typewriter = document.getElementById('typewriter');

function typein()
{
  const currentText = textArray[arrayIndex];
  const currentLetter = currentText.slice(0, ++letterIndex);

  // textContent是HTML元素对象的属性，表示该元素的文本内容
  typewriter.textContent = currentLetter;

  if(currentLetter.length === currentText.length)
  {
    arrayIndex++;
    letterIndex = 0;
    setTimeout(typein, 2500);
  } 
  else 
  {
    setTimeout(typein, 200);
  }

  if(arrayIndex === textArray.length)
  {
    arrayIndex = 0;
  }
}


typein();