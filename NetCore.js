class Net {
    baseURL = null;
    appType = null;
    headerChild = {};
    /**
     * @param baseURL
     * @param type
     * @param headerItems
     */
    constructor(baseURL, type = 'application/json', headerItems = {}) {
        this.baseURL = baseURL;
        this.appType = type;
        this.headerChild = headerItems
    }
    /**
     * @param url
     * @param data complete json object as body
     * @returns {Promise<any>}
     */
    async post(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': this.appType,
                // 'Content-Type': 'application/x-www-form-urlencoded',
                    ...this.headerChild
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    /**
     * @param url
     * @param data complete json object as body
     * @returns {Promise<any>}
     */
    async put(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': this.appType,
                // 'Content-Type': 'application/x-www-form-urlencoded',
                ...this.headerChild
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    /**
     * @param url
     * @param data complete json object as body
     * @returns {Promise<any>}
     */
    async patch(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': this.appType,
                // 'Content-Type': 'application/x-www-form-urlencoded',
                ...this.headerChild
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    /**
     * @param str
     * @returns {Promise<any>}
     */
    async get(str = '') {
        return await fetch(this.baseURL + str, {headers: {...this.headerChild}}).then((res) => res.json())
    }

    /**
     * @param str
     * @returns {Promise<any>}
     */
    async delete(str = '') {
        return await fetch(this.baseURL + str, {method: 'DELETE', headers: {...this.headerChild}}).then((res) => res.json())
    }
}

export default Net;
