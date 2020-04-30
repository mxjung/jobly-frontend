import React from 'react';
import axios from 'axios';

/**
 * JoblyApi: Class that has methods to make API calls.
 */

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = (localStorage.getItem('token'));

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let error = err.response.data;
      // let message = err.response.data.message;
      // let status = err.response.statusCode;
      // throw Array.isArray(message) ? message: [message];
      throw error;
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
}

export default JoblyApi;
