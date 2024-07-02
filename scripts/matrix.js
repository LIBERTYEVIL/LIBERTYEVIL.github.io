const matrix_config = {
    background: 'rgba(0,0,0,0.1)',
    font_size: 14,
    font: 'arial',
    color: '#00fff7',
    charsArr: "01",
    density: 0.99,
    randomChar: (chars) => {
      return chars[Math.floor(Math.random() * chars.length)];
    },
  };
  
  const matrix_init = () => {
    const canvas = document.querySelector('canvas.matrix');
    const context = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      let columns = Math.floor(canvas.width / matrix_config.font_size);
      let boult = new Array(columns).fill(1);
      return { canvas, context, boult };
    };
    return resizeCanvas();
  };
  
  const draw = (canvas, context, boult) => {
    const { background, color, font_size, font, charsArr, density } = matrix_config;
    const { randomChar } = matrix_config;
  
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.font = `${font_size}px ${font}`;
  
    for (let i = 0; i < boult.length; i++) {
      let text = randomChar(charsArr);
      let posX = i * font_size;
      let posY = boult[i] * font_size;
      context.fillText(text, posX, posY);
  
      if (posY > canvas.height || Math.random() > density) {
        boult[i] = 0;
      }
      boult[i]++;
    }
  };
  
  const matrix_main = () => {
    let { canvas, context, boult } = matrix_init();
    window.addEventListener('resize', () => {
      ({ canvas, context, boult } = matrix_init());
    });
    setInterval(() => {
      draw(canvas, context, boult);
    }, 1000 / 20);
  };
  
  matrix_main();
  