/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields 
 * we will show in the index of the collection in the admin
 */
Courses = new orion.collection('courses', {
  singularName: orion.helpers.getTranslation('courses.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('courses.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('courses.title'), // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: orion.helpers.getTranslation('courses.title')
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'course_name', title: orion.helpers.getTranslation('courses.schema.course_name') },
      { data: 'course_abbrev', title: orion.helpers.getTranslation('courses.schema.course_abbrev') },
      { data: 'course_fees', title: orion.helpers.getTranslation('courses.schema.course_fees')},
      { data: 'course_duration', title: orion.helpers.getTranslation('courses.schema.course_duration')},
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('courses.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('courses.schema.createdAt'))
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Courses.attachSchema(new SimpleSchema({
  course_name: {
    type: String,
    label: orion.helpers.getTranslation('courses.schema.course_name') // We use this function to make i18n work in autoform
  },
  course_abbrev: {
    type: String,
    label: orion.helpers.getTranslation('courses.schema.course_abbrev') // We use this function to make i18n work in autoform
  },
  course_fees: {
    type: Number,
    label: orion.helpers.getTranslation('courses.schema.course_fees')
  },
  course_duration: {
    type: Number,
    label: orion.helpers.getTranslation('courses.schema.course_duration')
  },
 course_durationType: {
    //type: String,
    //label: orion.helpers.getTranslation('students.schema.gender') // We use this function to make i18n work in autoform
    //label: "Select One",

      type: String,
      label: orion.helpers.getTranslation('courses.schema.course_durationType'), // We use this function to make i18n work in autoform
      allowedValues: [
        orion.helpers.getTranslation('courses.schema.course_durationTypeAllowedValues.day'),
        orion.helpers.getTranslation('courses.schema.course_durationTypeAllowedValues.month'),
        orion.helpers.getTranslation('courses.schema.course_durationTypeAllowedValues.year')
      ]
  },
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
   * this coursesautomatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


/**
 * Using dburles:collection-helpers we will add a helper to the courses
 * collection to easily get the user
 */

Courses.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});

