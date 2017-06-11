'use strict';

var app = angular.module('timeline', [
		'ngSanitize',
	 	  'angular-timeline',
		'angular-scroll-animate'
]);

var ExperienceTimeline = function($rootScope, $document, $timeout, $scope) {

	$scope.side = '';

	$scope.events = [{
		badgeClass: 'info',
		badgeIconClass: 'glyphicon-briefcase',
		title: 'Daitan Group',
		titleContentHtml: '<h3>Full Stack Developer</h3>',
		when: 'May 2017 - Current',
		contentHtml: '<p>Work with sip and HTTP, Java, Erlang, Jersey, Feign, RibbonMQ, Guice and other technologies to create freeswitch and web solutions for client companies that work with PABXs</p>'
	}, {
		badgeClass: 'info',
		badgeIconClass: 'glyphicon-briefcase',
		title: 'Empresa Junior Obelisco Soluções em Sofware',
		titleContentHtml: '<h3>Chief Executive Officer </h3>',
		when: 'July 2016 - Current',
		contentHtml: "<p>Represent Empresa Júnior Obelisco - Soluções em Software;</p><p>Develop, maintain and follow the company's Business Plan;</p><p>Summon council meetings;</p><p>Develop and plan joint actions with the Technical and Administrative Directors;</p><p>Issue normative instructions for the internal regulations</p><p>Raise demands and needs of the community and / or potential clients;</p><p>Issue Executive Orders for the dissolution of departments and / or creation of new departments;</p><p>Manage meetings with the Administrative Council for management and / or administrative decisions.</p>"
	},  {
		badgeClass: 'info',
		badgeIconClass: 'glyphicon-education',
		title: 'Bearing Point - Trinity College Dublin ',
		when: 'January 2016 – July 2016',	
		titleContentHtml: '<h3>Full Stack Developer Intern</h3>',
		contentHtml: 'Project, develop and deploy a Web System and Database for BearingPoint on behalf of Trinity College Dublin. BearingPoint tested and approved the web-based software, which replaces the tools used in the past to manage and visualize the employee’s productiveness.',
		footerContentHtml: ''
	}, {
		badgeClass: 'info',
		badgeIconClass: 'glyphicon-wrench',
		title: 'Dell Computers Inc.',
		titleContentHtml: '<h3>Intern Test Engineer</h3>',
		contentHtml: "<p>My activities at Dell include:</p><p>-Web Systems deployment for the Electrical and Mechanical Repair(EMR) team;</p><p>-Tools deployment and support for Test Engineering Portal, EMR and ARB;</p><p>-Support EMR and Asset Recover Business(ARB) teams on failure analysis;</p><p>-Support PILOTs of new products and blocks updates;</p><p>-Create/manage work instructions of interactive functional tests;</p><p>-Support for the Quality team on First Pass Yield analysis;</p>",
		when: 'August 2014 - August 2015',
		footerContentHtml: ''
	}, {
		badgeClass: 'info',
		badgeIconClass: 'glyphicon-education',
		title: 'Federal Institute Of Sao Paulo',
		titleContentHtml: '<h3>Teaching Assistant</h3>',
		contentHtml: "Give lectures on the following subjects: Programming Algorithms, Programming Languages and Data Structure l.",
		when: 'January 2014 – May 2015',
		footerContentHtml: ''
	}, {
		badgeClass: 'info',
		badgeIconClass: 'glyphicon-eye-open',
		title: 'CTI Renato Archer',
		titleContentHtml: '<h3>Volunteer Researcher</h3>',
		contentHtml: "Work as a Researcher at the Movements Analysis using Vicon equipment; Capture and process human movement data, which would then be transferred to a Animated 3D Doll using Blender Software.",
		when: 'February 2014 – July 2014',
		footerContentHtml: ''
	}
	
	];

	$scope.addEvent = function() {
		$scope.events.push({
			badgeClass: 'info',
			badgeIconClass: 'glyphicon-check',
			title: 'First heading',
			when: '3 hours ago via Twitter',
			content: 'Some awesome content.'
		});

	};
	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};

	$scope.leftAlign = function() {
		$scope.side = 'left';
	}

	$scope.rightAlign = function() {
		$scope.side = 'right';
	}

	$scope.defaultAlign = function() {
		$scope.side = ''; // or 'alternate'
	}
};

angular.module('timeline').controller('ExperienceTimeline', ExperienceTimeline);
