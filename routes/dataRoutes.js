
const { faker } = require('@faker-js/faker');

module.exports = app => {

  app.get('/api/randomdata', (req, res) => {

    function generateUsers() {

      let users = []
    
      for (let id=1; id <= 100; id++) {
    
        let name = faker.name.findName();
        let email = faker.internet.email();
        let avatar= faker.image.avatar();
        let cat= faker.image.cats(120, 120, true);
    
        users.push({
            "id": id,
            "name": name,
            "email": email,
            "avatar":avatar,
            "cat":cat
        });
      }
    
      return users;
    }

    res.send(generateUsers());
  });
}

