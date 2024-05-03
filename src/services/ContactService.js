import axios from "axios";

import airtable from 'airtable';

export class ContactService {
  static serverSupaURL = `https://phgwjhhylafzchotgoay.supabase.co/rest/v1`;
  static supa_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZ3dqaGh5bGFmemNob3Rnb2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNzAxMjksImV4cCI6MjAwMDY0NjEyOX0.2lOoBm8ElUM87ACf4zXZTfwoBJdqc84VPdtABvhx4Nc"

  static serverAirURL = `https://api.airtable.com/v0/appoblgGwVGW6XWbQ`;
  static air_token = "patqeUrC7eLbBBjx5.3fa0ab9407f2512416c9ae44562fa2a83c5c4231022022c745b418e940e79667"

  static getAllCondos(userId) {
    // let dataURL = `${this.serverURL}/thai_notify?user_id=eq.${userId}`;
    // console.log(userId)
    // GET https://api.airtable.com/v0/appoblgGwVGW6XWbQ/thai_notify?filterByFormula=AND({id}=16, {user_id}='123')
    // ?filterByFormula={id}=16
    // supa let dataURL = `${this.serverAirURL}/thai_notify?user_id=${userId}`;
    // airtable
    let dataURL = `${this.serverAirURL}/thai_notify?filterByFormula={user_id}='${userId}'`;

    // ?user_id=${userId}`;
    // console.log('All condos----------->',userId)
    // let dataURL = `${this.serverURL}/contacts`;
    let headers = {
      'Authorization': `Bearer ${this.air_token}`
    };
    // console.log('headers----------->',headers)
    return axios.get(dataURL, { headers: headers });
  }

