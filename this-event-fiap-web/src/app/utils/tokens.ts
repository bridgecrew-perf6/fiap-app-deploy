export const setAuthenticationToken = (token: string) => localStorage.setItem('Authentication-Token', token);
export const getAuthenticationToken = () => localStorage.getItem('Authentication-Token') || '';
export const removeAuthenticationToken = () => localStorage.removeItem('Authentication-Token');