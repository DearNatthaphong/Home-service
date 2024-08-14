import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const categoryContext = createContext();

function CategoryProvider(props) {
  //    fetch all categories start //
  const [allCategories, setAllCategories] = useState([]);

  const fetchAllCategories = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/categories`);
      setAllCategories(result.data);
    } catch (error) {
      toast.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);
  //    fetch all categories end //

  // filter start//
  const [search, setSearch] = useState('');

  const filter = allCategories.filter(
    (item) => search === '' || item.category_name.includes(search.trim())
  );
  // filter end//

  //   create a new category start //
  const [categoryName, setCategoryName] = useState('');

  const navigate = useNavigate();

  const dataPost = {
    categoryName
  };

  const createCategory = async () => {
    try {
      const result = await axios.post(
        `http://localhost:4000/categories`,
        dataPost
      );
      setCategoryName('');
      navigate('/admin/category');
      toast.success(result.data.message);
    } catch (error) {
      toast.error('Error creating a new category:', error);
    }
  };
  //    create a new category end //

  //    fetch a category by id start //
  const [category, setCategory] = useState({});
  const { id } = useParams();

  const fetchCategoryById = async (id) => {
    try {
      const result = await axios.get(`http://localhost:4000/categories/${id}`);
      setCategory(result.data);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching the category:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCategoryById(id);
    }
  }, [id]);

  // อัพเดต categoryName เมื่อ category เปลี่ยนแปลง
  useEffect(() => {
    if (category && category.category_name) {
      setCategoryName(category.category_name);
    }
  }, [category]);
  //    fetch a category by id end //

  //   edit a category by id start //
  const updateCategory = async (id) => {
    try {
      const result = await axios.put(
        `http://localhost:4000/categories/${id}`,
        dataPost
      );
      navigate(`/admin/category/${id}`);
      toast.success(result.data.message);
    } catch (error) {
      toast.error('Error updating the category:', error);
    }
  };

  //   edit a category by id end //

  /** เก็บค่า id เมื่อทำการคลิกที่ icon ว่าที่่กดอยู่เป็น id ที่เท่าไหร่ Start */
  const [open, setOpen] = useState(false);
  const [keepId, setKeepId] = useState('');
  /** เก็บค่า id เมื่อทำการคลิกที่ icon ว่าที่กดอยู่เป็น id ที่เท่าไหร่ End */

  //   delete a category by id start //
  const deleteCategory = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:4000/categories/${id}`
      );
      const newCategories = allCategories.filter((item) => {
        return item.service_category_id !== id;
      });
      setAllCategories(newCategories);
      setOpen(false);
      toast.success(result.data.message);
      navigate(`/admin/category`);
    } catch (error) {
      // console.log(error);
      toast.error('Error deleting the category:', error);
    }
  };
  //   delete a category by id end //

  return (
    <categoryContext.Provider
      value={{
        allCategories,
        categoryName,
        setCategoryName,
        createCategory,
        category,
        setCategory,
        fetchCategoryById,
        id,
        updateCategory,
        filter,
        search,
        setSearch,
        open,
        setOpen,
        keepId,
        setKeepId,
        deleteCategory
      }}
    >
      {props.children}
    </categoryContext.Provider>
  );
}

const useCategory = () => useContext(categoryContext);

export { CategoryProvider, useCategory };
