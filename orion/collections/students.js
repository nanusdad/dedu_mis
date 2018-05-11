/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields 
 * we will show in the index of the collection in the admin
 */
Students = new orion.collection('students', {
	singularName: orion.helpers.getTranslation('students.singularName'), // The name of one of this items
	pluralName: orion.helpers.getTranslation('students.pluralName'), // The name of more than one of this items
	title: orion.helpers.getTranslation('students.title'), // The title of the page
	link: {
		/**
		 * The text that you want to show in the sidebar.
		 * The default value is the name of the collection, so
		 * in this case is not necesary
		 */
		title: orion.helpers.getTranslation('students.title')
	},
	/**
	 * Tabular settings for this collection
	 */
	tabular: {
		columns: [
			{
				data: 'title',
				title: orion.helpers.getTranslation('students.schema.title')
			},
			{
				data: 'sname',
				title: orion.helpers.getTranslation('students.schema.sname')
			},
			{
				data: 'isactive',
				title: orion.helpers.getTranslation('students.schema.isactive')
			},
			{
				data: 'admno',
				title: orion.helpers.getTranslation('students.schema.admno')
			},
			{
				data: 'gender',
				title: orion.helpers.getTranslation('students.schema.gender')
			},
			//Permanent Address:
			{
				data: 'Permanent_Addressline1',
				title: orion.helpers.getTranslation('students.schema.Permanent_Addressline1')
			},
			{
				data: 'Permanent_Addressline2',
				title: orion.helpers.getTranslation('students.schema.Permanent_Addressline2')
			},
			{
				data:'Permanent_City',
				title: orion.helpers.getTranslation('students.schema.Permanent_City')
			},
			{
				data:'Permanent_State',
				title: orion.helpers.getTranslation('students.schema.Permanent_State')
			},
			{
				data:'Permanent_Country',
				title: orion.helpers.getTranslation('students.schema.Permanent_Country')
			},
			{
				data:'Permanent_Pincode',
				title: orion.helpers.getTranslation('students.schema.Permanent_Pincode')
			},
			//Communication address:
	
			{
				data: 'Communication_Addressline1',
				title: orion.helpers.getTranslation('students.schema.Communication_Addressline1')
			},
			{
				data: 'Communication_Addressline2',
				title: orion.helpers.getTranslation('students.schema.Communication_Addressline2')
			},
			{
				data:'Communication_City',
				title: orion.helpers.getTranslation('students.schema.Communication_City')
			},
			{
				data:'Communication_State',
				title: orion.helpers.getTranslation('students.schema.Communication_State')
			},
			{
				data:'Communication_Country',
				title: orion.helpers.getTranslation('students.schema.Communication_Country')
			},
			{
				data:'Communication_Pincode',
				title: orion.helpers.getTranslation('students.schema.Communication_Pincode')
			},

			{
				data:'Mobile_Number',
				title: orion.helpers.getTranslation('students.schema.Mobile_Number')
			},
			{	data: 'Telephone_Number',
				title: orion.helpers.getTranslation('students.schema.Telephone_Number')
			},
			{
				data: 'email',
				title: orion.helpers.getTranslation('students.schema.email')
			},
			{
				data: 'Contact_Center',
				title: orion.helpers.getTranslation('students.schema.Contact_Center')
			},
			{
				data: 'Batch_Type',
				title: orion.helpers.getTranslation('students.schema.Batch_Type')
			},
			{
				data: 'Dob',
				title: orion.helpers.getTranslation('students.schema.Dob')
			},
			{
				data: 'Father_Name',
				title: orion.helpers.getTranslation('students.schema.Father_Name')
			},
			{
				data: 'Mother_Name',
				title: orion.helpers.getTranslation('students.schema.Mother_Name')
			},
			{
				data: 'Gender',
				title: orion.helpers.getTranslation('students.schema.Gender')
			},
			{
				data: 'Aadhar_Number',
				title: orion.helpers.getTranslation('students.schema.Aadhar_Number')
			},
			{
				data: 'Academics',
				title: orion.helpers.getTranslation('students.schema.Academics')
			},
			{
				data:'Attendance',
				title: orion.helpers.getTranslation('students.schema.Attendance')
			},
			{
				data:'Fees',
				title: orion.helpers.getTranslation('students.schema.Fees')
			},
			{
				data:'Project',
				title: orion.helpers.getTranslation('students.schema.Project')
			},

			/*{
				data: 'residential_address'
				title: orion.helpers.getTranslation('students.schema.residential_address')
			},*/
			
			

//			{
//				dropdown: {
//					type: String,
//					label: "Select One",
//					autoform: {
//						options: /*....*/
//					}
//				}
//			}
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('file', 'image', orion.helpers.getTranslation('students.schema.image')),
      orion.attributeColumn('summernote', 'body', orion.helpers.getTranslation('students.schema.body')),
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('students.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('students.schema.createdAt'))
    ]
	}
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Students.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: orion.helpers.getTranslation('students.schema.title') // We use this function to make i18n work in autoform
	},
	sname: {
		type: String,
		label: orion.helpers.getTranslation('students.schema.sname') // We use this function to make i18n work in autoform
	},
	isactive: {
		type: Boolean,
		label: orion.helpers.getTranslation('students.schema.isactive') // check active or not
	},
	admno: {
		type: String,
		label: orion.helpers.getTranslation('students.schema.admno')
		 // admission no
	},
	gender: {
		//type: String,
		//label: orion.helpers.getTranslation('students.schema.gender') // We use this function to make i18n work in autoform
		//label: "Select One",

			type: String,
			label: orion.helpers.getTranslation('students.schema.gender'), // We use this function to make i18n work in autoform
			/*allowedValues: [
				orion.helpers.getTranslation('students.schema.genderAllowedValues.male'),
				orion.helpers.getTranslation('students.schema.genderAllowedValues.female'),
				orion.helpers.getTranslation('students.schema.genderAllowedValues.trans')
			]*/
			allowedValues: ['Male','Female','Transgender'],
	},
	area: orion.attribute('hasOne', {
		label: 'Course Enrolled'
	}, {
		collection: Courses,
		titleField: 'course_name',
		publicationName: 'postCourses',

		create: function (input, cb) {
			var city = Course.insert({
				name: input,
				published: false
			});
			var newCity = Courses.findOne(course);
			cb(newCourse);
		}
	}),
	Permanent_Addressline1: {
		type: String,
        label: orion.helpers.getTranslation('students.schema.Permanent_Addressline1'),
    },
    
     Permanent_Addressline2: {
		type: String,
        label: orion.helpers.getTranslation('students.schema.Permanent_Addressline2'),
    },
    Permanent_City: {
    	type: String,
    	label: orion.helpers.getTranslation('students.schema.Permanent_City'),
    },
    Permanent_State: {
    	type: String,
    	label: orion.helpers.getTranslation('students.schema.Permanent_State'),
    },
    Permanent_Country: {
    	type: String,
    	label: orion.helpers.getTranslation('students.schema.Permanent_Country'),
    },
  	Permanent_Pincode: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Permanent_Pincode'),
  	},
  	Communication_Addressline1: {
		type: String,
        label: orion.helpers.getTranslation('students.schema.Communication_Addressline1'),
    },
    
    Communication_Addressline2: {
		type: String,
        label: orion.helpers.getTranslation('students.schema.Communication_Addressline2'),
    },
    Communication_City: {
    	type: String,
    	label: orion.helpers.getTranslation('students.schema.Communication_City'),
    },
    Communication_State: {
    	type: String,
    	label: orion.helpers.getTranslation('students.schema.Communication_State'),
    },
    Communication_Country: {
    	type: String,
    	label: orion.helpers.getTranslation('students.schema.Communication_Country'),
    },
  	Communication_Pincode: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Communication_Pincode'),
  	},
  	Mobile_Number: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Mobile_Number'),
  	},
  	Telephone_Number: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Telephone_Number'),
  	},
  	email: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.email'),
  	},
  	Contact_Center: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Contact_Center'),
  		allowedValues: ['Chennai','Vellore','Bangalore','ODC','Hyderabad','Pune','Padhar','Kolakata','Raxaul',
  		'Herbertpur','Delhi','Dimapur','Tezpur','Kolenchery'],
  	},
  	Batch_Type: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Batch_Type'),
  	},
  	Dob: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Dob'),
  	},
  	Father_Name: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Father_Name'),
  	},
  	Mother_Name: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Mother_Name'),
  	},
  	Gender: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Gender'),
  	},
  	Aadhar_Number: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Aadhar_Number'),
  	},
  	Academics: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Academics'),
  	},
  	Attendance: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Attendance'),
  	},
  	Fees: {
  		type: String,
  		label: orion.helpers.getTranslation('students.schema.Fees'),
  	},
  	Project: {
  		 type: String,
  		 label: orion.helpers.getTranslation('students.schema.Project'),
  		 allowedValues: ['Yes','No'],
  	},

	/*residential_address: [
			type: String
	]
	*/


	
	
	
	/*
	We add relationship to cities here
	 */

	
	/**
	 * The file attribute is a custom orion attribute
	 * This is where orion do the magic. Just set 
	 * the attribute type and it will automatically
	 * create the form for the file.
	 * WARNING: the url of the image will not be saved in
	 * .image, it will be saved in .image.url.
	 */
	/**
	 * This attribute sets the user id of the user that created 
	 * this post automatically.
	 */
	createdBy: orion.attribute('createdBy'),
	createdAt: orion.attribute('createdAt')
}));


/**
  }),
	
	sstt
 * Using dburles:collection-helpers we will add a helper to the students
 * collection to easily get the user
 */

Students.helpers({
	getCreator: function () {
		return Meteor.users.findOne({
			_id: this.createdBy
		});
	}
});
