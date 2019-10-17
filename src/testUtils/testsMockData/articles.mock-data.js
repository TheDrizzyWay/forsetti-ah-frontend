const articles = [
  {
    id: '3973ffc4-cce3-40bf-8068-8b81d0a47de0',
    slug: 'Some-technical-dude-lol-1557849271995',
    title: 'Some technical dude lol',
    description: 'hello and the body as sdsd sdsjdsjdssd s sdhsdsj',
    body: '<p>technicall["I dont know what tio say but seriously it</p>',
    published: true,
    image: 'https://res.cloudinary.com/forsetti/image/upload/v1557849271/forsetti/s1tujji64ai6wrdc3h93.jpg',
    tagList: ['heelo'],
    readingTime: '1.265',
    userId: '3d1c5f17-7580-4cea-8647-99e7440c5d43',
    createdAt: '2019-05-14T15:54:31.996Z',
    updatedAt: '2019-05-14T15:54:31.996Z',
    author: {
      firstname: 'Samorano',
      lastname: 'David',
      username: 'Samorano',
      bio: null,
      image: null
    }
  }
];

const articleFail = {
  status: 404,
  message: 'There are no articles here'
};

export {
  articles,
  articleFail
};
