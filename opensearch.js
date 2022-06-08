import { Client } from "@opensearch-project/opensearch";
import { config } from './config.js';

// Init
const INDEX = 'testing_opensearch';
export const opensearch = new Client(config);

// Helpers
const create = async () => await opensearch.indices.create({ index: INDEX});
const update = async ({firstname, lastname}) => await opensearch.index({ index:INDEX, body:{firstname, lastname} })

// Bootstrap
export const bootstrapOpenSearch = () => {
  create();
  update({firstname:"Joe", lastname:"Satriani"});
  update({firstname:"Joe", lastname:"Bonamassa"});
}

// Search method
export const findOpenSearch = async ( firstname ) => {
  const result =  await opensearch.search({
    index:INDEX,
    body:{
      query: {
        match:{
          firstname:{
            query: firstname
          }
        }
      }

    }
  })
  console.log(`TESTING ${INDEX}`, JSON.stringify(result.body.hits, null, 2));
  return result;
}

