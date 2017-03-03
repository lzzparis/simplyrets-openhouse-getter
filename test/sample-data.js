var SAMPLE_DATA = [
  {
    property: {
      stories: 1,
      bedrooms: 4,
      bathsFull: 2,
      bathsHalf: 1
    },
    mlsId: Math.floor(Math.random() * 1000000),
    listDate: new Date(),
    listPrice: 100000,
    photos:["http://placekitten.com/80/60"],
  },
  {
    property: {
      stories: 2,
      bedrooms: 3,
      bathsFull: 42,
      bathsHalf: 1
    },
    mlsId: Math.floor(Math.random() * 1000000),
    listDate: new Date(),
    listPrice: 234000,
    photos:["http://placekitten.com/100/60"],
  },
  {
    property: {
      stories: 11,
      bedrooms: 14,
      bathsFull: 200,
      bathsHalf: 10,
    },
    mlsId: Math.floor(Math.random() * 1000000),
    listDate: new Date(),
    listPrice: 450000,
    photos:["http://placekitten.com/8001/600"],
  },
  {
    property: {
      stories: 100,
      bedrooms: 0,
      bathsFull: 0,
      bathsHalf: 0,
    },
    mlsId: Math.floor(Math.random() * 1000000),
    listDate: new Date(),
    listPrice: 100010010,
    photos:["http://placekitten.com/200/10"],
  },
];

module.exports = SAMPLE_DATA;
