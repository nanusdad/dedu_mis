/**
 * Here we create our localization
 */

i18n.map('en', {
	accountsPictureLabel: 'Picture',
	accountsNameLabel: 'Name',
	dictionary: {
		images: {
			logo: 'Site Logo'
		},
		public: {
			homeText: 'The text on the home'
		},
		site: {
			donedeal: 'Deal translation'
		}
	},
	posts: {
		singularName: 'post',
		pluralName: 'posts',
		title: 'Posts',
		schema: {
			title: 'Title',
			image: 'Image',
			body: 'Body',
			createdBy: 'Created By',
			createdAt: 'Created At'
		}
	},
	students: {
		singularName: 'student',
		pluralName: 'students',
		title: 'Students',
		schema: {
			title: 'Title',
			sname: 'Name',
			gender: 'Gender',
			genderAllowedValues: ['Male', 'Female', 'Transgender'],
			image: 'Image',
			body: 'Body',
			createdBy: 'Created By',
			createdAt: 'Created At'
		}
	},
	courses: {
		singularName: 'course',
		pluralName: 'courses',
		title: 'Course',
		schema: {
			course_name: 'Course Name',
			course_abbrev: 'Course Abbreviation',
			course_fees: 'Course Fee',
			course_duration: 'Course Duration',
			course_durationType: 'Course Duration Type',
			course_durationTypeAllowedValues: {
												day:'Days',
												month:'Months',
												year:'Year'
			},
			createdBy: 'Created By',
			createdAt: 'Created At'
		}
	},
	cities: {
		singularName: 'city',
		pluralName: 'cities',
		title: 'Cities',
		schema: {
			name: 'Name',
			image: 'Image',
			body: 'Body',
			createdBy: 'Created By',
			createdAt: 'Created At'
		}
	},
	genders: {
		male: 'Male',
		female: 'Female',
		trans: 'Transgender'
	}

});

i18n.map('es', {
	accountsPictureLabel: 'Foto',
	accountsNameLabel: 'Nombre',
	dictionary: {
		images: {
			logo: 'Logo del sitio'
		},
		public: {
			homeText: 'El texto en el inicio'
		}
	},
	posts: {
		singularName: 'publicación',
		pluralName: 'publicaciones',
		title: 'Publicaciones',
		schema: {
			title: 'Título',
			image: 'Imagen',
			body: 'Contenido',
			createdBy: 'Creado Por',
			createdAt: 'Creado En'
		}
	}
});
