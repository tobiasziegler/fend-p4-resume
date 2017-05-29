var bio = {
	name: 'David Mallard',
	role: 'Front-End Web Developer',
	contacts: {
		mobile: '0432 881 448',
		email: 'correspondence@davidmallard.id.au',
		github: 'tobiasziegler',
		twitter: '@tobiasziegler',
		location: 'Orange, NSW, Australia'
	},
	welcomeMessage: 'I create digital experiences that delight users and meet your organisation\'s goals',
	skills: [
		'user experience design',
		'web development',
		'research and data analysis',
		'content strategy'
	],
	biopic: 'images/tobby.png',

	/**
	* @description Inserts content into the relevant HTML template
	* @param {string} template - The HTML template (see helper.js)
	* @param {string} content - The content to insert in place of the template's %data%
	* @returns {string} HTML-formatted content
	*/
	format: function(template, content) {
		var output = template.replace('%data%', content);
		return output;
	},

	/**
	* @description Appends the resume's contact details to the specified selector
	* @param {jQuery} selector - The element to append the contacts to
	*/
	displayContacts: function(selector) {
		selector.append(bio.format(HTMLmobile, bio.contacts.mobile));
		selector.append(bio.format(HTMLemail, bio.contacts.email));
		selector.append(bio.format(HTMLgithub, bio.contacts.github));
		selector.append(bio.format(HTMLtwitter, bio.contacts.twitter));
		selector.append(bio.format(HTMLlocation, bio.contacts.location));
	},

	/**
	* @description Publishes all of the bio content to the page
	*/
	display: function() {
		$('#header').prepend(bio.format(HTMLheaderRole, bio.role));
		$('#header').prepend(bio.format(HTMLheaderName, bio.name));

		bio.displayContacts($('#topContacts'));

		$('#header').append(bio.format(HTMLbioPic, bio.biopic));
		$('#header').append(bio.format(HTMLwelcomeMsg, bio.welcomeMessage));

		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);

			bio.skills.forEach(function(skill) {
				$('#skills').append(bio.format(HTMLskills, skill));
			});
		}

		bio.displayContacts($('#footerContacts'));
	}
};

var education = {
	schools: [
		{
			name: 'University of New England',
			location: 'Armidale, NSW, Australia',
			degree: 'Graduate Diploma of Legal Studies',
			majors: [
				'law'
			],
			dates: '2007-2009'
		},
		{
			name: 'University of New South Wales',
			location: 'Sydney, NSW, Australia',
			degree: 'Doctor of Philosophy',
			majors: [
				'psychology'
			],
			dates: '1998-2002'
		},
		{
			name: 'University of New South Wales',
			location: 'Sydney, NSW, Australia',
			degree: 'Bachelor of Science (Psychology) (Honours)',
			majors: [
				'psychology'
			],
			dates: '1993-1996'
		}
	],
	onlineCourses: [
		{
			title: 'Front-End Web Developer Nanodegree',
			school: 'Udacity',
			dates: '2017 (in progress)',
			url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
			title: 'User Experience Design',
			school: 'General Assembly',
			dates: '2017',
			url: 'https://generalassemb.ly/education/user-experience-design'
		}
	],

	/**
	* @description Inserts content into the relevant HTML template
	* @param {string} template - The HTML template (see helper.js)
	* @param {string} content - The content to insert in place of the template's %data%
	* @returns {string} HTML-formatted content
	*/
	format: function(template, content) {
		var output = template.replace('%data%', content);
		return output;
	},

	/**
	* @description Publishes all of the education content to the page
	*/
	display: function() {
		if (education.schools.length > 0) {
			education.schools.forEach(function(school) {
				$('#education').append(HTMLschoolStart);

				$('.education-entry:last').append(
					education.format(HTMLschoolName, school.name) +
					education.format(HTMLschoolDegree, school.degree)
				);

				$('.education-entry:last').append(education.format(HTMLschoolDates, school.dates));
				$('.education-entry:last').append(education.format(HTMLschoolLocation, school.location));

				if (school.majors.length > 0) {
					var majorsString = school.majors.join('; ');
					$('.education-entry:last').append(education.format(HTMLschoolMajor, majorsString));
				}
			});
		}
	}
};

bio.display();
education.display();
