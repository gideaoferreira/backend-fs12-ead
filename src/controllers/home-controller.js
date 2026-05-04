async function homeController(request, response) {
    try {
        return response
                .status(200)
                .json("Teste de home")
    } catch (error) {
        return response
            .status(500)
            .json(error.message)
    }
}

export default homeController