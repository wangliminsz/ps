import axios from "axios";

export class ContactService {
  static serverURL = `https://phgwjhhylafzchotgoay.supabase.co/rest/v1`;
  static supa_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZ3dqaGh5bGFmemNob3Rnb2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNzAxMjksImV4cCI6MjAwMDY0NjEyOX0.2lOoBm8ElUM87ACf4zXZTfwoBJdqc84VPdtABvhx4Nc"

  static getAllContacts(userId) {
    let dataURL = `${this.serverURL}/contacts?user_id=eq.${userId}`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static getAllCondos(userId) {
    let dataURL = `${this.serverURL}/thai_notify?user_id=eq.${userId}`;
    // console.log('All condos----------->',userId)
    // let dataURL = `${this.serverURL}/contacts`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    // console.log('headers----------->',headers)
    return axios.get(dataURL, { headers: headers });
  }

  static getAllUsers() {
    let dataURL = `${this.serverURL}/users_check?select=email`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static getContact(contactId, userId) {
    // let dataURL = `${this.serverURL}/contacts/${contactId}`;
    let dataURL = `${this.serverURL}/contacts?id=eq.${contactId}&user_id=eq.${userId}`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static getCondo(contactId, userId) {
    // let dataURL = `${this.serverURL}/contacts/${contactId}`;
    let dataURL = `${this.serverURL}/thai_notify?id=eq.${contactId}&user_id=eq.${userId}`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static getAllGroups() {
    let dataURL = `${this.serverURL}/groups?select=*`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    // let dataURL = `${this.serverURL}/groups/${groupId}`;
    let dataURL = `${this.serverURL}/groups?id=eq.${groupId}`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.get(dataURL, { headers: headers });
  }

  static createContact(contact) {
    let dataURL = `${this.serverURL}/contacts`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.post(dataURL, contact, { headers: headers });
  }

  static createCondo(contact) {
    let dataURL = `${this.serverURL}/thai_notify`;
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.post(dataURL, contact, { headers: headers });
  }

  static updateContact(contact, contactId, userId) {

    let dataURL = `${this.serverURL}/contacts?id=eq.${contactId}&user_id=eq.${userId}`;
    // console.log('update----------->>>>>', dataURL)
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.patch(dataURL, contact, { headers: headers });
  }

  static updateCondo(contact, contactId, userId) {

    let dataURL = `${this.serverURL}/thai_notify?id=eq.${contactId}&user_id=eq.${userId}`;
    // console.log('update----------->>>>>', dataURL)
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.patch(dataURL, contact, { headers: headers });
  }

  static deleteContact(contactId, userId) {
    let dataURL = `${this.serverURL}/contacts?id=eq.${contactId}&user_id=eq.${userId}`;
    // return axios.delete(dataURL);
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.delete(dataURL, { headers: headers });
  }

  static deleteCondo(contactId, userId) {
    let dataURL = `${this.serverURL}/thai_notify?id=eq.${contactId}&user_id=eq.${userId}`;
    // return axios.delete(dataURL);
    let headers = {
      'apikey': `${this.supa_key}`,
      'Authorization': `Bearer ${this.supa_key}`
    };
    return axios.delete(dataURL, { headers: headers });
  }

}