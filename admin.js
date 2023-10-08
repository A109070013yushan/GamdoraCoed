function showContent(contentId) {
  // 获取所有内容块
  var contents = document.querySelectorAll('.content');

  // 隐藏所有内容块
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }

  // 显示选定的内容块
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
}

// 默认显示第一个内容块
showContent('pending');