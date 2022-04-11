const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, maxLength: 100},
        family_name: {type:String, required: true, maxLength: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date},
    }
);

// virtual for author's full name
AuthorSchema.virtual('name').get(function() {
    /* to avoid errors in cases where an author does not have either a 
       family name or first name, we want to make sure we handle the 
       exception by returning an empty string */
       var fullname = '';
       if (this.first_name && this.family_name) {
           fullname = this.family_name + ', ' + this.first_name;
       }
       if (!this.first_name || !this.family_name) {
           fullname = '';
       }
       return fullname;
});

// virtual for author's lifespan
AuthorSchema.virtual('lifespan').get(function() {
    var lifetime_string='';
    if(this.date_of_birth) {
        lifetime_string = this.date_of_birth.getYear().toString();
    }
    lifetime_string += ' - ';
    if (this.date_of_death) {
        lifetime_string += this.date_of_death.getYear().toString();
    }
    return lifetime_string;
});

// virtual for author's URL 
AuthorSchema.virtual('url').get(function() {
    return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Author', AuthorSchema);