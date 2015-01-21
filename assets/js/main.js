$(function() {
	smoothScroll(500);
	activateMenu();
	work_toggle();
	handle_form_submit();
});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event)
	{
		var target =  $( $(this).attr('href') );

		if (target.length)
		{
			event.preventDefault();
			// Animate scroll
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

function activateMenu() {
	var nav = $('nav'),
		links_list = $('.nav > ul');	
	
	nav.headroom({
		"offset": 205,
		"tolerance": 5,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

	links_list.hide(); // To initialize hide 

	$('.nav-header a').on('click', {menu: links_list}, function(event){
		$(event.data.menu).slideToggle();
	});

	$('.nav ul a').on('click', {menu: links_list} , function(event)
	{

		$(this).parent('li').addClass('active')
			.siblings('li').removeClass('active');

		if (event.data.menu.css('display') !== 'none')
			event.data.menu
				.slideUp();
	});
}

function work_toggle()
  {
    $('.work-tile-link').on('click', function(e){
      e.preventDefault();
      var $this = $(this),
      linkTo = $this.attr('href'),
      site_url = $this.attr('data-siteurl');
      console.log("Getting projects...", linkTo, site_url);

      // Get projects
      get_project(site_url, linkTo.substr(1));

      open_work(linkTo);
    });
  }
  
function get_project(url, name) {
	
	var loader = '<div class="loader"><div class="innerLoader"></div></div>',
		project = url + "/projects/" + name + ".html";

	$('.work-container').html(loader);

	$.ajax({
		cache: true,
		url: project,
	}).done(function() {
		console.log("Project", project);
		$('.work-container').load(project, function() {
			close_work(); // Preferably run this once
		});
	}).fail(function() {
		console.error(project, "not found");
		// Remove ajax loader
		$('.loader').remove();
		// open grid
		$('.work-grid').slideDown('slow');
	});

}

function open_work(id)
{
	var res = $('.work-container').find(id).slideDown('slow');

	$('.work-grid').slideUp('slow');
}
  
function close_work()
{

	once(
		$('.work-container .close').on('click', function(e){
			console.log("Closing...");
			e.preventDefault();
		    $(this).parent('.work').slideUp();
		    $('.work-grid').slideDown('slow');
		})
	);

}

function handle_form_submit()
{
	var form = $('#contact-form'),
		action = form.attr('action'),
		submit = form.find("[type='submit']"),
		form_name = form.find('#contact-name'),
		form_email = form.find('#contact-email'),
		form_subject = form.find('#contact-subject'),
		form_message = form.find('#contact-message'),
		form_result = form.find('.form-result');
	
	// Honeypot trap for bots
	submit.before('<input type="text" name="isBot" id="isBot"/>');
	honeyPot = form.find('#isBot');

	form.submit(function(){

		form_name.removeClass('error');
		form_email.removeClass('error');
		form_subject.removeClass('error');
		form_message.removeClass('error');

		if(!validate(form_name, 'text'))
		{
			form_name.addClass('error').next('.error-message').text('What do I call you');
		}

		if(!validate(form_email, 'email'))
		{
			form_email.addClass('error').next('.error-message').text('The email is not valid');
		}

		if(!validate(form_subject, 'text'))
		{
			form_subject.addClass('error').next('.error-message').text('The subject is required');
		}

		if(!validate(form_message, 'text'))
		{
			form_message.addClass('error').next('.error-message').text('Please write something');
		}

		// If validation no errors
		if(!form.find('input, textarea').hasClass('error') && honeyPot.val() === '')
		{
			// Disable submit (prevent double-submission)
			submit.attr('disabled', 'disabled');
			submit_test = submit.val();
			submit.val('submitting...');

			// Submit form
			$.post(action, {
				name: form_name.val(),
				email: form_email.val(),
				subject: form_subject.val(),
				message: form_message.val()
			},
			function(data) // On success
			{
				// Clear form
				form.find('input[type="text"], textarea').val('');
				// Re-enable submit
				submit.attr('disabled', false);
				submit.val(submit_test);

				// Show the success message
				form_result.slideDown().css('display', 'block');
			}, 'json');
		}

		return false;
	});
}

function validate(elem, type)
{
	// Validation
		switch (type) {
			case 'email':
				result = validateEmail(elem.val());
				break;
			case 'text':
				result = elem.val().length > 0;
				break;
			default:
				result = false;
				break;
		}

		return result;
}

function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// David Walsh 'Once' function - run a function once
function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}