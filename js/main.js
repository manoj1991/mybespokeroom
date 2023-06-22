$(document).ready(function () {
    var currentSlide = 1;
    var totalSlides = $('.slide').length;

    // Show the first slide
    $('.slide#slide1').show();

    // Disable previous button on first slide
    $('.prev-btn').attr('disabled','disabled');

    // Handle next button click
    $('.next-btn').on('click', function () {
        // Hide current slide
        $('.slide#slide' + currentSlide).hide();

        // Increment current slide index
        currentSlide++;

        // Show next slide
        $('.slide#slide' + currentSlide).show();

        // Update buttons based on current slide index
        updateButtons();
    });
    $("#slide1a").click(function () {
        console.log("1st slide After");

    })

    $("#switch1").click(function () {
        $("#slide1b").toggleClass("w-font");
        $("#slide1a").toggleClass("w-font");
        $(".after").toggle();
        $(".before").toggle();
    })

    $("#switch2").click(function () {
        $("#slide2b").toggleClass("w-font");
        $("#slide2a").toggleClass("w-font");
        $(".after2").toggle();
        $(".before2").toggle();
    })

    $("#switch3").click(function () {
        $("#slide3b").toggleClass("w-font");
        $("#slide3a").toggleClass("w-font");
        $(".after3").toggle();
        $(".before3").toggle();
    })
    // Handle previous button click
    $('.prev-btn').on('click', function () {
        // Hide current slide
        $('.slide#slide' + currentSlide).hide();

        // Decrement current slide index
        currentSlide--;

        // Show previous slide
        $('.slide#slide' + currentSlide).show();

        // Update buttons based on current slide index
        updateButtons();
    });

    // Function to update buttons based on current slide index
    function updateButtons() {
        // Enable/disable previous button
        if (currentSlide === 1) {
            $('.prev-btn').prop('disabled', true);
        } else {
            $('.prev-btn').prop('disabled', false);
        }

        // Enable/disable next button
        if (currentSlide === totalSlides) {
            $('.next-btn').prop('disabled', true);
        } else {
            $('.next-btn').prop('disabled', false);
        }
    }
});