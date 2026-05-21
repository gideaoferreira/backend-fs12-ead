import { request, response } from "express"
import userService from "../services/user-service.js"

function userController() {
  return {
    list: async (request, response) => {
      try {
        const page = request.query.page ? request.query.page : 1
        const limit = request.query.limit ? request.query.limit : 10
        const filter = request.query.filter ? request.query.filter : null

        const sortBy = request.query.sortBy ? request.query.sortBy : null
        const sort = request.query.sort ? request.query.sort : null
        const sortParams = { sortBy: sortBy, sort: sort}
        

        const service = userService()
        const listUsers = await service.list(page, limit, filter, sortParams)
        return response.status(200).json(listUsers)
      } catch (error) {
        console.log(error.toString())
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
    },
    delete: async (request, response) => {
      try {
        const service = userService()
        const userDeleted = await service.delete(request.params.id)
        return response.status(200).json(userDeleted)
      } catch (error) {
        return response.status(500).json(error.message)
      }
    },
    update: async (request, response) => {
      try {
        const service = userService()
        const userUpdated = await service.update(request.params.id, request.body)
        return response.status(200).json(userUpdated)
      } catch (error) {
        return response.status(500).json(error.message)
      }
    }
  }
}

export default userController