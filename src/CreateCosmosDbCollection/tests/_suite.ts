import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'vsts-task-lib/mock-test';

describe('CreateCosmosDbCollection task', function () {
    before(() => {
    });

    after(() => {
    });

    // #region Validation Tests
    it('should not validate when collectionThroughput is not a number', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'validate-collectionThroughputNotNumber.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(! tr.succeeded, 'should have failed');
        assert.equal(tr.errorIssues.length, 1, "should have one error");

        done();
    });

    it('should not validate when collectionThroughput is less than 1000', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'validate-collectionThroughputTooLow.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(! tr.succeeded, 'should have failed');
        assert.equal(tr.errorIssues.length, 1, "should have one error");

        done();
    });

    it('should not validate when collectionStorageCapacity is invalid', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'validate-collectionStorageCapacityInvalid.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(! tr.succeeded, 'should have failed');
        assert.equal(tr.errorIssues.length, 1, "should have one error");

        done();
    });

    it('should not validate when collectionStorageCapacity is unlimited and collectionPartitionKey is undefined', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'validate-collectionPartitionKeyUndefined.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(! tr.succeeded, 'should have failed');
        assert.equal(tr.errorIssues.length, 1, "should have one error");

        done();
    });

    it('should not validate when collectionStorageCapacity is unlimited and collectionPartitionKey is empty', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'validate-collectionPartitionKeyEmpty.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(! tr.succeeded, 'should have failed');
        assert.equal(tr.errorIssues.length, 1, "should have one error");

        done();
    });
    // #endregion

    // #region Success Tests
    it('should succeed when collection created successfully', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'success-collectionCreated.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(tr.succeeded, 'should have succeeded');
        assert.equal(tr.warningIssues.length, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 0, "should have no errors");

        done();
    });

    it('should succeed when collection and database created successfully', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'success-databaseAndCollectionCreated.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(tr.succeeded, 'should have succeeded');
        assert.equal(tr.warningIssues.length, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 0, "should have no errors");

        done();
    });

    it('should succeed when collection already exists', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'success-collectionAlreadyExists.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(tr.succeeded, 'should have succeeded');
        assert.equal(tr.warningIssues.length, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 0, "should have no errors");

        done();
    });
    // #endregion

    // #region Failure Tests
    it('should fail when collection not created', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'fail-collectionNotCreated.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(! tr.succeeded, 'should have failed');
        assert.equal(tr.warningIssues.length, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 1, "should have one errors");

        done();
    });

    it('should fail when collection already exists', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'fail-collectionAlreadyExists.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(! tr.succeeded, 'should have failed');
        assert.equal(tr.warningIssues.length, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 1, "should have one errors");

        done();
    });

    it('should fail when database not created', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'fail-databaseNotCreated.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();

        assert(! tr.succeeded, 'should have failed');
        assert.equal(tr.warningIssues.length, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 1, "should have one errors");

        done();
    });
    // #endregion
});