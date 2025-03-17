document.getElementById("navBarSection").style.display = "none";
document.getElementById("bannerSection").style.display = "";
document.getElementById("learnSection").style.display = "none";
document.getElementById("faqSection").style.display = "none";
document.getElementById("footerSection").style.display = "";
document.getElementById("word-container").style.display = "none";

document.getElementById("getStarted").addEventListener("click", function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const userPin = document.getElementById("userPin").value;

    if (userName === "") {
      alert("enter your name")
    }else if (userPin !== "123456") {
      alert("enter your pin")
    } else {
      
    }
    if (userName !== "" && userPin === "123456") {
      alert("you are success");
      document.getElementById("navBarSection").style.display = "";
      document.getElementById("bannerSection").style.display = "none";
      document.getElementById("learnSection").style.display = "";
      document.getElementById("word-container").style.display = "";
      document.getElementById("faqSection").style.display = "";
      document.getElementById("footerSection").style.display = "";
    }
    
  });

document.getElementById("logout").addEventListener("click", function () {
  document.getElementById("navBarSection").style.display = "none";
  document.getElementById("bannerSection").style.display = "";
  document.getElementById("learnSection").style.display = "none";
  document.getElementById("faqSection").style.display = "none";
  document.getElementById("footerSection").style.display = "";
});
