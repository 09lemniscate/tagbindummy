$(document).ready(function () {
  $("#getIndTouch").click(function () {
    for (var i = 1; i < 8; i++) {
      $(".errorMsg" + i).html('')
    }
    var e = $("#firstName").val(),
      n = $("#lastName").val(),
      a = $("#inputEmail").val(),
      t = $("#inputPhone").val(),
      s = $("#country").val(),
      r = $("#inputMessage").val(),
      o = window.location.href;
    if ("" == e.trim()) return $(".errorMsg1").html('<span style="color:red;">Please enter your first name.</span>'), $("#firstName").focus(), !1;
    if ("" == n.trim()) return $(".errorMsg2").html('<span style="color:red;">Please enter your last name.</span>'), $("#lastName").keypress(function () {
      $(".errorMsg2").hide().html('<span style="color:red;">Please enter your last name.</span>').fadeIn("slow").delay(5e3).hide(1)
    }), $("#lastName").focus(), !1;
    if ("" == a.trim()) return $(".errorMsg3").html('<span style="color:red;">Please enter your email.</span>'), $("#inputEmail").focus(), !1;
    if ("" != a.trim() && !/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(a)) return $(".errorMsg4").html('<span style="color:red;">Please enter valid email.</span>'), $("#inputEmail").focus(), !1;
    if ("" == t.trim()) return $(".errorMsg5").html('<span style="color:red;">Please enter your phone number.</span>'), $("#inputPhone").focus(), !1;
    if ("" != t.trim() && !/^[6-9][0-9]{9}$/i.test(t)) return $(".errorMsg5").html('<span style="color:red;">Please enter valid phone number.</span>'), $("#inputPhone").focus(), !1;
    if ("select" == s.trim()) return $(".errorMsg6").html('<span style="color:red;">Please select your country.</span>'), $("#country").focus(), !1;
    if ("" == r.trim()) return $(".errorMsg7").html('<span style="color:red;">Please enter your message.</span>'), $("#inputMessage").focus(), !1;
    var l = {
      async: !0,
      crossDomain: !0,
      url: "https://vn9b4cznl4.execute-api.us-east-1.amazonaws.com/default/tagbin_website_form_api",
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true
      },
      processData: !1,
      data: '{"source":"' + o + ',"first_name":"' + e + '","last_name":"' + n + '","email":"' + a + '","contact_number":"' + t + '","country":"' + s + '","message":"' + r + '"}'
    };
    $("#getIndTouch").css("display", "none"), $.ajax(l).done(function (e) {
      $("#firstName").val(""), $("#lastName").val(""), $("#inputEmail").val(""), $("#inputPhone").val(""), $("#Country").val(""), $("#inputMessage").val(""), $(".modal-body .statusMsg").html('<h2 style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</h2>'), $("form.popup-form").css("display", "none"), $("p.statusMsg").css("display", "block"), $("#getIndTouch").css("display", "none")
    }).fail(function (data) {
      $("#firstName").val(""), $("#lastName").val(""), $("#inputEmail").val(""), $("#inputPhone").val(""), $("#Country").val(""), $("#inputMessage").val(""), $(".modal-body .statusMsg").html('<h2 style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</h2>'), $("form.popup-form").css("display", "none"), $("p.statusMsg").css("display", "block"), $("#getIndTouch").css("display", "none")
    })
  })
}), $(document).ready(function () {
  $("#getIndTouchOpening").click(function () {
    for (var i = 1; i < 7; i++) {
      $(".errorOpen" + i).html('')
    }
    var e = $("#firstNameOpen").val(),
      n = $("#lastNameOpen").val(),
      a = $("#inputEmailOpen").val(),
      t = $("#inputPhoneOpen").val(),
      s = $("#openingOpen").val(),
      r = window.location.href;
    if ("" == e.trim()) return $(".errorOpen1").html('<span style="color:red;">Please enter your first name.</span>'), $("#firstNameOpen").focus(), !1;
    if ("" == n.trim()) return $(".errorOpen2").html('<span style="color:red;">Please enter your last name.</span>'), $("#lastNameOpen").focus(), !1;
    if ("" == a.trim()) return $(".errorOpen3").html('<span style="color:red;">Please enter your email.</span>'), $("#inputEmailOpen").focus(), !1;
    if ("" != a.trim() && !/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(a)) return $(".errorOpen4").html('<span style="color:red;">Please enter valid email.</span>'), $("#inputEmailOpen").focus(), !1;
    if ("" == t.trim()) return $(".errorOpen5").html('<span style="color:red;">Please enter your phone number.</span>'), $("#inputPhoneOpen").focus(), !1;
    if ("" != t.trim() && !/^[6-9][0-9]{9}$/i.test(t)) return $(".errorMsg5").html('<span style="color:red;">Please enter valid phone number.</span>'), $("#inputPhone").focus(), !1;
    if ("open" == s.trim()) return $(".errorOpen6").html('<span style="color:red;">Please select your opening.</span>'), $("#openingOpen").focus(), !1;
    var o = {
      async: !0,
      crossDomain: !0,
      url: "https://vn9b4cznl4.execute-api.us-east-1.amazonaws.com/default/tagbin_website_form_api",
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      processData: !1,
      data: '{"source":"' + r + ',"first_name":"' + e + '","last_name":"' + n + '","email":"' + a + '","contact_number":"' + t + '","opening":"' + s + '"}'
    };
    $.ajax(o).done(function (e) {
      $("#firstNameOpen").val(""), $("#lastNameOpen").val(""), $("#inputEmailOpen").val(""), $("#inputPhoneOpen").val(""), $("#openingOpen").val(""), $(".modal-body .statusMsg").html('<h2 style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</h2>'), $("form.popup-form").css("display", "none"), $("#getIndTouch").css("display", "none")
    }).fail(function (e) {
      $("#firstNameOpen").val(""), $("#lastNameOpen").val(""), $("#inputEmailOpen").val(""), $("#inputPhoneOpen").val(""), $("#openingOpen").val(""), $(".modal-body .statusMsg").html('<h2 style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</h2>'), $("form.popup-form").css("display", "none"), $("#getIndTouch").css("display", "none")
    })
  })
}), $("button.close").click(function () {
  $("form.popup-form").css("display", "block"), $("#getIndTouch").css("display", "block"), $("p.statusMsg").css("display", "none")
}), $(".visible-mobile-menu-off .head_btn a").click(function () {
  $("form.popup-form").css("display", "block"), $("#getIndTouch").css("display", "block"), $("p.statusMsg").css("display", "none")
}), $(document).ready(function () {
  $("#getIndTouchContact").click(function () {
    for (var i = 1; i < 8; i++) {
      $(".errorOpen" + i).html('')
    }
    var e = $("#firstNameOpen").val(),
      n = $("#lastNameOpen").val(),
      a = $("#inputEmailOpen").val(),
      t = $("#inputPhoneOpen").val(),
      s = $("#country").val(),
      r = $("#inputMessage").val(),
      o = window.location.href;
    if ("" == e.trim()) return $(".errorOpen1").html('<span style="color:red;">Please enter your first name.</span>'), $("#firstNameOpen").focus(), !1;
    if ("" == n.trim()) return $(".errorOpen2").html('<span style="color:red;">Please enter your last name.</span>'), $("#lastNameOpen").focus(), !1;
    if ("" == a.trim()) return $(".errorOpen3").html('<span style="color:red;">Please enter your email.</span>'), $("#inputEmailOpen").focus(), !1;
    if ("" != a.trim() && !/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(a)) return $(".errorOpen4").html('<span style="color:red;">Please enter valid email.</span>'), $("#inputEmailOpen").focus(), !1;
    if ("" == t.trim()) return $(".errorOpen5").html('<span style="color:red;">Please enter your phone number.</span>'), $("#inputPhone").focus(), !1;
    if ("" != t.trim() && !/^[6-9][0-9]{9}$/i.test(t)) return $(".errorOpen5").html('<span style="color:red;">Please enter valid phone number.</span>'), $("#inputPhone").focus(), !1;
    if ("select" == s.trim()) return $(".errorOpen6").html('<span style="color:red;">Please select your country.</span>'), $("#country").focus(), !1;
    if ("" == r.trim()) return $(".errorOpen7").html('<span style="color:red;">Please enter your message.</span>'), $("#inputMessage").focus(), !1;
    var l = {
      async: !0,
      crossDomain: !0,
      url: "https://vn9b4cznl4.execute-api.us-east-1.amazonaws.com/default/tagbin_website_form_api",
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      processData: !1,
      data: '{"source":"' + o + '","first_name":"' + e + '","last_name":"' + n + '","email":"' + a + '","message":"' + r + '"}'
    };
    $.ajax(l).done(function (e) {
      $(".form-messege").html('<h3 style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</h3>'), $("#firstNameOpen").val(""), $("#lastNameOpen").val(""), $("#inputEmailOpen").val(""), $("#inputPhoneOpen").val(""), $("#country").val("select"), $("#inputMessage").val("")
    }).fail(function (e) {
      $(".form-messege").html('<h3 style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</h3>'), $("#firstNameOpen").val(""), $("#lastNameOpen").val(""), $("#inputEmailOpen").val(""), $("#inputPhoneOpen").val(""), $("#country").val("select"), $("#inputMessage").val("")
    })
  })
}), $(document).ready(function () {
  $("#downloadpdf").click(function () {
    var e = $("#firstNamePdf").val(),
      n = $("#lastNamePdf").val(),
      a = $("#inputEmailPdf").val(),
      t = window.location.href;
    if ("" == e.trim()) return $(".errorPdf1").html('<span style="color:red;">Please enter your first name.</span>'), $("#firstNamePdf").focus(), !1;
    if ("" == n.trim()) return $(".errorPdf2").html('<span style="color:red;">Please enter your last name.</span>'), $("#lastNamePdf").focus(), !1;
    if ("" == a.trim()) return $(".errorPdf3").html('<span style="color:red;">Please enter your email.</span>'), $("#inputEmailPdf").focus(), !1;
    if ("" != a.trim() && !/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(a)) return $(".errorPdf4").html('<span style="color:red;">Please enter valid email.</span>'), $("#inputEmailPdf").focus(), !1;
    var s = {
      async: !0,
      crossDomain: !0,
      url: "https://vn9b4cznl4.execute-api.us-east-1.amazonaws.com/default/tagbin_website_form_api",
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      processData: !1,
      data: '{"source":"' + t + '","first_name":"' + e + '","last_name":"' + n + '","email":"' + a + '"}',
      success: function (e) {
        $("#pdfForm").modal("hide"), window.location.href = "http://tagbin.in/assets/images/case-studies/digital/Tagbin-Project-IFFI-2019-Experience-Zone.pdf"
      }
    };
    $.ajax(s).done(function (e) {
      $("#firstNamePdf").val(""), $("#lastNamePdf").val(""), $("#inputEmailPdf").val(""), $(".pdf-form").html('<h3 style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</h3>')
    })
  })
});
