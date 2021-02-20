import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Movie from "App/Models/Movie";

export default class MovieSeeder extends BaseSeeder {
  public async run () {
    await Movie.createMany([
      {
        name: 'Harry potter',
        author: 'J. K. Rowling',
        releaseYear: 2004,
      },
      {
        name: 'Game night',
        author: 'John Francis Daley',
        releaseYear: 2016,
      },
    ])
  }
}
