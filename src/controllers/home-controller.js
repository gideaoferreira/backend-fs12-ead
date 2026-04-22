import { listUsersService } from "../services/user-service.js"

function homeController(request, response) {
    try {
        const users = listUsersService()
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