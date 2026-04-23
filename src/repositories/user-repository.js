import { User } from "../models/user.js"

export async function listUsersRepository() {
    const users = await User.findAll()
    return users
}