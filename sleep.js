/**
 * @param {number} timeout - time to sleep in MS
 * @returns {Promise}
 */
const sleep = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve(), timeout));
}

export default sleep;