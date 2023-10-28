const btn = document.querySelector('.js-hamburger');
const headerInner = document.querySelector('.l-header__inner');
const body = document.querySelector('body');

headerInner.addEventListener('click', (e) => {
  const target = e.target;
  if( target.closest('.l-header__hamburger')) {
    body.classList.toggle('is-active');
    return;
  }

  //ナビゲーションを展開時にメニューをクリックで画面閉じる
  const clickedItem = target.closest('.l-header__item');
  if(body.classList.contains('is-active') && clickedItem) {
    body.classList.remove('is-active');
  }
})
/* アコーディオン
------------------------------------*/
const details = document.querySelectorAll('.js-details');
const aniTiming = {
  duration: 400,
  easing: 'ease-out'
};

details.forEach((detail) => {
  const summary = detail.querySelector('.js-details-summary');
  const content = detail.querySelector('.js-details-content');
  const arrow = detail.querySelector('.p-faq__arrow');
  summary.addEventListener('click', function(event) {
    event.preventDefault();

    // アニメーション中だったらクリックイベントを受け付けないでリターンする
    if(detail.dataset.animStatus === 'running') return;

    if(detail.hasAttribute('open')) {
      const closing = content.animate(closeAnim(content), aniTiming);
      detail.dataset.animStatus = 'running';

      closing.onfinish = () => {
        detail.removeAttribute('open');
        detail.dataset.animStatus = '';
      };
      arrow.classList.remove('js-arrow');
    } else {
      detail.setAttribute('open', true);
      const opening = content.animate(openAnim(content), aniTiming);
      detail.dataset.animStatus = 'running';
      // const arrows = document.querySelectorAll('.p-faq__arrow');
      // arrows.forEach((arrow) => {
      //   arrow.classList.toggle('js-arrow');
      // })
      arrow.classList.add('js-arrow');
      opening.onfinish = () => {
        detail.dataset.animStatus = "";
      };
    }
  });
});

const closeAnim = (content) => [
  {
    height: content.offsetHeight + 'px',
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0
  }
];

const openAnim = (content) => [
  {
    height: 0,
    opacity: 0
  },
  {
    height: content.offsetHeight + 'px',
    opacity: 1,
  }
];

/* スムーススクロール
------------------------------------*/
const links = document.querySelector('.l-header__list');
const header = document.querySelector('.l-header');

links.addEventListener('click', function(e) {

  if(e.target.classList.contains('l-header__link')) {
    e.preventDefault();
    //headerの高さを取得
    const headerHeight = header.clientHeight;
    //aタグのhref属性を取得
    const id = e.target.getAttribute('href');
    //#〇〇を元に対応しているidの要素を記述
    const targetElement = document.querySelector(id);
    //スクロールの位置を計算
    const scrollPosition = targetElement.offsetTop - headerHeight ;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    })
  }
})
/* スムーススクロール - footerバージョン
------------------------------------*/
const footerLinks = document.querySelector('.l-footer__list');
footerLinks.addEventListener('click', function(e) {
  if(e.target.classList.contains('l-footer__link')) {
    e.preventDefault();
    //headerの高さを取得
    const headerHeight = header.clientHeight;
    //aタグのhref属性を取得
    const id = e.target.getAttribute('href');
    //#〇〇を元に対応しているidの要素を記述
    const targetElement = document.querySelector(id);
    //スクロールの位置を計算
    const scrollPosition = targetElement.offsetTop - headerHeight ;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    })
  }
})


/* トップへ戻るボタン
------------------------------------*/

//クリックでページの一番上に遷移
const pageTop = document.querySelector('.c-page-top');
pageTop.addEventListener('click', scrollTop);
function scrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
};

/* 400px下にスクロールした時に
------------------------------------*/
window.addEventListener('scroll', scroll);
function scroll() {
  if(window.scrollY > 400) {
    pageTop.style.opacity = 1;
    pageTop.style.pointerEvents = 'auto';
    
  } else {
    pageTop.style.opacity = 0;
    pageTop.style.pointerEvents = 'none';
  }
}

/*==========================================================
# ローディングアニメーション
========================================================= */

const loadingAreaLeft = document.querySelector('#loading-left');
const loadingAreaRight = document.querySelector('#loading-right');

const keyframes = {
  transform:['scaleX(1)','scaleX(0)'],
}

const options = {
  duration:1000,
  easing:'ease',
  fill:'forwards'
}


  window.addEventListener('load', () => {
    //ローディング中(左側)
    loadingAreaLeft.animate(keyframes,options);
    //ローディング中(右側)
    loadingAreaRight.animate(keyframes,options);
  })
