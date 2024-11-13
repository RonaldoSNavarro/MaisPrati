import ApiClient from "./ApiClient"

export const getUsers = () => ApiClient.get('/users')
export const addUser = () => ApiClient.post('/users', user)
export const deleteUser = (id) => ApiClient.delete(`/users/${id}`)