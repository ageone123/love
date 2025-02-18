document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0; // 跟踪点击次数  
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const comicImage = document.getElementById('comic-image');
    const responseText = document.getElementById('response-text');
    const loveText = document.getElementById('love-text');

    // 图片数组，包含所有的漫画人物路径  
    const images = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png'
    ];

    // 处理“可以”按钮的点击事件  
    yesBtn.addEventListener('click', function () {
        responseText.innerText = '嘻嘻，!!!喜欢你,我的倩宝宝';
        noBtn.style.display = 'none'; // 隐藏“不要”按钮  
        comicImage.src = images[5]; // 显示第六张漫画人物  
        yesBtn.style.display = 'none'; // 隐藏“可以”按钮  
        loveText.style.display = 'none'; // 隐藏提问文本  
        clickCount++;  // 增加点击次数
    });

    // 处理“不要”按钮的点击事件  
    noBtn.addEventListener('click', function () {
        clickCount++;

        // 如果点击次数小于5，显示对应的图片  
        if (clickCount < 5) {
            comicImage.src = images[clickCount]; // 切换到对应的图片  
        } else {
            // 达到第五张图片时不再更换  
            comicImage.src = images[4]; // 保持在第五张图片  
        }

        // 根据点击次数更新按钮文本  
        switch (clickCount) {
            case 1:
                noBtn.textContent = "?你认真的吗...";
                break;
            case 2:
                noBtn.textContent = "要不再想想?";
                break;
            case 3:
                noBtn.textContent = "不许选这个!";
                break;
            case 4:
                noBtn.textContent = "我会很伤心de...";
                break;
            case 5:
                noBtn.textContent = "不行:{"; // 第五次点击后的提示  
                break;
            default:
                break;
        }

        // 获取当前按钮的字体大小  
        let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);

        // 每次点击“不要”按钮，增大“可以”按钮的字体大小  
        yesBtn.style.fontSize = (currentSize + 70) + 'px'; // 每次增加 20px  

        // 触发弹跳动画  
        yesBtn.classList.add('jelly'); // 应用动画  

        // 重置动画，确保可以多次触发  
        yesBtn.addEventListener('animationend', function () {
            yesBtn.classList.remove('jelly'); // 清除动画以便下次重新应用  
        }, { once: true }); // 确保只添加一次监听器  

        // 获取浏览器窗口的宽度和高度  
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // 如果“可以”按钮的宽度或高度超过窗口尺寸，使其铺满窗口  
        if (currentSize > windowWidth * 0.8 || currentSize > windowHeight * 0.8) {
            yesBtn.style.width = '100%'; // 宽度铺满窗口  
            yesBtn.style.height = '100vh'; // 高度铺满窗口  
            yesBtn.style.fontSize = '10vw'; // 字体大小自适应  
            yesBtn.style.borderRadius = '0'; // 去除圆角  
            yesBtn.style.margin = '0'; // 去除外边距  
            yesBtn.style.position = 'fixed'; // 固定定位  
            yesBtn.style.top = '0'; // 顶部对齐  
            yesBtn.style.left = '0'; // 左侧对齐  
            yesBtn.style.zIndex = '1000'; // 确保按钮在最上层  
        }

        // 触发“可以”按钮的动画效果  
        yesBtn.style.animation = 'none'; // 清除之前的动画  
        yesBtn.offsetHeight; // 强制浏览器重新计算样式  
        yesBtn.style.animation = 'fadeAndBounce 15s forwards'; // 触发动画  
    });
});
