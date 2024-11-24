// Google Translate Button Customization
$(document).ready(function () {
    // Ensure the translation menu loads properly
    $('#google_translate_element').on('DOMNodeInserted', function () {
        $('.goog-te-menu-value span:first').text('Select Language');
    });
});
