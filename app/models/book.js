import DS from 'ember-data';

var Book = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  review: DS.attr(),
  rating: DS.attr('number'),
  amazon_id: DS.attr(),
  url: DS.attr(),
  image: DS.attr()
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
      url: 'http://www.amazon.com/gp/product/B004J4WKUQ',
      image: 'http://winningnotwhining.files.wordpress.com/2013/03/readyplayerone-paperback.jpg'
    }
  ]
});

export default Book;
