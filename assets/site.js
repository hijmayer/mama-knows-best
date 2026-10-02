/* Mama Knows Best site script */
(function () {
  /* Newsletter settings. Leave action empty to keep signup forms hidden.
     MailerLite: action = form URL ending in /subscribe, field = "fields[email]"
     Kit (ConvertKit): action = https://app.kit.com/forms/FORM_ID/subscriptions, field = "email_address" */
  var NEWSLETTER = { action: "", field: "email" };

  var root = document.documentElement;

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = root.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".site-nav a").forEach(function (a) {
      a.addEventListener("click", function () { root.classList.remove("menu-open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  // Newsletter forms
  if (NEWSLETTER.action) {
    root.classList.add("nl-on");
    document.querySelectorAll("form.nl-form").forEach(function (f) {
      f.action = NEWSLETTER.action;
      f.method = "post";
      var input = f.querySelector("input[type=email]");
      if (input) input.name = NEWSLETTER.field;
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        fetch(f.action, { method: "POST", body: new FormData(f), mode: "no-cors" })
          .then(function () { f.parentNode.classList.add("nl-done"); })
          .catch(function () { f.submit(); });
      });
    });
  }

  // Article filter chips (blog index)
  var chips = document.querySelectorAll("[data-filter]");
  if (chips.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.classList.toggle("is-active", c === chip); });
        document.querySelectorAll("[data-cat]").forEach(function (card) {
          card.style.display = (f === "all" || card.getAttribute("data-cat") === f) ? "" : "none";
        });
      });
    });
  }

  // Contact form success message
  if (/[?&]sent=1/.test(location.search)) {
    var ok = document.getElementById("contact-success");
    if (ok) { ok.style.display = "block"; ok.scrollIntoView({ block: "center" }); }
  }
})();
