document.addEventListener('DOMContentLoaded', () => {
  // 1. 创建全局唯一的弹窗层
  const portal = document.createElement('div');
  portal.id = 'bt-tip-portal';
  document.body.appendChild(portal);

  const tips = document.querySelectorAll('.bt-tip');

  tips.forEach(tip => {
    tip.addEventListener('mouseenter', (e) => {
      const content = tip.getAttribute('data-tip');
      portal.innerHTML = content;
      portal.classList.add('visible');
      
      updatePosition(e, tip);
    });

    tip.addEventListener('mousemove', (e) => {
      updatePosition(e, tip);
    });

    tip.addEventListener('mouseleave', () => {
      portal.classList.remove('visible');
    });
  });

  function updatePosition(e, target) {
    const rect = target.getBoundingClientRect();
    const portalRect = portal.getBoundingClientRect();
    
    // 计算位置：居中显示在文字上方
    let left = rect.left + (rect.width / 2) - (portalRect.width / 2);
    let top = rect.top - portalRect.height - 10;

    // 边界检查：防止跳出屏幕左侧
    if (left < 10) left = 10;
    // 边界检查：防止跳出屏幕右侧
    if (left + portalRect.width > window.innerWidth) {
      left = window.innerWidth - portalRect.width - 10;
    }
    // 边界检查：如果上方空间不足，显示在下方
    if (top < 10) {
      top = rect.bottom + 10;
    }

    portal.style.left = `${left}px`;
    portal.style.top = `${top}px`;
  }
});