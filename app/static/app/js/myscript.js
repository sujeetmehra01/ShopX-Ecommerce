$("#slider1, #slider2, #slider3").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      autoplay: true,
    },
    600: {
      items: 3,
      nav: true,
      autoplay: true,
    },
    1000: {
      items: 5,
      nav: true,
      loop: true,
      autoplay: true,
    },
  },
});

$(".plus-cart").click(function () {
  var id = $(this).attr("pid").toString();
  console.log(id);
  var eml = this.parentNode.children[2];
  console.log(eml);
  $.ajax({
    type: "GET",
    url: "/pluscart",
    data: {
      prod_id: id,
    },
    success: function (data) {
      console.log(data);
      eml.innerText = data.quantity;
      document.getElementById("amount").innerHTML = data.amount;
      document.getElementById("totalamount").innerHTML = data.totalamount;
    },
  });
});

$(".minus-cart").click(function () {
  var id = $(this).attr("pid").toString();
  console.log(id);
  var eml = this.parentNode.children[2];
  console.log(eml);
  $.ajax({
    type: "GET",
    url: "/minuscart",
    data: {
      prod_id: id,
    },
    success: function (data) {
      console.log(data);
      eml.innerText = data.quantity;
      document.getElementById("amount").innerHTML = data.amount;
      document.getElementById("totalamount").innerHTML = data.totalamount;
    },
  });
});

$(".remove-cart").click(function () {
  var id = $(this).attr("pid").toString();
  console.log(id);
  var eml = this;
  console.log(eml);
  $.ajax({
    type: "GET",
    url: "/removecart",
    data: {
      prod_id: id,
    },
    success: function (data) {
      console.log(data);
      eml.innerText = data.quantity;
      document.getElementById("amount").innerHTML = data.amount;
      document.getElementById("totalamount").innerHTML = data.totalamount;
      eml.parentNode.parentNode.parentNode.parentNode.remove();
    },
  });
});
