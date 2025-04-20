import axios from "axios";
import { createContext,  useEffect,  useState } from "react";



export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

  const[cartItems,setCartItems] = useState({} );
  const url = "http://localhost:4000";
  const [token,setToken] = useState("")
  const [food_list, setFoodList] = useState([])

  const addToCart = async (req, res) => {
    try {
      const { userId, itemId } = req.body;
  
      // 1. Find the correct user using userId
      const userData = await userModel.findById(userId);
      if (!userData) return res.json({ success: false, message: "User not found" });
  
      // 2. Get the cart data
      const cartData = { ...userData.cartData };
  
      // 3. Add or update item in cart
      if (!cartData[itemId]) {
        cartData[itemId] = 1;
      } else {
        cartData[itemId] += 1;
      }
  
      // 4. Update the user's cart correctly
      await userModel.findByIdAndUpdate(userId, { $set: { cartData } });
  
      res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: "Error adding to cart" });
    }
  };

  const removeFromCart = async (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev [itemId]-1}));
    if(token){
      await axios.post(url+"/api/cart/remove",{token},{headers:{token}})
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
  

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };
  
  const loadCartData = async (token) =>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);
  }

  useEffect(()=>{
    
    async function loadData(){
      await fetchFoodList();
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"));
          await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])

const contextValue ={
  food_list,
  cartItems,
  setCartItems,
  addToCart,
  removeFromCart,
  getTotalCartAmount,
  url,
  token,
  setToken

}
return(
  <StoreContext.Provider value={contextValue}>
   {props.children}  
  </StoreContext.Provider>
)
}


export default StoreContextProvider;
