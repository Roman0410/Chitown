Fancybox.bind("[data-fancybox]", {});

$(".burger-menu").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
  $("body").toggleClass("lock");
});
$(".header .cart_btn").click(function () {
  $(".cart-wrapper").toggleClass("active");
  $("body").toggleClass("lock");
});
$(".header .search_wrapper .search_btn").click(function () {
  $(this).closest(".search_wrapper").find("input").toggleClass("open");
  $(this).closest(".search_wrapper").find(".search_results-list").removeClass("active");
});
$(".cart-wrapper .close").click(function () {
  $(".cart-wrapper").toggleClass("active");
  $("body").toggleClass("lock");
});
if ($(window).width() < 1024) {
  $(".nav-item").click(function () {
    $(this).find(".sub-menu").slideToggle();
    $(this).find("svg").toggleClass("rotate");
  });
}
$(".cart-wrapper").click(function (event) {
  if (!$(event.target).closest(".cart-side").length) {
    $(this).toggleClass("active");
    $("body").toggleClass("lock");
  }
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 200) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});

$(document).ready(function () {
  $(".search_wrapper input").on("input", function () {
    const $wrapper = $(this).closest(".search_wrapper");
    const $results = $wrapper.find(".search_results-list");
    if ($(this).val().trim() !== "") {
      $results.addClass("active");
    } else {
      $results.removeClass("active");
    }
  });
  $(document).on("click", function (event) {
    $(".search_wrapper").each(function () {
      const $wrapper = $(this);
      if (!$wrapper.is(event.target) && $wrapper.has(event.target).length === 0) {
        $wrapper.find(".search_results-list").removeClass("active");
      }
    });
  });
  $(".search_wrapper input, .search_results-list").on("click", function (event) {
    event.stopPropagation();
  });
});
$(document).ready(function () {
  $(".counter__button--increase").on("click", function () {
    const row = $(this).closest("tr");
    const price = parseFloat(
      row
        .find(".price")
        .text()
        .replace(/[^0-9.-]+/g, "")
    );
    let quantity = parseInt(row.find(".counter__input").val());

    quantity++;
    row.find(".counter__input").val(quantity);

    const subtotal = price * quantity;
    row.find(".subtotal_table").text(`$${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}`);
  });
  $(".counter__button--decrease").on("click", function () {
    const row = $(this).closest("tr");
    const price = parseFloat(
      row
        .find(".price")
        .text()
        .replace(/[^0-9.-]+/g, "")
    );
    let quantity = parseInt(row.find(".counter__input").val());

    if (quantity > 1) {
      quantity--;
      row.find(".counter__input").val(quantity);

      const subtotal = price * quantity;
      row.find(".subtotal_table").text(`$${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}`);
    }
  });
});
$(document).ready(function () {
  $(".quantity-counter").each(function () {
    const $counter = $(this);
    const $minusBtn = $counter.find(".quantity-btn--minus");
    const $plusBtn = $counter.find(".quantity-btn--plus");
    const $input = $counter.find(".quantity-input");

    $minusBtn.on("click", function () {
      let currentValue = parseInt($input.val(), 10);
      if (currentValue > 1) {
        $input.val(currentValue - 1);
      }
    });

    $plusBtn.on("click", function () {
      let currentValue = parseInt($input.val(), 10);
      $input.val(currentValue + 1);
    });
  });
});

$(".main-catalog .filter-btn").click(function () {
  $(".main-catalog .categories").toggleClass("active");
  $("body").toggleClass("lock");
});
$(".main-catalog .categories .back").click(function () {
  $(".main-catalog .categories").toggleClass("active");
  $("body").toggleClass("lock");
});

$(document).ready(function () {
  const $button = $(".sort .button");
  const $sortList = $(".sort .sort-list");
  const $sortItems = $(".sort .sort-item");
  const $arrow = $(".sort .button svg");
  $button.on("click", function () {
    $sortList.toggleClass("active");
    $arrow.toggleClass("rotated");
  });
  $sortItems.on("click", function () {
    const selectedText = $(this).text();
    $button.contents().first()[0].textContent = selectedText;
    $sortList.removeClass("active");
    $arrow.removeClass("rotated");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".sort").length) {
      $sortList.removeClass("active");
      $arrow.removeClass("rotated");
    }
  });
});

$(document).ready(function () {
  $(".tab").on("click", function () {
    $(".tab, .tab-content").removeClass("active");

    $(this).addClass("active");
    $("#" + $(this).data("tab")).addClass("active");
  });
});

//-----------------------SLIDERS-----------------------//
$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1500,
  dots: true,
});
if ($(window).width() <= 768) {
  $(".watch_types-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".watch_types").find(".prev"),
    nextArrow: $(".watch_types").find(".next"),
  });
}
if ($(window).width() <= 768) {
  $(".catalog.less").each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(this).closest("section").find(".prev"),
      nextArrow: $(this).closest("section").find(".next"),
    });
  });
}

$(".reviews-list").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".reviews").find(".prev"),
  nextArrow: $(".reviews").find(".next"),
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});
$(".gallery-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        fade: false,
      },
    },
  ],
});
$(".gallery-nav-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".gallery-slider",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: true,
  centerMode: true,
  centerPadding: "60px",
  prevArrow: $(".gallery").find(".prev"),
  nextArrow: $(".gallery").find(".next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
      },
    },
  ],
});

$(".eduSol-img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".eduSol").find(".prev"),
  nextArrow: $(".eduSol").find(".next"),
});

$(document).ready(function () {
  const filters = $(".filter-item");
  const content = $(".content");

  filters.on("click", function () {
    const target = $(this).data("filter");

    filters.removeClass("active");
    $(this).addClass("active");

    content.each(function () {
      const content = $(this);
      if (content.data("content") === target) {
        content.addClass("active");
      } else {
        content.removeClass("active");
      }
    });
  });
});

$(document).ready(function () {
  var $phoneInput = $("#tel, .tel");
  var $myForm = $("#myForm");

  $phoneInput.on("input", function (e) {
    var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});

$(document).ready(function () {
  $(".select-wrapper").on("click", function () {
    var $selectItems = $(this).siblings(".select-items");
    var $selectSelected = $(this).children(".select-selected");
    $(this).toggleClass("active");
    $selectSelected.toggleClass("active");
    $selectItems.toggleClass("select-hide");
  });

  $(".select-item").on("click", function () {
    var selectedText = $(this).text();
    var selectedValue = $(this).data("value");

    $(this).closest(".custom-select").find(".select-selected").text(selectedText);
    $(this).closest(".custom-select").find("#customSelect").val(selectedValue);

    $(".select-items").addClass("select-hide");
    $(".select-selected").removeClass("active");
    $(".select-selected").css("color", "#000");
    $(".select-wrapper").removeClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".custom-select").length) {
      $(".select-items").addClass("select-hide");
      $(".select-selected").removeClass("active");
    }
  });
});

const validation = new JustValidate("#main-form");
validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField(".phoneInput", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
