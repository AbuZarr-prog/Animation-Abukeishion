const blockMove = document.querySelector('.btn')

blockMove.addEventListener('click', function() {
  anime({
    targets: '.el-1',
    translateY: -380,
    translateX: -270,
    duration: 800,
    easing: 'easeOutExpo',
    opacity: 1,
  });
  anime({
    targets: '.el-2',
    translateY: -250,
    translateX: -520,
    duration: 2000,
    easing: 'easeOutExpo',
    opacity: 1,
  });
  anime({
    targets: '.el-3',
    translateY: -120,
    translateX: -760,
    duration: 3000,
    easing: 'easeOutExpo',
    opacity: 1,
  });
  anime({
    targets: '.el-4',
    translateY: -360,
    translateX: -830,
    duration: 4000,
    easing: 'easeOutExpo',
    opacity: 1,
    rotate: '90deg'
  });
  anime({
    targets: '.el-5',
    translateY: -250,
    translateX: -1080,
    duration: 4500,
    easing: 'easeOutExpo',
    opacity: 1,
    rotate: '90deg'
  });

  
})

document.querySelector('.pause').onclick = blockMove.restart;