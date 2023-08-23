const categoryService = require("../services/category.service")

const createcategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.create_category(reqBody);
        if (!category) {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "category create successfully!",
            data: { category },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const category_list = async (req, res) => {
    try {
        const getCategory = await categoryService.getCategoryList();
        res.status(200).json({
            success: true,
            message: "Category List!",
            data: { getCategory },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}
const category_delete = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.category_delete(categoryId);
        if (!categoryExists) {
            throw new Error("category not found!");
        }

        await categoryService.deletecategory(categoryId);

        res.status(200).json({
            success: true,
            message: "category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
module.exports = {
    createcategory,
    category_list,
    category_delete
};