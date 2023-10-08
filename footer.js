// 在 window 滾動事件觸發時，檢查是否滾動到內容底部
window.addEventListener('scroll', function() {
  var content = document.querySelector('.content');
  var footer = document.querySelector('.footer');
  if (content.getBoundingClientRect().bottom <= window.innerHeight) {
    footer.style.display = 'block'; // 顯示 footer
  } else {
    footer.style.display = 'none'; // 隱藏 footer
  }
});