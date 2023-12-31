$(document).ready(function () {

    'use strict';

    var loginUsernameError = true,
        loginEmailError    = true,
        loginPasswordError = true,
        loginPassConfirm   = true;

    // Detect browser for CSS purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.login form label').addClass('fontSwitch');
    }

    // Label effect
    $('input').focus(function () {
        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('input').blur(function () {
        // User Name
        if ($(this).hasClass('login-name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.login-form-group').addClass('hasError');
                loginUsernameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.login-form-group').addClass('hasError');
                loginUsernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.login-form-group').removeClass('hasError');
                loginUsernameError = false;
            }
        }

        // Email
        if ($(this).hasClass('login-email')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.login-form-group').addClass('hasError');
                loginEmailError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.login-form-group').removeClass('hasError');
                loginEmailError = false;
            }
        }

        // Password
        if ($(this).hasClass('login-pass')) {
            if ($(this).val().length < 8) {
                $(this).siblings('span.error').text('Please type at least 8 characters').fadeIn().parent('.login-form-group').addClass('hasError');
                loginPasswordError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.login-form-group').removeClass('hasError');
                loginPasswordError = false;
            }
        }

        // Password confirmation
        if ($(this).hasClass('login-passConfirm')) {
            if ($('.login-pass').val() !== $('.login-passConfirm').val()) {
                $(this).siblings('span.error').text("Passwords don't match").fadeIn().parent('.login-form-group').addClass('hasError');
                loginPassConfirm = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.login-form-group').removeClass('hasError');
                loginPassConfirm = false;
            }
        }

        // Label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });

    // Form switch
    $('a.login-switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.login-switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });

    // Form submit
    $('form.login-signup-form-form').submit(function (event) {
        event.preventDefault();

        if (loginUsernameError || loginEmailError || loginPasswordError || loginPassConfirm) {
            $('.login-name, .login-email, .login-pass, .login-passConfirm').blur();
        } else {
            $('.login, .login').addClass('switched');

            setTimeout(function () { $('.login, .login').hide(); }, 700);
            setTimeout(function () { $('.login-brand').addClass('active'); }, 300);
            setTimeout(function () { $('.login-heading').addClass('active'); }, 600);
            setTimeout(function () { $('.login-success-msg p').addClass('active'); }, 900);
            setTimeout(function () { $('.login-success-msg a').addClass('active'); }, 1050);
            setTimeout(function () { $('.login-form').hide(); }, 700);
        }
    });

    // Reload page
    $('a.login-profile').on('click', function () {
        location.reload(true);
    });
});
