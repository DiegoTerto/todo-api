import CategoryModel from "../entity/category.schema";

class CategoryService {
  async create(category: any) {
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
}

export default new CategoryService()