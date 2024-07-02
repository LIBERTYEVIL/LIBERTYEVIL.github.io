function updateDateTime() {
    // 获取当前日期和时间
    const now = new Date();
    
    // 获取日期和时间的各个部分
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月份是从0开始的
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // 格式化日期和时间
    const dateTimeStr = year + '年' + month + '月' + day + '日 ' +
                        hours.toString().padStart(2, '0') + ':' +
                        minutes.toString().padStart(2, '0') + ':' +
                        seconds.toString().padStart(2, '0');
  
    // 更新页面元素
    dateTimeBoxes = document.querySelectorAll('.datetime');
    dateTimeBoxes.forEach(element => {
      element.textContent = dateTimeStr;
    });
  }
  
  // 每秒更新日期和时间
  setInterval(updateDateTime, 1000);
  
  // 初始化显示
  updateDateTime();