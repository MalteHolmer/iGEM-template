$(document).ready(function () {
  //load html on click of a button
  $("#notebook-menu_submit").click(function (e) {

    var monthForm = $("[name='month']");
    var projectForm = $("[name='project']");

    var dateSelect = $(".notebook-dateselect")

    //Übergibt die ausgewählten Values an die AJAX-Funktion
    loadMonth(projectForm.val(), monthForm.val());
  });
});

//loading is done with asynchronous http-request and added to notebook-display
function loadMonth(project, month) {
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("notebook-display").innerHTML = this.responseText;
    }
  }
  xhttp.open("GET", "http://2018.igem.org/Team:Goettingen/Notebook/" + project + "_" + month + "?action=raw&amp;ctype=text", false);
  xhttp.send();
}
