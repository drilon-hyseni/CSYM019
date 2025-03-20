$(document).ready(function () {
  $("#movies").load("movies.html");
  $("#movies").change(function () {
    let movie = $(this).val();
    let apiUrl =
      " https://api.themoviedb.org/3/movie" +
      movie +
      "?api_key=44a0cdc96f987136ea05e492606cc571&language=en-US";

    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function (response) {
        $.each(response, function () {
          $("moviesinfo").html = "";
          $("moviesinfo").append(response.overview);
          if ($("moviesinfo").attr("hidden")) {
            $("moviesinfo").show();
          }
          $("moviesinfo").css({
            "border-color": "#C1E0FF",
            "border-weight": "1px",
            "border-style": "solid",
            "margin-top": "1rem",
            width: "50%",
            padding: "0.5rem",
          });
        });
      },
      error: function (xhr, error) {
        $("#info").append(
          error.toUpperCase() + " . HTTP Status: " + xhr.status
        );
      },
    });
  });
});
