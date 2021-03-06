import tmrm = require('vsts-task-lib/mock-run');
import path = require('path');
import { DocumentClient } from 'documentdb';

let taskPath = path.join(__dirname, '..', 'createCosmosDbCollection.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('authenticationType', 'key');
tmr.setInput('accountName', 'endpoint');
tmr.setInput('accountKey', 'key');
tmr.setInput('databaseId', 'db');
tmr.setInput('collectionId', 'coll');
tmr.setInput('collectionThroughput', '999');
tmr.setInput('collectionPartitionKey', 'partitionKey');
tmr.setInput('collectionStorageCapacity', 'unlimited');
tmr.setInput('databaseCreateIfNotExists', 'true');
tmr.setInput('collectionFailIfExists', 'true');

tmr.run();
