// localStorage.setItem('accessToken', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZGF0ZSI6IjIwMjMtMDEtMjlUMTU6NTU6MDEuMDg4WiIsImlhdCI6MTY3NTA5MjEwNX0.2ESXIY75b_ojKmG4QwyJZlpgRUulXlvngDDFMGCnZ0M");
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
        ('accessToken');
        console.log(localStorage.getItem('accessToken'));
    } else {
       await genetateAccessToken();
    }
}