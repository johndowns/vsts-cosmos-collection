import CosmosDbManagementClient = require("azure-arm-cosmosdb");
import { ServiceClientCredentials } from 'ms-rest';
import MsRest = require('ms-rest-azure');

export async function getCosmosDbAccountKey(
    clientId: string,
    clientSecret: string,
    tenantId: string,
    subscriptionId: string, 
    resourceGroupName: string, 
    accountName: string)
    : Promise<string> {

    console.log("1");
    return new Promise<string>(function(resolve, reject) {
        console.log("2");
        MsRest.loginWithServicePrincipalSecret(clientId, clientSecret, tenantId,
            async (err, credentials) => {
                if (err) {
                    console.log("3");
                    reject(err);
                }
    
                console.log("4");
                var client = new CosmosDbManagementClient(credentials, subscriptionId);
                console.log("5");
                try {
                    console.log("6");
                    var keyResponse = await client.databaseAccounts.listKeys(resourceGroupName, accountName);
                    console.log("7");
                    resolve(keyResponse.primaryMasterKey);
                    console.log("8");
                }                
                catch (err) {
                    console.log("9");
                    reject(err);
                    console.log("10");
                }
                console.log("11");
            }
        );
    });
}
