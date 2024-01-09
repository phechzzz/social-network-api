const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs');
//const assignmentSchema = require('./Assignment');


const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function(value){
            return dayjs(value).format("MM/DD/YYYY")
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactionId: {
        type: Schema.Types.ObjectId,
        default: function(){
                return new Types.ObjectId()
        }
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema