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
			isactive: 'Currently enrolled',
			admno: 'Admission Number',
			//course_name: 'Course Name',
			gender: 'Gender',
			//Permanent address
			Permanent_Addressline1: 'Permanent Addressline1',
			Permanent_Addressline2: 'Permanent Addressline2',
			Permanent_City: 'Permanent City',
			Permanent_State: 'Permanent State',
			Permanent_Country: 'Permanent Country',
			Permanent_Pincode: 'Permanent Pincode',
			//Communication address
			Communication_Addressline1: 'Communication Addressline1',
			Communication_Addressline2: 'Communication Addressline2',
			Communication_City: 'Communication City',
			Communication_State: 'Communication State',
			Communication_Country: 'Communication Country',
			Communication_Pincode: 'Communication Pincode',
			Mobile_Number: 'Mobile Number',
			Telephone_Number: 'Telephone Number',
			email: 'email',
			Contact_Center: 'Contact Center',
			Batch_Type: 'Batch Type',
			Dob: 'Date of Birth',
			Father_Name: 'Father Name',
			Mother_Name: 'Mother Name',
			Gender: 'Gender',
			Aadhar_Number: 'Aadhar Number',
			Academics: 'Academics',	
			Attendance: 'Attendance',
			Fees: 'Fees',
			Project: 'Project',
		
			/*genderAllowedValues: {
									male:'Male',
									female: 'Female',
									trans: 'Transgender'},*/
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
			course_duration: 'Course Duration',
			course_durationCount: 'Course Duration Count',
			course_durationPeriod: 'Course Duration Period',
			course_extension: 'Course Extension',
			course_extensionAvailable: 'Course Extension Available',
			course_extensionPeriod: 'Course Extension Period',
			course_admissionStartDate: 'Course Admission Start Date',
			course_admissionEndDate: 'Course Admission End Date',
			course_finalSelectionDate: 'Course Final Selection',
			course_fees: 'Course Fees',
			course_feesDescription: 'Fees Description',
			course_feesType: 'Fees Type',
			course_feesAmount: 'Fees Amount',
			course_feesLastDate: 'Last Date',
			course_feesCurrency: 'Currency',
			course_feesSponsored: 'Sponsored',
			course_examinations: 'Examination',
			course_examType: 'Exam Type',
			course_examDescription: 'Exam Description',
			course_examEligible: 'Exam Eligible',
			course_examGrade: 'Exam Grade',
			course_documentation: 'Course Documentation',
			course_shipments: 'Shipments', 
			course_communications: 'Communications',
			course_graduation: 'Graduation',
			course_sales: 'Sales',
			course_requests: 'Requests',
			courses_slots: 'Slots',
			course_slotRequestSequenceNumber: 'Slot Request Sequence Number',
			course_slotAllocated: 'Slot Allocated',	
		/*	course_durationTypeAllowedValues: {
												day:'Days',
												month:'Months',
												year:'Years'
			},*/
			createdBy: 'Created By',
			createdAt: 'Created At'
		}
	},
	batch: {
		singularName: 'batch',
		pluralName: 'batches',
		title: 'Batch',
		schema: {
			year: 'Year',
			course_start_date: 'Course Start Date',
			admission_start_date: 'Admission Start Date',
			admission_end_date: 'Admission End Date',

			final_selection_date: 'Final Selection Date',
			first_cp_name: 'First Contact Program Name',
			first_cp_start_date: 'First Contact Program Start Date',
			first_cp_end_date: 'First Contact Program End Date',
			first_cp_days: 'First Contact Program Days',
			first_cp_days_label: 'First Contact Program Days Label',
			first_present_am: 'First Present am',
			first_present_pm: 'First Present pm',

			second_cp_name: 'Second Contact Program Name',
			second_cp_start_date: 'Second Contact Program Start Date',
			second_cp_end_date: 'Second Contact Program End Date',
			second_cp_days: 'Second Contact Program Days',
			second_cp_days_label: 'Second Contact Program Days Label',	
			second_present_am: 'Second Present am',
			second_present_pm: 'Second Present pm',
			
			third_cp_name: 'Third Contact Program Name',
			third_cp_start_date: 'Third Contact Program Start Date',
			third_cp_end_date: 'Third Contact Program End Date',
			third_cp_days: 'Third Contact Program Days',
			third_cp_days_label: 'Third Contact Program Days Label',	
			third_present_am: 'Third Present am',
			third_present_pm: 'Third Present pm',

		/*	course_durationTypeAllowedValues: {
												day:'Days',
												month:'Months',
												year:'Years'
			},*/
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
