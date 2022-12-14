/*
 Template Name: Admiria - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Alertify  Init
 */

"use strict";
!(function() {
  function e(e) {
    return document.querySelector(e);
  }
  function t(e) {
    (l || function() {})("send", "event", "button", "click", "demo", e);
  }
  function i(i, l) {
    var o = e(i);
    o &&
      o.addEventListener("click", function(e) {
        e.preventDefault(), t(i), l();
      });
  }
  var l = l || function() {};
  i("#alertify-alert", function(e) {
    return alertify.alert("This is an alert dialog"), !1;
  }),
    i("#alertify-confirm", function(e) {
      alertify.confirm(
        "This is a confirm dialog",
        function(e) {
          e.preventDefault(), alertify.success("You've clicked OK");
        },
        function(e) {
          e.preventDefault(), alertify.error("You've clicked Cancel");
        }
      );
    }),
    i("#alertify-click-to-close", function(e) {
      alertify.closeLogOnClick(!0).log("Click me to close!");
    }),
    i("#alertify-disable-click-to-close", function(e) {
      alertify
        .closeLogOnClick(!0)
        .log("Click me to close!")
        .closeLogOnClick(!1)
        .log("You can't click to close this!");
    }),
    i("#alertify-reset", function(e) {
      alertify
        .okBtn("Go For It!")
        .reset(e)
        .alert("Custom values were reset");
    }),
    i("#alertify-log-template", function(e) {
      alertify
        .setLogTemplate(function(e) {
          return "log message: " + e;
        })
        .log("This is the message");
    }),
    i("#alertify-max-log-items", function(e) {
      alertify.maxLogItems(1).log("This is the first message"),
        setTimeout(function() {
          alertify.log("The second message will force the first to close.");
        }, 1e3);
    }),
    i("#alertify-prompt", function(e) {
      alertify.defaultValue("Default value").prompt(
        "This is a prompt dialog",
        function(e, t) {
          t.preventDefault(),
            alertify.success("You've clicked OK and typed: " + e);
        },
        function(e) {
          e.preventDefault(), alertify.error("You've clicked Cancel");
        }
      );
    }),
    i("#alertify-ajax", function(e) {
      alertify.confirm(
        "Confirm?",
        function(e) {
          e.preventDefault(), alertify.alert("Successful AJAX after OK");
        },
        function(e) {
          e.preventDefault(), alertify.alert("Successful AJAX after Cancel");
        }
      );
    }),
    i("#alertify-promise", function(e) {
      return "function" != typeof Promise
        ? void alertify.alert("Your browser doesn't support promises")
        : void alertify.confirm("Confirm?").then(function(e) {
            e.event.preventDefault(),
              alertify.alert("You clicked the " + e.buttonClicked + " button!");
          });
    }),
    i("#alertify-notification", function(e) {
      alertify.log("Standard log message");
    }),
    i("#alertify-notification-html", function(e) {
      alertify.log(
        "<img src='https://placehold.it/256x128'><h3 class='font-18'>This is HTML</h3>"
      );
    }),
    i("#alertify-notification-callback", function(e) {
      alertify.log("Standard log message with callback", function(e) {
        e.preventDefault(), alertify.log("You clicked the notification");
      });
    }),
    i("#alertify-success", function(e) {
      alertify.success("Success log message");
    }),
    i("#alertify-success-callback", function(e) {
      alertify.success("Standard log message with callback", function() {
        alertify.success("You clicked the notification");
      });
    }),
    i("#alertify-error", function(e) {
      alertify.error("Error log message");
    }),
    i("#alertify-error-callback", function(e) {
      alertify.error("Standard log message with callback", function(e) {
        e.preventDefault(), alertify.error("You clicked the notification");
      });
    }),
    i("#alertify-delay", function(e) {
      alertify.delay(1e4).log("Hiding in 10 seconds");
    }),
    i("#alertify-forever", function(e) {
      alertify.delay(0).log("Will stay until clicked");
    }),
    i("#alertify-labels", function(e) {
      alertify
        .okBtn("Accept")
        .cancelBtn("Deny")
        .confirm(
          "Confirm dialog with custom button labels",
          function(e) {
            e.preventDefault(), alertify.success("You've clicked OK");
          },
          function(e) {
            e.preventDefault(), alertify.error("You've clicked Cancel");
          }
        );
    }),
    i("#alertify-log-position", function() {
      alertify.delay(1e3),
        alertify.log("Default bottom left position"),
        setTimeout(function() {
          alertify.logPosition("top left"), alertify.log("top left");
        }, 1500),
        setTimeout(function() {
          alertify.logPosition("top right"), alertify.log("top right");
        }, 3e3),
        setTimeout(function() {
          alertify.logPosition("bottom right"), alertify.log("bottom right");
        }, 4500),
        setTimeout(function() {
          alertify.reset(), alertify.log("Back to default");
        }, 6e3);
    });
})();
