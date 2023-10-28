const links = document.querySelectorAll('.p-plan__link');
const header = document.querySelector('.l-header');
links.forEach((link) => {
  link.addEventListener('click', function(e) {
      const linked = e.target.closest('.p-plan__link');
      e.preventDefault();
      const headerHeight = header.clientHeight;
      //aタグのhref属性を取得
      const id = linked.getAttribute('href');
  
      //#〇〇を元に対応しているidの要素を記述
      const targetElement = document.querySelector(id);
      // //要素のpadding-topを取得
      // const sectionPaddingTop = parseInt(window.getComputedStyle(targetElement).paddingTop, 10);
      console.log(targetElement.offsetTop);
      // //スクロールの位置を計算
      const scrollPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      })
  })
})

