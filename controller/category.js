const category = require('../models/category');

//create category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    // const {_id}= req.body
    const newCategory = new category({ name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
//

//get by id
const getCategory = async (req, res) => {
  const id = req.query.id
  try {
    const categorye = await category.findById(id)
    res.json(categorye);

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

//get all category
const getAllCategory = async (req, res) => {
  console.log('pppppppppppppppppppppp')
  try {
    const categorye = await category.find();
    res.json(categorye);
    console.log('kkkkkkkkkkkkkkk',res)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}






module.exports = {
  createCategory,
   getCategory,
   getAllCategory,
};