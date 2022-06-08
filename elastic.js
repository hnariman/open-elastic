import { Client } from '@elastic/elasticsearch';
import { config } from './config.js';

// Init
const INDEX = "testing_elastic"
export const elastic = new Client(config);

// Helpers
const create = async () => await elastic.index({ index: INDEX});
const update = async ({ firstname, lastname }) =>
  await elastic.index({ index: INDEX, document:{firstname, lastname} })

// Bootstrap
export const bootstrapElastic = () => {
  create();
  update({ firstname:"Joe", lastname:"Satriani" });
  update({ firstname:"Joe", lastname:"Bonamassa" });
}

// Search method
export const findElastic = async (firstname) => {
  const result =  await elastic.search({
    index: INDEX,
    query: {
      match:{ firstname }
    }
  })
  console.log(`TESTING ${INDEX}`,result.hits);
  return result;
}
