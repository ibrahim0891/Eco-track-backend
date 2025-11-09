


export let throwError = (error, cause) => {
    let newError = new Error(error, {
        cause: cause
    });
    throw newError;
}

