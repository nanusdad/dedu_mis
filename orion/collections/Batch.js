/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields 
 * we will show in the index of the collection in the admin
 */
Batch = new orion.collection('batch', {
  singularName: orion.helpers.getTranslation('batch.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('batch.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('batch.title'), // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: orion.helpers.getTranslation('batch.title')
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'year', title: orion.helpers.getTranslation('batch.schema.year') },
      { data: 'course_start_date', title: orion.helpers.getTranslation('batch.schema.course_start_date') },
      { data: 'admission_start_date', title: orion.helpers.getTranslation('batch.schema.admission_start_date')},
      { data: 'admission_end_date', title: orion.helpers.getTranslation('batch.schema.admission_end_date')},
      { data: 'final_selection_date', title: orion.helpers.getTranslation('batch.schema.final_selection_date')},
//Start of first contact program
      { data: 'first_cp_name', title: orion.helpers.getTranslation('batch.schema.first_cp_name')},
      { data: 'first_cp_start_date', title: orion.helpers.getTranslation('batch.schema.first_cp_start_date')},
      { data: 'first_cp_end_date', title: orion.helpers.getTranslation('batch.schema.first_cp_end_date')},
      { data: 'first_cp_days', title: orion.helpers.getTranslation('batch.schema.first_cp_days')},
      { data: 'first_cp_days_label', title: orion.helpers.getTranslation('batch.schema.first_cp_days_label')},
      { data: 'first_present_am', title: orion.helpers.getTranslation('batch.schema.first_present_am')},
      { data: 'first_present_pm', title: orion.helpers.getTranslation('batch.schema.first_present_pm')},
//End of first contact program
//Start of second contact program
      { data: 'second_cp_name', title: orion.helpers.getTranslation('batch.schema.second_cp_name')},
      { data: 'second_cp_start_date', title: orion.helpers.getTranslation('batch.schema.second_cp_start_date')},
      { data: 'second_cp_end_date', title: orion.helpers.getTranslation('batch.schema.second_cp_end_date')},
      { data: 'second_cp_days', title: orion.helpers.getTranslation('batch.schema.second_cp_days')},
      { data: 'second_cp_days_label', title: orion.helpers.getTranslation('batch.schema.second_cp_days_label')},
      { data: 'second_present_am', title: orion.helpers.getTranslation('batch.schema.second_present_am')},
      { data: 'second_present_pm', title: orion.helpers.getTranslation('batch.schema.second_present_pm')},
//End of second contact program  
//Start of third contact program
       { data: 'third_cp_name', title: orion.helpers.getTranslation('batch.schema.third_cp_name')},
      { data: 'third_cp_start_date', title: orion.helpers.getTranslation('batch.schema.third_cp_start_date')},
      { data: 'third_cp_end_date', title: orion.helpers.getTranslation('batch.schema.third_cp_end_date')},
      { data: 'third_cp_days', title: orion.helpers.getTranslation('batch.schema.third_cp_days')},
      { data: 'third_cp_days_label', title: orion.helpers.getTranslation('batch.schema.third_cp_days_label')},
      { data: 'third_present_am', title: orion.helpers.getTranslation('batch.schema.third_present_am')},
      { data: 'third_present_pm', title: orion.helpers.getTranslation('batch.schema.third_present_pm')},

      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('batch.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('batch.schema.createdAt'))
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Batch.attachSchema(new SimpleSchema({
  year: {
    type: String,
    label: orion.helpers.getTranslation('batch.schema.year'), // We use this function to make i18n work in autoform
  },
  course_start_date: {
    type: Date,
    label: orion.helpers.getTranslation('batch.schema.course_start_date'), // We use this function to make i18n work in autoform
  },

  admission_start_date:{
    type: Date,
    label: orion.helpers.getTranslation('batch.schema.admission_start_date'),
  },
  admission_end_date: {
    type: Date,
    label: orion.helpers.getTranslation('batch.schema.admission_end_date'),
  },

     final_selection_date: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.final_selection_date'),
      },
       // We use this function to make i18n work in autoform
    //Start of first CP
     first_cp_name: {
      type: String,
      label: orion.helpers.getTranslation('batch.schema.first_cp_name'),
     },
     first_cp_start_date: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.first_cp_start_date'),
     },
     first_cp_end_date: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.first_cp_end_date'),
     },
     first_cp_days: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.first_cp_days'),
     },
     first_cp_days_label: {
      type: String,
      label: orion.helpers.getTranslation('batch.schema.first_cp_days_label'),
     },
    first_present_am: {
    type: Date,
    label: orion.helpers.getTranslation('batch.schema.first_present_am'),
     },
     first_present_pm: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.first_present_pm'),
     },
  //End of first CP
  //Start of second CP
     second_cp_name: {
      type: String,
      label: orion.helpers.getTranslation('batch.schema.second_cp_name'),
     },
     second_cp_start_date:{
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.second_cp_start_date'),
     },
     second_cp_end_date: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.second_cp_end_date'),
     },
     second_cp_days: {
      type: String,
      label: orion.helpers.getTranslation('batch.schema.second_cp_days'),
     },
     second_cp_days_label: {
      type: String,
      label: orion.helpers.getTranslation('batch.schema.second_cp_days_label'),
     },
     second_present_am: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.second_present_am'),
     },
     second_present_pm: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.second_present_pm'),
     },
  //End of second CP
  //Start of third CP
     third_cp_name: {
      type: String,
      label: orion.helpers.getTranslation('batch.schema.third_cp_name'),
     },
     third_cp_start_date: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.third_cp_start_date'),
     },
     third_cp_end_date: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.third_cp_end_date'),
     },
     third_cp_days: {
      type: String,
      label: orion.helpers.getTranslation('batch.schema.third_cp_days'),
     },
     third_cp_days_label: {
      type: String,
      label: orion.helpers.getTranslation('batch.schema.third_cp_days_label'),
     },
     third_present_am: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.third_present_am'),
     },
     third_present_pm: {
      type: Date,
      label: orion.helpers.getTranslation('batch.schema.third_present_pm'),
     },
  //End of third CP
 
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

Batch.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});

