import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import book from "./assets/book.png"
import { useState } from 'react';
export default function App() {
  const [price, setPrice] = useState(141800);
  const [quantity, setQuantity] = useState(1);
  const [discountCode , setDiscountCode] = useState("GG1234")
  const handleTang = ()=>{
    setQuantity(quantity+1);
  }
  const handleGiam = ()=>{
    if(quantity == 0){
      alert("số lượng = 0 !");
      setQuantity(1);
    }
    else
    setQuantity(quantity-1)

  }
  
  const generateCode = ()=>{
    
      // Tạo ra 4 chữ số ngẫu nhiên
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      
      // Ghép "GG" với 4 chữ số
      const code = "GG" + randomNumber.toString();
    
     setDiscountCode(code)
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          source={book} 
          style={styles.productImage} 
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm, tích phân và ứng dụng</Text>
          <Text style={styles.seller}>Cung cấp bởi Tiki Trading</Text>
          <View style={styles.priceQuantity}>
            <Text style={styles.price}>{(price * quantity)}đ</Text>
            <Text style={styles.oldPrice}>{price*quantity+100000}đ</Text>
          </View>
          <View style={styles.productQuantity}>
              <Button title='-' onPress={handleGiam}></Button>
              <Text>{quantity}</Text>
              <Button title='+' onPress={handleTang}></Button>
          </View>
          <TouchableOpacity>
            <Text style={styles.buyLater}>Mua sau</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.discountContainer}>
        <TextInput
          style={styles.discountInput}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <Button title="Áp dụng" onPress={generateCode} />
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Tạm tính</Text>
        <Text style={styles.price}>{quantity*price}đ</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalPrice}>{quantity*price}đ</Text>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
 
}

const styles = StyleSheet.create({
  container: {
    marginVertical : 50,
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 150,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productQuantity : {
    width : "50%",
   flexDirection : 'row',
   justifyContent : 'space-around',
   alignItems : 'center'
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  seller: {
    color: '#888',
    marginBottom: 8,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginBottom: 8,
  },
  priceQuantity: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53935',
  },
  quantity: {
    fontSize: 16,
    marginLeft: 8,
  },
  buyLater: {
    color: '#1e88e5',
    textDecorationLine: 'underline',
  },
  discountContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 8,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 16,
  },
  totalContainer: {
    marginTop : 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
 
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53935',
  },
  orderButton: {
 
    backgroundColor: '#e53935',
    paddingVertical: 12,
    borderRadius: 8,
  },
  orderButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

