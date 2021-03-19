document.addEventListener("DOMContentLoaded", () => {
  //// фикс при размере 320px
  const screenWidth = window.screen.width;

  if (screenWidth <= 320) {
    const str = document.querySelector(".item__name__mobile");
    str.style.width = "246px";
    str.innerText =
      "Могу ли я делегировать вам работу / согласование с подрядчиком / организацией?";

    const strTwo = document.querySelectorAll(".repetead-questions__item__name");
    strTwo[5].innerHTML = `Могу ли я вернуть деньги <br /> на каком-либо из этапов работ?`;
  }

  /////Свайпер в Header
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  ////Табы в секции "Как мы работаем"
  document.querySelectorAll(".pages__item__link").forEach((tabsBtn) => {
    tabsBtn.addEventListener("click", (ev) => {
      const path = ev.currentTarget.dataset.path;

      document.querySelectorAll(".pages__item__link").forEach((tabBtn) => {
        tabBtn.classList.remove("active");
      });

      document.querySelectorAll(".how-working__card").forEach((tabContent) => {
        tabContent.classList.remove("card-active");
      });

      document.querySelector(`[data-path="${path}"]`).classList.add("active");

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("card-active");
    });
  });

  //Accordion в "Часто задаваемые вопросы"

  let plus = false;

  $("#accordion .repetead-questions__item").on("click", function () {
    $(this).find(".repetead-questions__item__question").next().slideToggle(300);

    if (plus === false) {
      plus = true;
      $(this)
        .find(".repetead-questions__item__plus")
        .css("transform", "rotate(45deg)");
    } else if (plus === true) {
      plus = false;
      $(this)
        .find(".repetead-questions__item__plus")
        .css("transform", "rotate(0deg)");
      console.log("false");
    }
  });

  //Burger меню
  $(".burger-menu").on("click", () => {
    $("#none").css("opacity", "0");
    $("#left").css({
      transform: "translateY(10px) rotate(45deg)",
    });
    $("#right").css({
      transform: "rotate(-45deg)",
    });

    if ($("#none").css("opacity") === "0") {
      $("#none").css("opacity", "1");
      $("#left").css("transform", "translateY(0px) rotate(0)");
      $("#right").css("transform", "rotate(0)");
    }

    $(".burger_list").slideToggle(400);
  });
});
