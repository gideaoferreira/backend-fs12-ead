import { createUserRepository, listUsersRepository } from "../repositories/user-repository.js"

export async function listUsersService() {
    try {
        return await listUsersRepository()
    } catch (error) {
        throw new Error(`Erro ao listar os usuarios: ${error.message}`)
    }
}

export async function createUserService(data) {
    try {
        return await createUserRepository(data)
    } catch (error) {
        throw new Error(`Não foi possível criar o usuário: ${data}`)
    }
}