'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  blurb: {
    type: String,
  },
  info: {
    type: {
      attack: {
        type: Number,
      },
      defense: {
        type: Number,
      },
      magic: {
        type: Number,
      },
      difficulty: {
        type: Number,
      }
    }
  },
  image: {
    type: {
      full: {
        type: String,
      }
    }
  },
  tags: {
    type: String,
  },
  partype: {
    type: String,
  },
  stats: {
    type: {
      hp: {
        type: Number,
      },
      hpperlevel: {
        type: Number,
      },
      mp: {
        type: Number,
      },
      mpperlevel: {
        type: Number,
      },
      movespeed: {
        type: Number,
      },
      armor: {
        type: Number,
      },
      armorperlevel: {
        type: Number,
      },
      spellblock: {
        type: Number,
      },
      spellblockperlevel: {
        type: Number,
      },
      attackrange: {
        type: Number,
      },
      hpregen: {
        type: Number,
      },
      hpregenperlevel: {
        type: Number,
      },
      mpregen: {
        type: Number,
      },
      mpregenperlevel: {
        type: Number,
      },
      crit: {
        type: Number,
      },
      critperlevel: {
        type: Number,
      },
      attackdamage: {
        type: Number,
      },
      attackdamageperlevel: {
        type: Number,
      },
      attackspeedoffset: {
        type: Number,
      },
      attackspeedperlevel: {
        type: Number,
      }
    }
  }
});

module.exports = mongoose.model('Items', ItemSchema);
