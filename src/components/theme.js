// Themes
const colors = {
   darkMode: {
      activated: true,
      backgroundColor: '#121212',
      primaryColor: '#7e3ff2',
      secondaryColor: '#dcdcdc',
      navbarColor: '#363636',
   },
   lightMode: {
      activated: false,
      backgroundColor: '#e6e6e6',
      primaryColor: '#7e3ff2',
      secondaryColor: '#333333',
      navbarColor: '#d6d6d6',
   },
};

// Function to switch between themes
function switchTheme() {
   console.log('Dark mode switched');
   if (colors.darkMode.activated) {
      colors.darkMode.activated = false;
      colors.lightMode.activated = true;

      document.documentElement.style.setProperty(
         '--primaryColor',
         colors.lightMode.primaryColor
      );
      document.documentElement.style.setProperty(
         '--secondaryColor',
         colors.lightMode.secondaryColor
      );
      document.documentElement.style.setProperty(
         '--backgroundColor',
         colors.lightMode.backgroundColor
      );
      document.documentElement.style.setProperty(
         '--navbarColor',
         colors.lightMode.navbarColor
      );
   } else {
      colors.darkMode.activated = true;
      colors.lightMode.activated = false;

      document.documentElement.style.setProperty(
         '--primaryColor',
         colors.darkMode.primaryColor
      );
      document.documentElement.style.setProperty(
         '--secondaryColor',
         colors.darkMode.secondaryColor
      );
      document.documentElement.style.setProperty(
         '--backgroundColor',
         colors.darkMode.backgroundColor
      );
      document.documentElement.style.setProperty(
         '--navbarColor',
         colors.darkMode.navbarColor
      );
   }
}

export { switchTheme };
