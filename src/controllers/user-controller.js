import userService from "../services/user-service.js"

function userController() {
  return {
    list: async (request, response) => {
      try {
        const service = userService()
        const listUsers = await service.list()
        return response.status(200).json(listUsers)
      } catch (error) {
        return response.status(500).json(error.message)
      }
    },
    create: async (request, response) => {
      try {
          const service = userService()
          const user = await service.create(request.body)
          return response.status(201).json(user)
      } catch (error) {
        return response.status(500).json(error.message)
      }
    }
  }
}

export default userController