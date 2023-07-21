import { useEffect, useState } from "react";
import axios from "axios";


const Navbar = () => {

    const [categories, setCategories] = useState([])

useEffect(() => {
    axios.get('http://localhost:3000/categories')
  .then(res => {
    console.log(res.data);
  });
}, []);

return (
    <ul>
        <li>Home</li>
    </ul>
)
}
export default Navbar;