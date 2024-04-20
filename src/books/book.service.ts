import BookModel from './book.schema'

export class BookService {
  async create(book: any) {
    const createdBook = await BookModel.create(book)
    return createdBook
  }

  async findById(id: string) {
    const book = await BookModel.findById(id)
    return book
  }

  async update(id: string, data: any) {
    await BookModel.updateOne({ id: id }, { ...data })
    const bookUpdated = this.findById(id);
    return bookUpdated
  }

  async delete(id: string) {
    await BookModel.deleteOne({ id: id })
  }

  async findAll() {
    const books = await BookModel.find()
    return books;
  }

  async count() {
    const count = await BookModel.countDocuments()
    return count
  }

}