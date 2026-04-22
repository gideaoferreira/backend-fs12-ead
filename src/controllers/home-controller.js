function homeController(request, response) {
    try {
        const users = listUsers()
        return response
                .status(200)
                .json(users)
    } catch (error) {
        return response.status(500).json({
            message: "Erro ao listar os usuários",
            error: error.message
        })
    }
}

export default homeController