import React, { useState } from "react";

// منتجات مؤقتة
const sampleProducts = [
  { id: 1, Name: "تيشيرت رجالي", Price: 20, Image: "https://via.placeholder.com/200", Description: "تيشيرت قطن عالي الجودة" },
  { id: 2, Name: "حذاء رياضي", Price: 45, Image: "https://via.placeholder.com/200", Description: "حذاء مريح للرياضة والمشي" },
  { id: 3, Name: "ساعة يد", Price: 80, Image: "https://via.placeholder.com/200", Description: "ساعة أنيقة ضد الماء" },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart([...cart, p]);
    alert(p.Name + " تمت إضافته إلى السلة ✅");
  };

  const openWhatsApp = () => {
    if (cart.length === 0) {
      alert("السلة فارغة!");
      return;
    }

    let message = "🛒 طلب جديد:\n";
    cart.forEach((p, i) => {
      message += `${i + 1}. ${p.Name} - $${p.Price}\n`;
    });

    let url = `https://wa.me/9647700000000?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="app">
      <header>
        <h1>🛍️ GN Shop</h1>
      </header>

      <div className="products">
        {sampleProducts.map((p) => (
          <div key={p.id} className="card">
            <img src={p.Image} alt={p.Name} />
            <h3>{p.Name}</h3>
            <p>{p.Description}</p>
            <p className="price">${p.Price}</p>
            <button onClick={() => addToCart(p)}>إضافة للسلة</button>
          </div>
        ))}
      </div>

      <footer>
        <button className="buy" onClick={openWhatsApp}>
          إتمام الشراء عبر واتساب
        </button>
      </footer>
    </div>
  );
}
