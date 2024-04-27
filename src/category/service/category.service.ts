import CategoryModel from "../entity/category.schema";
import { Category } from "../entity/category.type";

class CategoryService {
  async create(category: Category) {
    const createdCategory = await CategoryModel.create(category)
    return createdCategory
  }

  async findAll() {
    const allCategories = await CategoryModel.find()
    return allCategories
  }

  async findById(id: string) {
    const category = await CategoryModel.findById(id)
    return category
  }

  async update(id: string, data: Category) {
    const categoryUpdated = await CategoryModel.findByIdAndUpdate(id, data, { new: true })
    return categoryUpdated
  }

  async delete(id: string) {
    await CategoryModel.findByIdAndDelete(id)
  }
}

export default new CategoryService()