const Openapi = require('../temp/javascript/dist/index');
// console.log(Openapi);

const client = new Openapi.ApiClient('http://localhost:3000');
// client.authentication = { type: 'apikey' };
// client.defaultHeaders = { 'Kbn': 'OpenAPI-Generator/1.0.0/Javascript' };

const api = new Openapi.DefaultApi(client)

const attributes = {
  "title": "Open API Testing",
  "description": "",
  "hits": 99,
  "columns": "['_source']",
  "sort": "[ '_score', 'desc']",
  "indexPattern": {
    "pattern": "siren-import-home-open_api_test",
    "fields": '[{"name":"_id","esType":"_id","type":"string","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":false},{"name":"_index","esType":"_index","type":"string","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":false},{"name":"_score","esType":"text","type":"number","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":false,"aggregatable":false,"readFromDocValues":false},{"name":"_siren","esType":"object","type":"unknown","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":false,"aggregatable":false,"readFromDocValues":false},{"name":"_siren.importId","esType":"keyword","type":"string","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"_siren.importTimestamp","esType":"date","type":"date","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"_siren.importUser","esType":"keyword","type":"string","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"_siren.sic","esType":"object","type":"unknown","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":false,"aggregatable":false,"readFromDocValues":false},{"name":"_siren.sic.namespace","esType":"keyword","type":"string","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true},{"name":"_source","esType":"_source","type":"_source","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":false,"aggregatable":false,"readFromDocValues":false},{"name":"_type","esType":"_type","type":"string","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":false},{"name":"field_0","esType":"keyword","type":"string","count":0,"primaryKey":false,"singleValue":true,"scripted":false,"searchable":true,"aggregatable":true,"readFromDocValues":true}]',
    "excludeIndices": false
  },
  "siren": {
    "parentId": "",
    "indexingScope": "L",
    "ui": {
      "icon": "far fa-file-alt",
      "color": "#0D3580",
      "shortDescription": ""
    },
    "globalSearch": {
      "enabled": true,
      "boost": 10
    },
    "templateScripts": {
      "scriptIds": [

      ]
    },
    "revision": {
      "index": "siren-import-home-open_api_test",
      "isEditable": true,
      "primaryKey": "_id",
      "editableFieldsMode": "blacklist",
      "filteringMode": "filter-by-index-join",
      "editableFieldsExceptions": [

      ],
      "indexingScope": "L",
      "copyToFields": {

      }
    }
  },
  "kibanaSavedObjectMeta": {
    "searchSourceJSON": '{"filter":[{"meta":{"id":"filter:revision-filter","negate":false,"disabled":false,"alias":"Hide originals when revised"},"query":{"bool":{"must_not":{"term":{"_siren_revision.archived":true}}}},"$state":{"store":"appState"}}],"highlightAll":true,"version":true,"query":{"match_all":{}}}'
  },
  "version": "13.2.0"
}
const isGlobal = false;
const version = "WzEwNjgsMTNd";



const savedSearch1320 = new Openapi.SavedSearch1320(version, isGlobal, attributes); // {SavedSearch1320} 
const callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
// console.log(api);
api.call1320(savedSearch1320, callback);