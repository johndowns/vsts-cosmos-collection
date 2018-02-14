import tmrm = require('vsts-task-lib/mock-run');
import path = require('path');
import { DocumentClient } from 'documentdb';

let taskPath = path.join(__dirname, '..', 'createCosmosDbCollection.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('collectionAccountEndpoint', 'endpoint');
tmr.setInput('collectionAccountKey', 'key');
tmr.setInput('collectionDatabaseName', 'db');
tmr.setInput('collectionName', 'coll');
tmr.setInput('collectionThroughput', '999');
tmr.setInput('collectionPartitionKey', 'partitionKey');
tmr.setInput('collectionStorageCapacity', 'unlimited');
tmr.setInput('collectionCreateDatabaseIfNotExists', 'true');
tmr.setInput('failIfExists', 'true');

tmr.run();