  static getAllUsers() {
    let dataURL = `${this.serverSupaURL}/users_check?select=email`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static async getCondo(contactId, userId) {
    // // configure the Airtable base and API key
    // airtable.configure({
    //   apiKey: `${this.air_token}`,
    //   endpointUrl: 'https://api.airtable.com'
    // });

    // // select the Airtable base and table you want to insert the record into
    // const base = airtable.base('appoblgGwVGW6XWbQ');
    // const table = base('tbl4LsW2rdIXD3AhN');

    // const recordQuery = await table.select({ filterByFormula: `{id} = ${contactId}` }).firstPage();

    // // let airId = ''

    // if (recordQuery.length > 0) {
    //   const record = recordQuery[0];
    //   console.log(`get -->> Airtable record ID for ID ${contactId} is ${record.id}`);
    //   // airId = record.id
    // } else {
    //   console.log(`No record found with ID ${contactId}`);
    // }

    // let dataURL = `${this.serverURL}/contacts/${contactId}`;
    // let dataURL = `${this.serverAirURL}/thai_notify?records%5B%5D=${airId}&user_id=${userId}`;

    // ?filterByFormula=AND({id}=16, {user_id}='123')
    // let dataURL = `${this.serverAirURL}/thai_notify?id=${contactId}&user_id='${userId}'`;
    let dataURL = `${this.serverAirURL}/thai_notify?filterByFormula=AND({id}=${contactId}, {user_id}='${userId}')`
    // id=${contactId}&user_id='${userId}'`;

    console.log('get inside url--->>>', dataURL)
    let headers = {
      'Authorization': `Bearer ${this.air_token}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static getAllGroups() {
    let dataURL = `${this.serverSupaURL}/groups?select=*`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    // let dataURL = `${this.serverURL}/groups/${groupId}`;
    let dataURL = `${this.serverSupaURL}/groups?id=eq.${groupId}`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static createContact(contact) {
    let dataURL = `${this.serverAirURL}/contacts`;
    let headers = {
      'Authorization': `Bearer ${this.air_token}`
    };
    return axios.post(dataURL, contact, { headers: headers });
  }

  static createCondo(contact) {
    let dataURL = `${this.serverAirURL}/thai_notify`;
    let headers = {
      'Authorization': `Bearer ${this.air_token}`
    };
    return axios.post(dataURL, contact, { headers: headers });
  }

  // by myself
  // static airInsertRecord(recordObj) {
  //   // configure the Airtable base and API key
  //   airtable.configure({
  //     apiKey: `${this.air_token}`,
  //     endpointUrl: 'https://api.airtable.com'
  //   });

  //   // select the Airtable base and table you want to insert the record into
  //   const base = airtable.base('appoblgGwVGW6XWbQ');
  //   const table = base('tbl4LsW2rdIXD3AhN');

  //   // insert the record into the Airtable table
  //   table.create(recordObj, { typecast: true }, (err, newRecord) => {
  //     if (err) {
  //       console.error(err);
  //       // const currentRoute = this.$router.currentRoute;
  //       // if (currentRoute.path !== "/contacts/add") {
  //       //   this.$router.push("/contacts/add"); // Navigate to the page
  //       // }
  //       return;
  //     }
  //     console.log(`New record created with ID ${newRecord.id}`);
  //     // const currentRoute = this.$router.currentRoute;
  //     // if (currentRoute.path !== "/") {
  //     //   this.$router.push("/"); // Navigate to the page
  //     // }
  //   });

  // }

  // by chatGPT

  static async airInsertRecord(recordObj) {
    return new Promise((resolve, reject) => {
      // configure the Airtable base and API key
      airtable.configure({
        apiKey: `${this.air_token}`,
        endpointUrl: 'https://api.airtable.com'
      });
  
      // select the Airtable base and table you want to insert the record into
      const base = airtable.base('appoblgGwVGW6XWbQ');
      const table = base('tbl4LsW2rdIXD3AhN');

      console.log('why remind day err-->>>', recordObj)
  
      // insert the record into the Airtable table
      table.create(recordObj, { typecast: true }, (err, newRecord) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
  
        console.log(`New record created with ID ${newRecord.id}`);
        resolve(newRecord.id);
      });
    });
  }

  // by myself
  // static async airUpdateRecord(recordObj, contactId) {
  //   // configure the Airtable base and API key
  //   airtable.configure({
  //     apiKey: `${this.air_token}`,
  //     endpointUrl: 'https://api.airtable.com'
  //   });

  //   // select the Airtable base and table you want to insert the record into
  //   const base = airtable.base('appoblgGwVGW6XWbQ');
  //   const table = base('tbl4LsW2rdIXD3AhN');

  //   // console.log('update inside obj----->', recordObj)
  //   // console.log('update inside id----->', contactId)

  //   const recordQuery = await table.select({ filterByFormula: `{id} = ${contactId}` }).firstPage();

  //   let airId = ''

  //   if (recordQuery.length > 0) {
  //     const record = recordQuery[0];
  //     console.log(`Airtable record ID for ID ${contactId} is ${record.id}`);
  //     airId = record.id
  //   } else {
  //     console.log(`No record found with ID ${contactId}`);
  //   }

  //   // insert the record into the Airtable table
  //   // delete recordObj.id
  //   // console.log('from inner update---------->', recordObj)
  //   delete recordObj.fields.id
  //   delete recordObj.fields.created_at
  //   table.update(airId, recordObj.fields, function(err, record) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log('Record updated:', record.getId());
  //   });

  // }

  // by chatGPT
  
  static async airUpdateRecord(recordObj, contactId) {
    return new Promise((resolve, reject) => {
      // configure the Airtable base and API key
      airtable.configure({
        apiKey: `${this.air_token}`,
        endpointUrl: 'https://api.airtable.com'
      });

      // select the Airtable base and table you want to update the record in
      const base = airtable.base('appoblgGwVGW6XWbQ');
      const table = base('tbl4LsW2rdIXD3AhN');

      table.select({ filterByFormula: `{id} = ${contactId}` }).firstPage((err, records) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }

        if (records.length > 0) {
          const record = records[0];
          const airId = record.id;

          // delete fields that are not editable
          delete recordObj.fields.id;
          delete recordObj.fields.created_at;

          // update the record in Airtable
          table.update(airId, recordObj.fields, (err, record) => {
            if (err) {
              console.error(err);
              reject(err);
              return;
            }

            console.log(`Airtable record ID for ID ${contactId} is ${record.id}`);
            resolve(record.id);
          });
        } else {
          console.log(`No record found with ID ${contactId}`);
          resolve(null);
        }
      });
    });
  }

  static updateContact(contact, contactId, userId) {

    let dataURL = `${this.serverAirURL}/contacts?id=eq.${contactId}&user_id=eq.${userId}`;
    console.log('update----------->>>>>', dataURL)
    let headers = {
      'Authorization': `Bearer ${this.air_token}`
    };
    return axios.patch(dataURL, contact, { headers: headers });
  }

  static updateCondo(contact, contactId, userId) {

    let dataURL = `${this.serverAirURL}/thai_notify?id=${contactId}&user_id='${userId}'`;
    // console.log('update----------->>>>>', dataURL)
    let headers = {
      'Authorization': `Bearer ${this.air_token}`
    };
    return axios.patch(dataURL, contact, { headers: headers });
  }

  static deleteContact(contactId, userId) {
    let dataURL = `${this.serverAirURL}/contacts?id=eq.${contactId}&user_id=eq.${userId}`;
    // return axios.delete(dataURL);
    let headers = {
      'Authorization': `Bearer ${this.air_token}`
    };
    return axios.delete(dataURL, { headers: headers });
  }

  static async deleteCondo(contactId, userId) {
    // let dataURL = `${this.serverAirURL}/thai_notify?id=eq.${contactId}&user_id=eq.${userId}`;
    // const airtableId = contactId.toString();

    airtable.configure({
      apiKey: `${this.air_token}`,
      endpointUrl: 'https://api.airtable.com'
    });

    // select the Airtable base and table you want to insert the record into
    const base = airtable.base('appoblgGwVGW6XWbQ');
    const table = base('tbl4LsW2rdIXD3AhN');

    const recordQuery = await table.select({ filterByFormula: `{id} = ${contactId}` }).firstPage();

    let airId = ''

    if (recordQuery.length > 0) {
      const record = recordQuery[0];
      console.log(`Airtable record ID for ID ${contactId} is ${record.id}`);
      airId = record.id
    } else {
      console.log(`No record found with ID ${contactId}`);
    }

    if (airId) {
      let dataURL = `${this.serverAirURL}/thai_notify?records%5B%5D=${airId}&user_id=${userId}`;
      // return axios.delete(dataURL);
      let headers = {
        'Authorization': `Bearer ${this.air_token}`
      };
      return axios.delete(dataURL, { headers: headers });
    }
  }

}