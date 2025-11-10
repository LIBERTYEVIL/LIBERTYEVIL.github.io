let content_list = [
    "别熬夜⭐",
    "学会爱自己，才能更好地爱别人🫂",
    "记得吃水果🍎",
    "我想你了🥰",
    "愿所有烦恼都消失",
    "保持好心情 ♥",
    "金榜题名💎",
    "天冷了，多穿衣服👚",
    "保持微笑呀😊",
    "珍惜每一刻",
    "别太累啦，偶尔偷懒也好",
    "多喝水哦~💧",
    "顺顺利利",
    "早点休息😴💤",
    "期待下一次见面😜",
    "今天过得开心嘛🥰",
    "每天都要元气满满🤪",
    "要相信自己奥",
];


// const queue = Array(25).fill(null);

// function push2queue(data) 
// {
//     let temp = null;
//     if(queue[queue.length-1] != null) 
//     {
//         console.log(queue);
//         queue[queue.length-1].remove();
//         queue[queue.length-1] = null;
//     }
//     for (let i = 0; i<(queue.length-2) && queue[i+2]==null; i++) {
//         temp       = queue[i+1];
//         queue[i+1] = queue[i];
//     }
//     queue[0]   = data;
// }


function btn_init_onclick() 
{
    const initbox = document.getElementById("initmsgb_id");
    initbox.classList.add("anim_end");
    setTimeout(main, 500);
}

function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'msgbox';

    const icons = document.createElement('div');
    icons.className = 'msgb_icons';

    const icon_0 = document.createElement('div');
    icon_0.className = 'icon_0';

    const ffill = document.createElement('span');
    ffill.className = 'flex-fill';

    const card_title = document.createElement('span');
    card_title.className = 'msgb_title';
    card_title.innerHTML = title;

    
    const card_content = document.createElement('p');
    card_content.className = 'msgb_txt';
    card_content.innerHTML = content + '<br>';

    icons.appendChild(icon_0.cloneNode(true));
    icon_0.style.backgroundColor = "darkorange";
    icons.appendChild(icon_0.cloneNode(true));
    icon_0.style.backgroundColor = "orange";
    icons.appendChild(icon_0.cloneNode(true));
    icons.appendChild(ffill);
    icons.appendChild(card_title);

    card.appendChild(icons);
    card.appendChild(card_content);

    return card;
}

let main = () => {
    let audio = document.getElementById('BGM_player');
    audio.play();

    // document.body.removeChild(document.getElementById("initscr_id"));
    // document.body.appendChild(createCard('JavaScript', '动态创建 DOM 元素'));
    // document.body.style.padding = "10px";
    
    let left_dist   = 0;
    let top_distc   = 0;
    let _time_gap   = 525;
    let maxcapa     = 5;
    // let bgc_f   = 0;

    setInterval(()=>{
        let newcard  = null;
        right_dist   = Math.random() * 85 + '%';
        bottom_distc = Math.random() * 85 + '%';
        newcard = createCard('提示', content_list[Math.floor(Math.random()*content_list.length)]);
        newcard.style.right  = right_dist;
        newcard.style.bottom = bottom_distc;
        document.body.appendChild(newcard);
        // if(bgc_f = 1) {
        //     // document.body.style.background='linear-gradient(45deg, rgb(255, 191, 191), rgb(196, 196, 249));';
        //     document.body.style.backgroundColor="red";
        //     bgc_f = 0;
        // }
        // else {
        //     // document.body.style.background='linear-gradient(-45deg, rgb(255, 191, 191), rgb(196, 196, 249));';
        //     document.body.style.backgroundColor="blue";
        //     bgc_f = 1;
        // }
    }, _time_gap);
    //setTimeout(start2clear(_time_gap), maxcapa*_time_gap);
}

// function start2clear(_time_gap)
// {
//     setInterval(()=>{
//         document.getElementsByClassName("msgbox")[0].remove();
//     }, _time_gap);
// }