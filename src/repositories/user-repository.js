import { where } from "sequelize"
import { User } from "../models/user.js"

function userRepository() {
  return {
    list: async () => {
      return await User.findAll()
    },
    create: async (data) => {
      const user = await User.create({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        birthDate: data.birthDate,
        gender: data.gender
      })

      return user
    },
    delete: async (id) => {
      return await User.destroy({
        where: {
          id: id
        }
      })
    },
    update: async (id, data) => {
      return await User.update(
        {
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          birthDate: data.birthDate,
          gender: data.gender,
          status: data.status,
        },
        {
          where: {
            id: id
          }
        }
      )
    }
  }
}

export default userRepository