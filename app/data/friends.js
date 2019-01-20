let friends = [
    {
      name: "Ross Geller",
      photo: "http://68.media.tumblr.com/6cea09c793de512f267ffb4dc783f466/tumblr_mh3c4hFGPu1r9zaago1_500.gif",
      scores: [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
    },
    {
      name: "Phoebe Buffay",
      photo: "http://25.media.tumblr.com/23e479224f5179ac42665e7a648cf309/tumblr_mndv0cYih81r9zaago1_500.gif",
      scores: [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
      ]
    },
    {
      name: "Rachel Green",
      photo: "http://38.media.tumblr.com/20ad32ddb6e4a8d04dea653b0373dfa6/tumblr_mfv54rXt5l1r9zaago1_500.gif",
      scores: [
        "5",
        "2",
        "2",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
      ]
    },
    {
      name: "Monica Geller",
      photo: "https://media.giphy.com/media/beYVvBUHy1Gla/giphy.gif",
      scores: [
        "3",
        "3",
        "4",
        "2",
        "2",
        "1",
        "3",
        "2",
        "2",
        "3"
      ]
    },
    {
      name: "Joey Tribiani",
      photo: "https://media.giphy.com/media/1FDzUi3TRm4yQ/giphy.gif",
      scores: [
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "4"
      ]
    },
    {
      name: "Chandler Bing",
      photo: "http://33.media.tumblr.com/cf9686363fde6ca698a9b5b603eef01a/tumblr_ms0bxt7ThZ1r9zaago1_500.gif",
      scores: [
        "4",
        "4",
        "2",
        "3",
        "2",
        "2",
        "3",
        "2",
        "4",
        "5"
      ]
    }
  
  ];
  
  // export the array
  module.exports = friends;

  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
      var isValid = true;
      $(".form-control").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".chosen-select").each(function() {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
      var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };

      // AJAX post the data to the friends API.
      $.post("/api/friends", userData, function(data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });
  
  