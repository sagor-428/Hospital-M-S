// Hospital Management System — shared front-end behaviour
// Handles the mobile sidebar toggle for the Admin / Doctor / Patient
// app shell. No framework, no build step — kept intentionally small.

document.addEventListener('DOMContentLoaded', function () {

  var shell = document.querySelector('.app-shell');

  if (shell) {

    var openShell = function () {
      shell.classList.add('sidebar-open');
    };

    var closeShell = function () {
      shell.classList.remove('sidebar-open');
    };

    document.querySelectorAll('[data-sidebar-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        shell.classList.toggle('sidebar-open');
      });
    });

    var backdrop = shell.querySelector('.sidebar-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', closeShell);
    }

    // Close the sidebar automatically after tapping a link on mobile.
    shell.querySelectorAll('.sidebar-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          closeShell();
        }
      });
    });
  }

  // Auto-dismiss success/error alerts after a few seconds so they
  // don't linger on the page.
  document.querySelectorAll('.alert-dismissible').forEach(function (alertEl) {
    setTimeout(function () {
      if (window.bootstrap && window.bootstrap.Alert) {
        var instance = window.bootstrap.Alert.getOrCreateInstance(alertEl);
        instance.close();
      }
    }, 6000);
  });

});
