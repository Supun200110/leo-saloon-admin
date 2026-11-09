import toast from "react-hot-toast";

const products = [
  {
    sku: "SAL001",
    name: "Professional Hair Dryer",
    altNames: ["Hair Blower", "Salon Hair Dryer"],
    description: "Professional salon hair dryer with adjustable heat and speed settings. Ideal for fast drying and hair styling.",
    stock: 15,
    status: "ACTIVE",
    price: 12500,
    compareAt: 15000,
    brand: "Dyson",
    model: "HD08",
    media: [
      {
        url: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800",
        type: "IMAGE"
      },
      {
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        type: "VIDEO"
      }
    ]
  },
  {
    sku: "SAL002",
    name: "Hair Shampoo",
    altNames: ["Hair Cleanser", "Salon Shampoo"],
    description: "Gentle professional shampoo designed to cleanse hair and maintain moisture and shine.",
    stock: 30,
    status: "ACTIVE",
    price: 2500,
    compareAt: 3000,
    brand: "L'Oreal",
    model: "Professionnel Serie Expert",
    media: [
      {
        url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800",
        type: "IMAGE"
      }
    ]
  },
  {
    sku: "SAL003",
    name: "Hair Styling Cream",
    altNames: ["Hair Cream", "Styling Cream"],
    description: "Professional styling cream that helps control frizz and provides a smooth, natural-looking finish.",
    stock: 20,
    status: "ACTIVE",
    price: 3200,
    compareAt: 4000,
    brand: "Wella",
    model: "EIMI Styling Cream",
    media: [
      {
        url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800",
        type: "IMAGE"
      }
    ]
  },
  {
    sku: "SAL004",
    name: "Facial Cleanser",
    altNames: ["Face Wash", "Skin Cleanser"],
    description: "Refreshing facial cleanser suitable for everyday skincare and professional salon facial treatments.",
    stock: 25,
    status: "ACTIVE",
    price: 2800,
    compareAt: 3500,
    brand: "CeraVe",
    model: "Foaming Cleanser",
    media: [
      {
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800",
        type: "IMAGE"
      }
    ]
  },
  {
    sku: "SAL005",
    name: "Professional Hair Straightener",
    altNames: ["Flat Iron", "Hair Iron"],
    description: "Ceramic hair straightener designed for smooth styling and professional salon use.",
    stock: 12,
    status: "ACTIVE",
    price: 8500,
    compareAt: 10000,
    brand: "Philips",
    model: "HP8302",
    media: [
      {
        url: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800",
        type: "IMAGE"
      },
      {
        url: "https://www.w3schools.com/html/movie.mp4",
        type: "VIDEO"
      }
    ]
  },
  {
    sku: "SAL006",
    name: "Moisturizing Face Cream",
    altNames: ["Face Moisturizer", "Hydrating Cream"],
    description: "Hydrating face cream that helps keep skin soft and moisturized throughout the day.",
    stock: 18,
    status: "ACTIVE",
    price: 4200,
    compareAt: 5000,
    brand: "Nivea",
    model: "Soft Moisturizing Cream",
    media: [
      {
        url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800",
        type: "IMAGE"
      }
    ]
  },
  {
    sku: "SAL007",
    name: "Makeup Brush Set",
    altNames: ["Cosmetic Brushes", "Beauty Brush Kit"],
    description: "Complete makeup brush collection for professional makeup application and blending.",
    stock: 22,
    status: "ACTIVE",
    price: 5500,
    compareAt: 6500,
    brand: "Real Techniques",
    model: "Everyday Essentials",
    media: [
      {
        url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
        type: "IMAGE"
      }
    ]
  },
  {
    sku: "SAL008",
    name: "Hair Conditioner",
    altNames: ["Hair Treatment", "Conditioning Cream"],
    description: "Nourishing conditioner designed to soften hair, improve manageability, and reduce dryness.",
    stock: 28,
    status: "ACTIVE",
    price: 3000,
    compareAt: 3600,
    brand: "L'Oreal",
    model: "Professionnel Conditioner",
    media: [
      {
        url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800",
        type: "IMAGE"
      }
    ]
  },
  {
    sku: "SAL009",
    name: "Nail Polish Set",
    altNames: ["Nail Color Kit", "Nail Paint"],
    description: "Colorful nail polish collection suitable for professional manicures and nail art.",
    stock: 35,
    status: "ACTIVE",
    price: 4500,
    compareAt: 5500,
    brand: "OPI",
    model: "Nail Lacquer Collection",
    media: [
      {
        url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
        type: "IMAGE"
      }
    ]
  },
  {
    sku: "SAL010",
    name: "Professional Makeup Kit",
    altNames: ["Beauty Makeup Set", "Cosmetic Kit"],
    description: "Professional makeup collection containing essential cosmetics for salon makeup services.",
    stock: 10,
    status: "ACTIVE",
    price: 9500,
    compareAt: 12000,
    brand: "Maybelline",
    model: "Professional Beauty Kit",
    media: [
      {
        url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
        type: "IMAGE"
      },
      {
        url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
        type: "IMAGE"
      },
      {
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        type: "VIDEO"
      }
    ]
  }
];



export default function ProductsPage(){

    return(
        <div className="w-full h-full">
            {
                products.map(
                    (item)=>{
                        return(
                            <h1 >{item.name}</h1>
                        )
                    }
                )
            }
        </div>
    )
}