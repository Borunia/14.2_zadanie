var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    length: '150 min',
    date: 'Production: 2000',
    imgSrc: 'image/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    length: '120 min',
    date: 'Production: 2000',
    imgSrc: 'image/lew.jpg'
  },
  {
    id: 3,
    title: 'Shrek',
    desc: 'Film o zielonym ogrze',
    length: '140 min',
    date: 'Production: 2000',
    imgSrc: 'image/shrek.jpg'
  },
  {
    id: 4,
    title: 'Epoka Lodowcowa',
    desc: 'Film o przygodach Sita, Mańka, Diego - główni bohaterowie filmu.',
    length: '138 min',
    date: 'Production: 2000',
    imgSrc: 'image/epoka.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.length),
      React.createElement('p', {}, movie.date),
      React.createElement('img', {src:movie.imgSrc})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
