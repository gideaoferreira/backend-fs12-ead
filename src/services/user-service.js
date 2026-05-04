import { response } from "express"
import userRepository from "../repositories/user-repository.js"

function userService() {
  return {
    list: async () => {
      try {
        const repository = userRepository()
        return await repository.list()
      } catch (error) {
        throw new Error("Não foi possível listar os usuários")
      }
    },
    create: async (data) => {
      try {
        const repository = userRepository()
        return await repository.create(data)
      } catch (error) {
        throw new Error("Não foi possível criar o usuário")
      }
    },
    delete: async (id) => {
      try {
        const repository = userRepository()
        return await repository.delete(id)
      } catch {
        throw new Error("Não foi possível deletar o usuário")
      }
    }
  }
}

export default userService