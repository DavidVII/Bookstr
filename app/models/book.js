import DS from 'ember-data';

var Book = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  review: DS.attr(),
  rating: DS.attr('number'),
  amazon_id: DS.attr(),
  genre: DS.belongsTo('genre', { async: true }),
  url: function() {
    return "http://www.amazon.com/gp/product/" + this.get('amazon_id');
  }.property('amazon_id'),
  image: function() {
    return "http://images.amazon.com/images/P/" + this.get('amazon_id');
  }.property('amazon_id')
});

Book.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Ready Player One',
      author: 'Ernest Cline',
      review: "This was a great book. perfect for anyone",
      rating: 5,
      amazon_id: 'B004J4WKUQ',
      genre: 3
    },
    {
      id: 2,
      title: 'The Passage',
      author: 'Justin Cronin',
      review: "Great story, well written and the characters are amazing.",
      rating: 2,
      amazon_id: '0345528174',
      genre: 1
    },
    {
      id: 3,
      title: 'Dirty Wars: The World Is a Battlefield',
      author: 'Jeremy Scahill',
      review: "Very well written and interesting book.",
      rating: 4,
      amazon_id: 'B00B3M3TS4',
      genre: 3
    },
  ]
});

export default Book;
