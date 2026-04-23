import { createUserService, listUsersService } from "../services/user-service.js"

export async function listUserController(request, response) {
    try {
        const users = await listUsersService()
        return response
                .status(200)
                .json(users)
    } catch (error) {
        return response
            .status(500)
            .json(error.message)
    }
}

export async function createUserController(request, response) {
    try {
        const body = request.body
        const user = createUserService(body)
        return response
                .status(201)
                .json(user)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}