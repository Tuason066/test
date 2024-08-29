document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('[data-toggle="menu-btn"]');
  const navigation = document.querySelector('.page_nav');
  const links = document.querySelector('.page_nav ul');

  let isShow = false;

  menuBtn.addEventListener('click', () => {
    if (!isShow) {
      const height = links.getBoundingClientRect().height;
      navigation.style.height = `${height}px`;
      isShow = true;
    } else {
      navigation.style.height = `0px`;
      isShow = false;
    }
  });
});
