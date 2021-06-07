const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  return users;
}

async function getUser(_, { email }) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

async function createUser(_, { data }) {
  const user = await prisma.user.create({
    data,
  });

  return user;
}

module.exports = {
  Query: {
    users: getUsers,
    user: getUser,
  },
  Mutation: {
    createUser,
  },
};
