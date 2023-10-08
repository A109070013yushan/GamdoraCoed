// JavaScript 

const friendList = document.querySelector('.friend-list');
const collapseButton = document.querySelector('.collapse-button');

collapseButton.addEventListener('click', () => {
  // 切換好友列表的收縮狀態
  friendList.classList.toggle('collapsed');
});
// 創建好友的函數
function createFriend(name) {
  const friendElement = document.createElement('div');
  friendElement.classList.add('friend');
  friendElement.innerHTML = `
    <img src="friend1.jpg" alt="${name}">
    <span class="friend-name">${name}</span>
    <span class="collapse-button">收起</span>
  `;
  friendList.appendChild(friendElement);
}
// 初始化好友列表
function initFriendList(user) {
  friendList.innerHTML = ''; // 清空之前的內容
  const friends = getFriendsByUser(user); // 根據使用者獲取好友列表
  friends.forEach((friend) => {
    createFriend(friend);
  });
}
// 假設根據使用者獲取好友列表的函數
function getFriendsByUser(user) {
  // 根據使用者返回對應的好友列表
  // 這只是示例，你可以根據實際情況返回不同的好友列表
  if (user === 'user1') {
    return ['好友1', '好友2', '好友3'];
  } else if (user === 'user2') {
    return ['好友4', '好友5', '好友6'];
  } else {
    return []; // 其他使用者的好友列表
  }
}
// 根據不同的使用者初始化好友列表
const currentUser = 'user1'; // 假設當前使用者是 user1
initFriendList(currentUser);
// 添加發文功能
const postButton = document.querySelector('#post-button');
postButton.addEventListener('click', () => {
  // 顯示發文框，處理發文功能
});
// 加載更多貼文
const loadMoreButton = document.querySelector('#load-more');
loadMoreButton.addEventListener('click', () => {
  // 加載更多貼文內容
});
// 寵物互動
const feedButton = document.querySelector('.feed-button');
const attackButton = document.querySelector('.attack-button');
const playButton = document.querySelector('.play-button');
const randomButton = document.querySelector('.random-button');
feedButton.addEventListener('click', () => {
  // 寵物餵食互動
});
attackButton.addEventListener('click', () => {
  // 寵物攻擊互動
});
playButton.addEventListener('click', () => {
  // 寵物玩耍互動
});
randomButton.addEventListener('click', () => {
  // 寵物隨機互動
});
// 假設有好友和追蹤者的貼文資料
const friendPostsData = [
  { user: "好友1", content: "好友1的貼文內容..." },
  { user: "好友2", content: "好友2的貼文內容..." },
  // 其他好友的貼文資料...
];
const followerPostsData = [
  { user: "追蹤者1", content: "追蹤者1的貼文內容..." },
  { user: "追蹤者2", content: "追蹤者2的貼文內容..." },
  // 其他追蹤者的貼文資料...
];
// 取得貼文容器元素
const friendPostsContainer = document.querySelector(".friend-posts");
const followerPostsContainer = document.querySelector(".follower-posts");
// 生成好友貼文
function generateFriendPosts() {
  friendPostsContainer.innerHTML = ""; // 清空之前的內容
  friendPostsData.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
      <img src="user-profile.jpg" alt="${post.user}">
      <p>${post.content}</p>
    `;
    friendPostsContainer.appendChild(postElement);
  });
}
// 資料儲存
const postsData = []; // 貼文資料陣列
// 生成貼文
function generatePosts() {
  // 根據時間戳排序貼文資料
  postsData.sort((a, b) => b.timestamp - a.timestamp);
  const postsContainer = document.querySelector(".posts-container");
  postsContainer.innerHTML = ""; // 清空容器
  postsData.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
      <div class="post-content">${post.content}</div>
      <div class="post-footer">
        <div class="post-actions">
          <button>讚</button>
          <button>評論</button>
          <button>分享</button>
        </div>
        <div class="post-time">${formatTimestamp(post.timestamp)}</div>
      </div>
    `;
    postsContainer.appendChild(postElement);
  });
}
// 滾動加載更多舊的貼文
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreOldPosts();
  }
});
// 加載更多舊的貼文
function loadMoreOldPosts() {
  // 加載更多舊的貼文資料
  // 將貼文資料添加到 postsData 陣列末尾
  // 重新生成貼文
}
// 下拉刷新
let isRefreshing = false;
let lastScrollY = 0;
window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
});
window.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  startY = touch.clientY;
});
window.addEventListener("touchmove", (e) => {
  if (lastScrollY === 0 && startY < e.touches[0].clientY) {
    isRefreshing = true;
    refreshPosts();
  }
});
function refreshPosts() {
  if (isRefreshing) {
    isRefreshing = false;
    // 下拉刷新操作
    // 從後端獲取最新的貼文資料，插入到 postsData 陣列的前面
    generatePosts();
  }
}
// 初始化時生成貼文
generatePosts();
// 初始化時生成貼文
generateFriendPosts();
generateFollowerPosts();
// 獲取元素
const friendList = document.querySelector('.friend-list');
const postBox = document.querySelector('.post-box');
const postButton = document.querySelector('.post-button');
const friendPosts = document.querySelector('.friend-posts');
const followerPosts = document.querySelector('.follower-posts');
const petActions = document.querySelectorAll('.pet-action');
// 點擊發文按鈕時的事件處理函數
postButton.addEventListener('click', () => {
  const content = postBox.querySelector('textarea').value;
  if (content) {
    createPost(content);
    postBox.querySelector('textarea').value = '';
  }
});
// 創建貼文的函數
function createPost(content) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.innerHTML = `
    <div class="post-content">${content}</div>
    <div class="post-footer">
      <div class="post-actions">
        <button>讚</button>
        <button>評論</button>
        <button>分享</button>
      </div>
      <div class="post-time">剛剛</div>
    </div>
  `;
  friendPosts.appendChild(postElement);
}
// 切換寵物互動的事件處理函數
petActions.forEach((action) => {
  action.addEventListener('click', () => {
    // 在此處執行相應的寵物互動操作
    // 根據 action.id 執行不同的操作
  });
});
