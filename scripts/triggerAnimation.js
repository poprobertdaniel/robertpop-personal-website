// listen for scroll event and call animate function
document.addEventListener("scroll", animate);

// check if element is in view
function inView(element) {
  var elementHeight = element.clientHeight;
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  var webPlatformImage = document.getElementsByClassName(
    "web-platform-image"
  )[0];
  var webPlatformDescription = document.getElementsByClassName(
    "web-platform-description"
  )[0];
  var mobilePlatformImage = document.getElementsByClassName(
    "mobile-platform-image"
  )[0];
  var mobilePlatformDescription = document.getElementsByClassName(
    "mobile-platform-description"
  )[0];
  var desktopPlatformImage = document.getElementsByClassName(
    "desktop-platform-image"
  )[0];
  var desktopPlatformDescription = document.getElementsByClassName(
    "desktop-platform-description"
  )[0];
  var backendPlatformImage = document.getElementsByClassName(
    "backend-platform-image"
  )[0];
  var backendPlatformDescription = document.getElementsByClassName(
    "backend-platform-description"
  )[0];
  var cloudPlatformImage = document.getElementsByClassName(
    "cloud-platform-image"
  )[0];
  var cloudPlatformDescription = document.getElementsByClassName(
    "cloud-platform-description"
  )[0];
  var testingPlatformImage = document.getElementsByClassName(
    "testing-platform-image"
  )[0];
  var testingPlatformDescription = document.getElementsByClassName(
    "testing-platform-description"
  )[0];
  var othersPlatformImage = document.getElementsByClassName(
    "others-platform-image"
  )[0];
  var othersPlatformDescription = document.getElementsByClassName(
    "others-platform-description"
  )[0];
  if (inView(webPlatformImage)) {
    webPlatformImage.classList.add("show");
  }
  if (inView(webPlatformDescription)) {
    webPlatformDescription.classList.add("show");
  }
  if (inView(mobilePlatformImage)) {
    mobilePlatformImage.classList.add("show");
  }
  if (inView(mobilePlatformDescription)) {
    mobilePlatformDescription.classList.add("show");
  }
  if (inView(desktopPlatformImage)) {
    desktopPlatformImage.classList.add("show");
  }
  if (inView(desktopPlatformDescription)) {
    desktopPlatformDescription.classList.add("show");
  }
  if (inView(backendPlatformImage)) {
    backendPlatformImage.classList.add("show");
  }
  if (inView(backendPlatformDescription)) {
    backendPlatformDescription.classList.add("show");
  }
  if (inView(cloudPlatformImage)) {
    cloudPlatformImage.classList.add("show");
  }
  if (inView(cloudPlatformDescription)) {
    cloudPlatformDescription.classList.add("show");
  }
  if (inView(testingPlatformImage)) {
    testingPlatformImage.classList.add("show");
  }
  if (inView(testingPlatformDescription)) {
    testingPlatformDescription.classList.add("show");
  }
  if (inView(othersPlatformImage)) {
    othersPlatformImage.classList.add("show");
  }
  if (inView(othersPlatformDescription)) {
    othersPlatformDescription.classList.add("show");
  }
}
