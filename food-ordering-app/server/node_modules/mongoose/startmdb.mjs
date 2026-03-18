import { MongoMemoryReplSet } from 'mongodb-memory-server';

const replSet = await MongoMemoryReplSet.create({
  binary: {
    systemBinary: '/home/v/libs/mongodb-linux-x86_64-enterprise-ubuntu2404-8.2.0/bin/mongod'
  },
  instanceOpts: [
    {
      port: 27017
    }
  ],
  replSet: {
    storageEngine: 'inMemory',
    count: 1
  }
});

const uri = replSet.getUri();
console.log(uri);
