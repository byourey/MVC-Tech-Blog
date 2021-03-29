const seedBlogs = require('./blog-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n-- DATABASE IS NOW SYNCED --\n');
  
  await seedUsers();
    console.log('\n--USERS ARE SEEDED --\n');
  
  await seedBlogs();
    console.log('\n-- BLOGS HAVE BEEN SEEDED --\n');

  await seedComments();
    console.log('\n-- COMMENTS ARE SEEDED --\n');

  process.exit(0);
};

seedAll();