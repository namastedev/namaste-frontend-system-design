// Function to set user preferences and display personalized recommendations
function setPreferences() {
    var preferences = document.getElementById('preferences').value;
    setCookie('userPreferences', preferences, 1); // Cookie expires in 1 hour

    // Display personalized recommendations based on preferences
    displayRecommendations(preferences);

    // Hide preferences form and show recommendations container
    document.getElementById('preferences-container').style.display = 'none';
    document.getElementById('recommendations-container').style.display = 'block';
}

// Function to read the user preferences cookie and display recommendations on load
function displayRecommendationsOnLoad() {
    var preferences = getCookie('userPreferences');
    if (preferences) {
        // Display personalized recommendations based on stored preferences
        displayRecommendations(preferences);

        // Hide preferences form and show recommendations container
        document.getElementById('preferences-container').style.display = 'none';
        document.getElementById('recommendations-container').style.display = 'block';
    }
}

// Function to display personalized recommendations based on user preferences
function displayRecommendations(preferences) {
    var recommendations = getRecommendations(preferences);
    document.getElementById('recommendations').innerText = recommendations;
}

// Function to read the value of a cookie with a given name
function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Function to set a cookie
function setCookie(name, value, hours) {
    var expires = '';
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// Function to get personalized recommendations based on user preferences
function getRecommendations(preferences) {
    switch (preferences) {
        case 'movies':
            return 'Check out the latest movies in theaters!';
        case 'books':
            return 'Explore these must-read books!';
        case 'music':
            return 'Listen to these trending music albums!';
        default:
            return 'No recommendations available.';
    }
}

// Function to log out a user
function logoutUser() {
    // Clear user preferences cookie
    eraseCookie('userPreferences');

    // Show preferences form and hide recommendations container
    document.getElementById('preferences-container').style.display = 'block';
    document.getElementById('recommendations-container').style.display = 'none';
}

// Function to erase a cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Display recommendations on page load
window.onload = displayRecommendationsOnLoad;
