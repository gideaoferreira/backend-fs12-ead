function homeController(request, response) {
    return response
            .status(200)
            .json(`PÁGINA INICIAL`)
}

export default homeController