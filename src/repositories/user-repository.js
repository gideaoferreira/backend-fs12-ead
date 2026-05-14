import { User } from "../models/user.js"
import { Op } from "sequelize"

function userRepository() {
  return {
    list: async (page, limit, filter = null, sortParams) => {
      const limitParse = Number(limit)
      const pageParse = Number(page)
      const offset = (pageParse - 1) * limitParse

      const options = {
        limit: limitParse,
        offset: offset
      }

      if (filter) {
        options.where = {
          [Op.or]: [
            { name: { [Op.like]: `%${filter}%` } },
            { lastName: { [Op.like]: `%${filter}%` } },
            { email: { [Op.like]: `%${filter}%` } },
            { id: { [Op.like]: `%${filter}%` } },
          ]
        }
      }

      if (sortParams.sort) {
        options.order = [[sortParams.sortBy, sortParams.sort]]
      }
      
      const { rows, count } = await User.findAndCountAll(options)
      
      return {
        data: rows,
        pagination: {
          total: count,
          perPage: limitParse,
          currentPage: pageParse,
          totalPages: Math.ceil(count / limitParse)
        }
      }
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