const checkStatus = () => {
    const status = window.navigator.onLine;
    return status ? true : false;
}

const listenOnline = () => {

    let status = false;
    window.addEventListener('online', () => {
        status = true;
    });

    return status;
}

const listenOffline = () => {
    window.addEventListener('offline', () => console.log('Became offline'));
}

const network = {
    checkStatus: checkStatus,
    listenOnline: listenOnline,
    listenOffline: listenOffline
}

export default network;