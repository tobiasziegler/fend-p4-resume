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
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
		var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
		var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);
		var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[3]);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedWelcomeMessage);
		$("#header").append(HTMLskillsStart);
		$("#skills").append(formattedSkills0);
		$("#skills").append(formattedSkills1);
		$("#skills").append(formattedSkills2);
		$("#skills").append(formattedSkills3);
	}
};

bio.display();
