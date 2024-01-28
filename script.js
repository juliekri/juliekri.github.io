let smallscreen = window.outerWidth;

function sizeHandler() {
    console.log("sizehandler")
    smallscreen = window.innerWidth;
    if (smallscreen > 1200) {
      hamburgerMenu = false;
    } else {
      hamburgerMenu = true;
    }
  }
  window.onresize = sizeHandler;
  window.onload = sizeHandler;

  function handleShowDropDown(event) {
    event.target.parentElement;
    console.log("handledrop", event.target.parentElement)

    let hideDropDown = document.querySelector(".showDropDown.hide");
    if (hideDropDown) {
      document.querySelector(".showDropDown").classList.remove("hide");
    } else if (!hideDropDown) {
      document.querySelector(".showDropDown").classList.add("hide");
    }
  }