import { listUsersService } from "../services/user-service.js"

async function homeController(request, response) {
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

export default homeController