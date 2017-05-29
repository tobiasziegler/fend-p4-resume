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
	format: function(template, content) {
		var output = template.replace('%data%', content);
		return output;
	},
	display: function() {
		$("#header").prepend(bio.format(HTMLheaderRole, bio.role));
		$("#header").prepend(bio.format(HTMLheaderName, bio.name));
		$("#topContacts").append(bio.format(HTMLmobile, bio.contacts.mobile));
		$("#topContacts").append(bio.format(HTMLemail, bio.contacts.email));
		$("#topContacts").append(bio.format(HTMLgithub, bio.contacts.github));
		$("#topContacts").append(bio.format(HTMLtwitter, bio.contacts.twitter));
		$("#topContacts").append(bio.format(HTMLlocation, bio.contacts.location));
		$("#footerContacts").append(bio.format(HTMLmobile, bio.contacts.mobile));
		$("#footerContacts").append(bio.format(HTMLemail, bio.contacts.email));
		$("#footerContacts").append(bio.format(HTMLgithub, bio.contacts.github));
		$("#footerContacts").append(bio.format(HTMLtwitter, bio.contacts.twitter));
		$("#footerContacts").append(bio.format(HTMLlocation, bio.contacts.location));
		$("#header").append(bio.format(HTMLbioPic, bio.biopic));
		$("#header").append(bio.format(HTMLwelcomeMsg, bio.welcomeMessage));

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			bio.skills.forEach(function(skill) {
				$("#skills").append(bio.format(HTMLskills, skill));
			});
		}
	}
};

bio.display();
