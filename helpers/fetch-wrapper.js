import { accountService, alertService } from '../services';

export const fetchWrapper = {
    post,
}


function post(url, body) {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}



function handleResponse(response) {
    
    if (!response.ok){
        if ([401, 403,].includes(response.status)) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            accountService.logout();
        }
        if ([429].includes(response.status)) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            accountService.logout();
            // alertService.error("TOO MANY REQUESTS... LOGGING OFF");
        }
    }
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            let message = (data && (data.message || data.errors[0].message)) || response.statusText;
            // alertService.error(error);
            if(message.message) message = message.message
            return Promise.reject({message, code: response.status});
        } 
        return data;
    });
}