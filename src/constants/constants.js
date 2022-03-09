const API_KEY = 'AIzaSyC9cCS8C6-Tw7PLZLJumoMZ-0iCnGuqdTk';

export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
export const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
export const UPDATE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
