const cart = [
    {product: 'Laptop', price: 5000000, quantity: 5},
    {product: 'PC', price: 10000000, quantity: 1},
    {product: 'Iphone', price: 20000000, quantity: 4},
    {product: 'Samsung', price: 30000000, quantity: 7},
]

// Tính tổng tiền giỏ hàng
const totalAmout = cart.reduce((total,item) => {
    return total + (item.price * item.quantity);
}, 0) ;
console.log(`Tổng tiền là: ${totalAmout.toLocaleString ('vi-VN')}đ`);


// Tính tổng số lượng sản phẩm
const totalItems = cart.reduce((count,item) => {
    return count + item.quantity;
},0);
console.log(`Tong san pham là: ${totalItems}`);