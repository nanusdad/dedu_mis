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
      { data: 'course_duration', title: orion.helpers.getTranslation('courses.schema.course_duration')},
  //extension
      { data: 'course_extension', title: orion.helpers.getTranslation('courses.schema.course_extension')},
      { data: 'course_extensionAvailable', title: orion.helpers.getTranslation('courses.schema.course_extensionAvailable')},
      { data: 'course_extensionPeriod', title: orion.helpers.getTranslation('courses.schema.course_extensionPeriod')},
      { data: 'course_admissionStartDate', title: orion.helpers.getTranslation('courses.schema.course_admissionStartDate')},
      { data: 'course_admissionEndDate', title: orion.helpers.getTranslation('courses.schema.course_admissionEndDate')},
      { data: 'course_finalSelectionDate', title: orion.helpers.getTranslation('courses.schema.course_finalSelectionDate')},
  //extension
  //fees
     /* { data: 'course_fees', title: orion.helpers.getTranslation('courses.schema.course_fees')},
      { data: 'course_feesDescription', title: orion.helpers.getTranslation('courses.schema.course_feesDescription')},
      { data: 'course_feesType', title: orion.helpers.getTranslation('courses.schema.course_feesType')},
      { data: 'course_feesAmount', title: orion.helpers.getTranslation('courses.schema.course_feesAmount')},
      { data: 'course_feesLastDate', title: orion.helpers.getTranslation('courses.schema.course_feesLastDate')},
      { data: 'course_feesCurrency', title: orion.helpers.getTranslation('courses.schema.course_feesCurrency')},
      { data: 'course_Sponsored', title: orion.helpers.getTranslation('courses.schema.course_Sponsored')},*/
  //fees
  //academics

  //academics

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
      label: orion.helpers.getTranslation('courses.schema.course_durationType'),
      allowedValues: ['Days','Months','Years'],
     },
     course_extension: {
      type: String,
      label: orion.helpers.getTranslation('courses.schema.course_extension'),
      },
       // We use this function to make i18n work in autoform
     course_extensionAvailable: {
      type: String,
      label: orion.helpers.getTranslation('courses.schema.course_extensionAvailable'),
     },
     course_extensionPeriod: {
      type: String,
      label: orion.helpers.getTranslation('courses.schema.course_extensionPeriod'),
     },
     course_admissionStartDate: {
      type: String,
      label: orion.helpers.getTranslation('courses.schema.course_admissionStartDate'),
     },
     course_admissionEndDate: {
      type: String,
      label: orion.helpers.getTranslation('courses.schema.course_admissionEndDate'),
     },
     course_finalSelectionDate: {
      type: String,
      label: orion.helpers.getTranslation('courses.schema.course_finalSelectionDate'),
     },
     course_fees: {
      type: String,
      label: orion.helpers.getTranslation('courses.schema.course_fees'),
     },
      /*allowedValues: [
        orion.helpers.getTranslation('courses.schema.course_durationTypeAllowedValues.day'),
        orion.helpers.getTranslation('courses.schema.course_durationTypeAllowedValues.month'),
        orion.helpers.getTranslation('courses.schema.course_durationTypeAllowedValues.year')
      ]*/

 
    
  
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

