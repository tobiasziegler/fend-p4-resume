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
	*
	* TODO: Look for a way to iterate through all of the properties inside the
	* bio.contacts object -- it would need to match the expected items, but
	* would also need to handle any additional contacts (e.g., LinkedIn).
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
			// #skills section will only be inserted if the array isn't empty
			$('#header').append(HTMLskillsStart);

			bio.skills.forEach(function(skill) {
				$('#skills').append(bio.format(HTMLskills, skill));
			});
		}

		bio.displayContacts($('#footerContacts'));
	}
};

var work = {
	jobs: [
		{
			employer: 'Jan Barham MLC, Parliament of NSW',
			title: 'Policy and Legislation Advisor',
			location: 'Sydney, NSW, Australia',
			dates: '2012-2017',
			description: 'Policy research and analysis, stakeholder consultation, ' +
			'creating and production of content for digital, print and media ' +
			'campaigns, and writing speeches, articles and public communications.'
		},
		{
			employer: 'Charles Sturt University',
			title: 'Senior Lecturer in Psychology',
			location: 'Bathurst, NSW, Australia',
			dates: '2006-2012',
			description: 'Conducted and supervised experimental, survey and diary ' +
			'research. Coordinated fourth-year courses, implemented an online ' +
			'research participation system, and delivered workshops on advanced ' +
			'topics in research.'
		},
		{
			employer: 'Charles Sturt University',
			title: 'Lecturer in Psychology',
			location: 'Bathurst, NSW, Australia',
			dates: '2002-2005',
			description: 'Conducted and supervised survey and experimental research, ' +
			'taught on-campus and distance education subjects, and contributed to ' +
			'school administration and academic leadership.'
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
	* @description Publishes all of the work experience content to the page
	*/
	display: function() {
		work.jobs.forEach(function(job) {
			$('#workExperience').append(HTMLworkStart);

			// Employer and job title join together to form one DOM element
			$('.work-entry:last').append(
				work.format(HTMLworkEmployer, job.employer) +
				work.format(HTMLworkTitle, job.title)
			);

			$('.work-entry:last').append(work.format(HTMLworkDates, job.dates));
			$('.work-entry:last').append(work.format(HTMLworkLocation, job.location));
			$('.work-entry:last').append(work.format(HTMLworkDescription, job.description));
		});
	}
};

var projects = {
	projects: [
		{
			title: 'Animal Trading Cards',
			dates: '2017',
			description: 'In this project for a web development course, I generated ' +
			'content and used HTML5 and CSS to create a card-based layout to present ' +
			'it in line with a supplied mockup.',
			images: [
				'images/animal-trading-cards.jpg'
			]
		},
		{
			title: 'Mockup to Article',
			dates: '2017',
			description: 'In this project for a web development course, I used ' +
			'HTML5 to create a web page that matched the supplied mockup.',
			images: [
				'images/mockup-to-article.jpg'
			]
		},
		{
			title: 'OCC Bin Check-In',
			dates: '2017',
			description: 'In this project for a User Experience Design course, I ' +
			'conducted interviews and other research, then developed and evaluated ' +
			'low- and high-fidelity prototypes for a mobile website to address user ' +
			'needs.',
			images: [
				'images/occ-bin-check-in.jpg'
			]
		},
		{
			title: 'Saving Our Forests',
			dates: '2016-2017',
			description: 'I developed a WordPress child theme, established the ' +
			'information architecture, and produced content.',
			images: [
				'images/saving-our-forests.jpg'
			]
		},
		{
			title: 'Climate Action NSW',
			dates: '2015-2016',
			description: 'I developed a WordPress child theme, established the ' +
			'information architecture, and produced content and functionality to ' +
			'meet campaign objectives.',
			images: [
				'images/climate-action-nsw.jpg'
			]
		},
		{
			title: 'Fund Our Libraries',
			dates: '2014-2015',
			description: 'I implemented a WordPress child-parent theme combination, ' +
			'established the information architecture, and produced content and ' +
			'functionality to meet the campaign objectives.',
			images: [
				'images/fund-our-libraries.jpg'
			]
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
	* @description Publishes all of the content about projects to the page
	*/
	display: function() {
		projects.projects.forEach(function(project) {
			$('#projects').append(HTMLprojectStart);

			$('.project-entry:last').append(projects.format(HTMLprojectTitle, project.title));
			$('.project-entry:last').append(projects.format(HTMLprojectDates, project.dates));
			$('.project-entry:last').append(projects.format(HTMLprojectDescription, project.description));

			project.images.forEach(function(image) {
				$('.project-entry:last').append(projects.format(HTMLprojectImage, image));
			});
		});
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
			dates: '2007-2009',
			url: 'http://www.une.edu.au/'
		},
		{
			name: 'University of New South Wales',
			location: 'Sydney, NSW, Australia',
			degree: 'Doctor of Philosophy',
			majors: [
				'psychology'
			],
			dates: '1998-2002',
			url: 'https://www.unsw.edu.au/'
		},
		{
			name: 'University of New South Wales',
			location: 'Sydney, NSW, Australia',
			degree: 'Bachelor of Science (Psychology) (Honours)',
			majors: [
				'psychology'
			],
			dates: '1993-1996',
			url: 'https://www.unsw.edu.au/'
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
		education.schools.forEach(function(school) {
			$('#education').append(HTMLschoolStart);

			// School name and degree join together to form one DOM element
			$('.education-entry:last').append(
				education.format(HTMLschoolName, school.name) +
				education.format(HTMLschoolDegree, school.degree)
			);

			$('.education-entry:last').append(education.format(HTMLschoolDates, school.dates));
			$('.education-entry:last').append(education.format(HTMLschoolLocation, school.location));

			// Don't display the 'Majors:' line if the array is empty
			if (school.majors.length > 0) {
				// Handle multiple majors by joining them to form a single string
				var majorsString = school.majors.join('; ');
				$('.education-entry:last').append(education.format(HTMLschoolMajor, majorsString));
			}

			if (school.url) {
				// Select the link attached to the school name and degree and assign the URL
				var anchor = $('.education-entry:last').children('a');
				anchor.attr('href', school.url);
			}
		});

		if (education.onlineCourses.length > 0) {
			// Online Classes heading won't appear if the onlineCourses array is empty
			$('#education').append(HTMLonlineClasses);

			education.onlineCourses.forEach(function(course) {
				$('#education').append(HTMLschoolStart);

				// Course title and school join together to form one DOM element
				$('.education-entry:last').append(
					education.format(HTMLonlineTitle, course.title) +
					education.format(HTMLonlineSchool, course.school)
				);

				$('.education-entry:last').append(education.format(HTMLonlineDates, course.dates));

				// Insert the URL as text into the page
				$('.education-entry:last').append(education.format(HTMLonlineURL, course.url));
				// Select the URL text that was inserted and assign the link
				var anchor = $('.education-entry:last').children('a');
				anchor.attr('href', course.url);
			});
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
