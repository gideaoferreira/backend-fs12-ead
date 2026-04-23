import { User } from "../models/user.js"

export async function listUsersRepository() {
    const users = await User.findAll()
    return users
}

export async function createUserRepository(data) {
    const user = await User.create(data)
    return user
}