import { listUsersRepository } from "../repositories/user-repository.js"

export function listUsersService() {
    try {
        return listUsersRepository()
    } catch (error) {
        throw new Error("Erro ao listar os usuarios")
    }
}