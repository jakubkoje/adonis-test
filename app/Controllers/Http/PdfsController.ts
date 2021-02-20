import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import PDFKit from 'pdfkit'
import * as fs from 'fs'

export default class PdfsController {
  public async store ({request, response}: HttpContextContract) {
    console.log(request.all())
    const doc = new PDFKit()
    doc.pipe(fs.createWriteStream('tmp/uploads/test.pdf'))
    doc.text('Hello World!')
    doc.end()
    response.download('tmp/uploads/test.pdf')
  }
}
