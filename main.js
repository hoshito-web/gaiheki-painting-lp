const questions = document.querySelectorAll(".faq-item__question");
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".modal-close");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("active");
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const q = item.querySelector(".faq-item__question");

  q.addEventListener("click", () => {

    faqItems.forEach(el => {
      if (el !== item) {
        el.classList.remove("open");
      }
    });

    item.classList.toggle("open");
  });
});

// モーダル
document.querySelectorAll(".before img, .after img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("show");
    modalImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// ハンバーガー
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  headerNav.classList.toggle('active');
});

document.querySelectorAll('.header-nav a').forEach(link => {
  link.addEventListener('click',() => {
    hamburger.classList.remove('active');
    headerNav.classList.remove('active');
  });
});

