
/* 有关控制台功能的全局变量、常量的定义与初始化 */
let currentInput = '';
const Viewsize_window = document.getElementById('viewport-size');
const ContentBlock = document.getElementById("ContentBlock");
const consoleElement = document.getElementById('MyConsole');
const lineHeight = window.getComputedStyle(consoleElement).lineHeight;
let CONSOLE_HEIGHT = consoleElement.getBoundingClientRect().height - 30;
Viewsize_window.style.display = "none";
consoleElement.style.color = "white";

/* 计算控制台所有已显示行高度 */
const calculateTotalHeight = () => {
    const consoleElement = document.getElementById('MyConsole');
    const children = consoleElement.children;
    let totalHeight = 0;
    Array.from(children).forEach(child => { totalHeight += child.getBoundingClientRect().height; });
    return totalHeight;
}

/* 打印文本的函数 */
const printM = (text) => {
    const line = document.createElement('div');
    line.textContent = text;
    consoleElement.appendChild(line);
    // 防文本溢出
    if (calculateTotalHeight()>=CONSOLE_HEIGHT) { consoleElement.removeChild(consoleElement.firstChild); }
};

const CopyrightClaim = ()=>{
    printM("L1BERTY3VIL'S CONSOLE");
    printM("Copyright (C) L1BERTY3VIL'S 2025");
    printM("You can get the help by input \"help\".");
}

const appendInputLine = () => {
    const inputLine = document.createElement('div');
    inputLine.className = 'input-line';
    inputLine.innerHTML = `L1B> ${currentInput}<span class="myconsole_cursor"> </span>`;
    consoleElement.appendChild(inputLine);
};

const clearInputLine = () => {
    const inputLines = document.querySelectorAll('.input-line');
    if (inputLines.length > 0) {
        consoleElement.removeChild(inputLines[inputLines.length - 1]);
    }
};

const handleCommand = (command) => {
    // 在处理前更改输入的命令为小写，使命令在输入时不区分大小写。
    command = command.toLowerCase();
    // 将命令拆分成主命令和参数
    const parts = command.split(' ');
    const mainCommand = parts[0];
    const args = parts.slice(1); // 剩下的部分作为参数

    if (mainCommand === 'help'||mainCommand === '?')
    {
        printM('Available commands:');
        printM('help/? - 显示帮助信息');
        printM('clear - 清空控制台');
        printM('echo - 回显输入的参数');
        printM('exit - 退出控制台');
        printM('viewsize [on/off] - 显示视窗尺寸');
    }
    else if (mainCommand ==='')
    {
        // 没有输入任何内容的情况下按下回车键
    }
    else if (mainCommand === 'clear')
    {
        consoleElement.innerHTML = '';

    } 
    else if (mainCommand === 'echo')
    {
        printM(args);
    }
    else if (mainCommand === 'exit') 
    {
        consoleElement.style.display = "none";
    } 
    else if (mainCommand === 'viewsize') 
    {
        if (args[0] === 'on') {
            Viewsize_window.style.display = "block";
            printM('操作成功，已开启显示窗口大小。');
        } else if (args[0] === 'off') {
            Viewsize_window.style.display = "none";
            printM('操作成功，已关闭显示窗口大小。');
        } else {
            printM('Viewsize 当前状态为: ' + ((Viewsize_window.style.display==="none")?"已关闭":"已开启"));
            printM('输入参数[on/off]以更改');
        }
    }
    else 
    {
        printM(`Unknown command: ${mainCommand}`);
    }
};

function updateViewportDimensions() 
{
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('viewport-size').textContent = `Width: ${width}px`+' \n '+`Height: ${height}px`;
    CONSOLE_HEIGHT = consoleElement.getBoundingClientRect().height - 30
}

CopyrightClaim();

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        clearInputLine();
        printM(`L1B> ${currentInput}`);
        handleCommand(currentInput.trim());
        currentInput = '';
    } else if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
    } else if (e.key.length === 1) {
        currentInput += e.key;
    }

    clearInputLine();
    appendInputLine();
    consoleElement.scrollTop = consoleElement.scrollHeight;
});

// 初始显示命令提示符
appendInputLine();

window.addEventListener('resize', updateViewportDimensions);
window.addEventListener('load', updateViewportDimensions);