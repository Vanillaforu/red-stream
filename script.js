document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
      const postId = button.getAttribute('data-post-id');
      const likeCountElement = document.getElementById(`like-count-${postId}`);
      const likeAnimationElement = document.getElementById(`like-animation-${postId}`);
      let currentCount = parseInt(likeCountElement.textContent);
      
      // 增加点赞计数
      likeCountElement.textContent = currentCount + 1;

      // 显示点赞动画
      likeAnimationElement.style.opacity = 1;
      likeAnimationElement.style.transform = 'translateY(-40px)';
      setTimeout(() => {
        likeAnimationElement.style.opacity = 0;
        likeAnimationElement.style.transform = 'translateY(0)';
      }, 500);
    });
  });
});

document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', () => {
      const postId = button.getAttribute('data-post-id');
      const commentCountElement = document.getElementById(`comment-count-${postId}`);
      const commentAnimationElement = document.getElementById(`comment-animation-${postId}`);
      let currentCount = parseInt(commentCountElement.textContent);
      
      // 增加评论计数
      commentCountElement.textContent = currentCount + 1;
      
      // 显示评论动画
      commentAnimationElement.style.opacity = 1;
      commentAnimationElement.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        commentAnimationElement.style.opacity = 0;
        commentAnimationElement.style.transform = 'translateY(0)';
      }, 500);
    });
  });

  // 转发按钮事件
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', () => {
      const postId = button.getAttribute('data-post-id');
      const shareCountElement = document.getElementById(`share-count-${postId}`);
      const shareAnimationElement = document.getElementById(`share-animation-${postId}`);
      let currentCount = parseInt(shareCountElement.textContent);
      
      // 增加转发计数
      shareCountElement.textContent = currentCount + 1;
      
      // 显示转发动画
      shareAnimationElement.style.opacity = 1;
      shareAnimationElement.style.transform = 'translateX(20px)';
      setTimeout(() => {
        shareAnimationElement.style.opacity = 0;
        shareAnimationElement.style.transform = 'translateX(0)';
      }, 500);
    });
  });
