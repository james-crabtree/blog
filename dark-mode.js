// This code insures that the Javascript doesn't activate until all the HTML and the DOM is loaded up fully.
document.addEventListener('DOMContentLoaded', () => {
  // This selects an HTML stylesheet element and stores it in a variable called 'stylesheet'
  const stylesheet = document.getElementById('stylesheet');
  // When the dark-mode-image in clicked it will activate dark mode, or activate light mode if it's already in dark mode.
  const darkModeImage = document.getElementById('dark-mode-image');
  // This selects an HTML element with the ID "dark-mode-toggle" and stores it in the darkModeToggle variable.
  const darkModeLink = document.getElementById('dark-mode-link');

  // This adds a click listener to the dark mode button, so when it gets clicked it will activate the code below it.
  darkModeImage.addEventListener('click' , function() {
    console.log('THIS IS CLICKED')
  });
  darkModeLink.addEventListener('click', () => {
    // Checks what stylesheet is currently active.
    // If it is equal to 'styles.css' then that means the blog is in light mode currently.
    if (stylesheet.getAttribute('href') === 'styles.css') {
      // If the blog is in light mode, this code updates the stylesheet href to the dark mode stylesheet
      // It turns the button into the dark mode button.
      stylesheet.setAttribute('href', 'dark.css');
      console.log(stylesheet.getAttribute('href'))
      darkModeImage.src = 'images/other/moon-stars.png';
    } else {
      // If the blog is in dark mode, this code updates the stylesheet href to the light mode stylesheet
      // It turns the button back to the light mode (the default) button.
      stylesheet.setAttribute('href', 'styles.css');
      darkModeImage.src = 'images/other/brightness.png';
    }
  });
});

  // // Load the header content from 'header.html' into the 'header' element.
  // const headerElement = document.getElementById('header');
  // fetch('header.html')
  //   .then((response) => response.text())
  //   .then((data) => {
  //     headerElement.innerHTML = data;
  //   })
  //   .catch((error) => {
  //     console.error('Error loading header:', error);
  //   });


