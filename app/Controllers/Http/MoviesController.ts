// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Movie from 'App/Models/Movie'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import {schema} from '@ioc:Adonis/Core/Validator'

export default class MoviesController {
  public async index () {
    return await Movie.all()
  }

  public async show ({params}: HttpContextContract) {
    return await Movie.find(params.id)
  }

  public async store ({request}: HttpContextContract) {
    const movie = new Movie()
    const movieSchema = schema.create({
      name: schema.string(),
      author: schema.string(),
      releaseYear: schema.number(),
    })

    const data = await request.validate({
      schema: movieSchema,
    })
    movie.name = data.name
    movie.author = data.author
    movie.releaseYear = data.releaseYear
    await movie.save()
    console.log(data)
  }
}
