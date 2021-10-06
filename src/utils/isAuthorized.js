
const isAuthorized = () => {
    const token = (localStorage.getItem("token"));
    if (token === null)
        return null
    else
        return JSON.parse(localStorage.getItem('token'));
}   

export default isAuthorized;
