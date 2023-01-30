//localStorage.clear();
const ROOT = 'http://localhost:5000';

async function genetateAccessToken() { 
    try {
        const response = await fetch(`${ROOT}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'newtoke',
                password: '20232023'
            })
            
        });
        
        const data = await response.json();
        console.log(data.accessToken);

        localStorage.setItem('accessToken', data.accessToken)
        console.log(localStorage.getItem('accessToken'));
    } catch (error) {
        console.log(error);
    }
}
async function checkAccessToken() {
    if (localStorage.getItem('accessToken')) {
        console.log('accessToken is present');
        let token = localStorage.getItem.stringify('accessToken');
        console.log(token);
        console.log(localStorage.getItem('accessToken'));
    } else {
       await genetateAccessToken();
    }
}