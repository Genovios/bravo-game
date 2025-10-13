/* $(document).ready( () => {

  function saveData(userName, powerVal, clickVal) {
    localStorage.setItem("userName", userName);
    localStorage.setItem("powerScore", powerScore);
    localStorage.setItem("clickVal", clickVal);
  };

  function getData() {
    userName = localStorage.getItem("userName");
    powerVal = localStorage.getItem("powerScore");
    clickVal = localStorage.getItem("clickVal");
  };

  $("#settings").on("submit", function(event) {

    event.preventDefault();

    userName = $("userName").val();
    powerScore = $("power");
    clickVal = $("clickScore");

    saveData(userName, powerScore, clickVal);
        
    alert("Highscore saved!");
    console.log(userName);
  });

}); */