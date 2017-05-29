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
	displayContacts: function(selector) {
		selector.append(bio.format(HTMLmobile, bio.contacts.mobile));
		selector.append(bio.format(HTMLemail, bio.contacts.email));
		selector.append(bio.format(HTMLgithub, bio.contacts.github));
		selector.append(bio.format(HTMLtwitter, bio.contacts.twitter));
		selector.append(bio.format(HTMLlocation, bio.contacts.location));
	},
	display: function() {
		$("#header").prepend(bio.format(HTMLheaderRole, bio.role));
		$("#header").prepend(bio.format(HTMLheaderName, bio.name));

		bio.displayContacts($("#topContacts"));

		$("#header").append(bio.format(HTMLbioPic, bio.biopic));
		$("#header").append(bio.format(HTMLwelcomeMsg, bio.welcomeMessage));

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			bio.skills.forEach(function(skill) {
				$("#skills").append(bio.format(HTMLskills, skill));
			});
		}
		
		bio.displayContacts($("#footerContacts"));
	}
};

bio.display();
