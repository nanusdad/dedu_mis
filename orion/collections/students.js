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
      { data: 'title', title: orion.helpers.getTranslation('students.schema.title') },
			{ data: 'sname', title: orion.helpers.getTranslation('students.schema.sname') },
			{ data: 'gender', title: orion.helpers.getTranslation('students.schema.gender') },
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
	gender: {
    type: String,
    label: orion.helpers.getTranslation('students.schema.gender') // We use this function to make i18n work in autoform
  },
  /*
  We add relationship to cities here
   */
  
  area: orion.attribute('hasOne', {
    label: 'Course Enrolled'
  }, {
    collection: Courses,
    titleField: 'course_name',
    publicationName: 'postCourses',

    create: function (input, cb) {
    var city = Course.insert({name: input, published: false});
    var newCity = Courses.findOne(course);
    cb(newCourse);
    }



  }),
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
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});

