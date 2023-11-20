
{
    document.getElementById("languageDropdown").addEventListener("click", function () {
        this.classList.toggle("up");
    });
    document.getElementById("currencyDropdown").addEventListener("click", function () {
        this.classList.toggle("up");
    });
}
{
    $(document).ready(function () {
        $('.header__end__btn').click(function () {
            var rotation = $(this).hasClass('rotate180') ? 'rotate(0deg)' : 'rotate(180deg)';
            $(this).toggleClass('rotate180');
            $(this).find('i').css('transform', 'rotateY(180deg)');
        });
    
        
        $(document).on('click', function (e) {
            if (!$('.header__end__dropdown').is(e.target) && $('.header__end__dropdown').has(e.target).length === 0) {
                $('.header__end__btn').removeClass('rotate180');
                $('.header__end__btn i').css('transform', 'rotateY(0deg)');
            }
        });
    });
    
}
{
    document.addEventListener('DOMContentLoaded', function () {
        // Set the date when the discount ends
        var discountEndDate = new Date("Nov 30, 2023 00:00:00").getTime();

        // Update the countdown every 1 second
        var x = setInterval(function () {
            // Get the current date and time
            var now = new Date().getTime();

            // Calculate the remaining time
            var distance = discountEndDate - now;

            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown in the respective elements
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // If the countdown is over, display a message
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "Discount Expired";
            }
        }, 1000);
    });

}

// Navbar modals
{
    $(document).ready(function () {
        $('.navbar-nav .dropdown').on('show.bs.dropdown', function () {
            $(this).find('.dropdown-toggle').addClass('rotate');
        }).on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-toggle').removeClass('rotate');
        });
    
        $("#person-icon").click(function () {
            // Show your modal here
            $("#loginModal").modal("show");
        });
    });
    
    $(document).ready(function () {
        // Initialize the modal
        $(document).ready(function () {
            // Click event for the person icon
            $("#person-icon").on("click", function () {
                // Show the modal
                $('#loginRegisterModal').modal('show');
            });
    
            // Click event for the close button inside the modal
            $(".close").on("click", function () {
                // Close the modal
                $('#loginRegisterModal').modal('hide');
            });
        });
        
        
    });
    
    function openTab(evt, tabName) {
        // Hide all tab contents
        $(".tabcontent").hide();
        
        // Deactivate all tab links
        $(".tablink").removeClass("active");
        
        // Show the selected tab content
        $("#" + tabName).show();
        
        // Activate the clicked tab link
        $(evt.target).addClass("active");
    }
    
    // Click event for the close button inside the modal
    $(".close").on("click", function () {
        // Close the modal
        $('#loginRegisterModal').modal('hide');
    });
    
    function openTab(evt, tabName) {
        // Hide all tab contents
        $(".tabcontent").hide();
        
        // Deactivate all tab links
        $(".tablink").removeClass("active").css("color", ""); // Reset text color
        
        // Show the selected tab content
        $("#" + tabName).show();
        
        // Activate the clicked tab link and change its text color to goldenrod
        $(evt.target).addClass("active").css("color", "goldenrod");
    }
    
    $(document).ready(function () {
        // close-btn üzerine gelindiğinde animasyon ekleyin
        $(".close").hover(
            function () {
                $(this).css("transform", "rotate(180deg)");
            },
            function () {
                $(this).css("transform", "rotate(0deg)");
            }
        );
    });
    
    // Right sidebar
    $(document).ready(function () {
        // Click event for the fa-bars-staggered icon
        $("#openSidebar").on("click", function () {
            // Execute code before the modal is shown
            $('#sidebarRight').on('show.bs.modal', function () {
                // Your code to execute before the modal is shown
            });
    
            // Show the right sidebar modal
            $('#sidebarRight').modal('show');
        });
    });
    
}