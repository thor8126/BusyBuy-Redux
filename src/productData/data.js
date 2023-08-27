// create data array for products 
const data = [
  {
    id: 1,
    title: "Laptop Bag",
    price: 1099,
    description:
      "Ease of Access-Multi purpose pockets Super sorted stuff It has a vibrant and stylish design, along with the added benefit of spacious interiors.",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/51wPjgtbwqL._SY300_SX300_QL70_FMwebp_.jpg",
    
  },
  {
    id: 2,
    title: "BLIVE Men's Printed T-Shirt ",
    price: 300,
    description:
      "BLIVE Men's Regular Fit Round Neck Printed T-Shirt | Printed T-Shirt",
    category: "men's clothing",
    image:
      "https://m.media-amazon.com/images/I/514LYTdn4yL._AC_UL320_.jpg",
    
  },
  {
    id: 3,
    title: "Winter Warm parka Jacket",
    price: 1155,
    description:
      "Decdeal Men's Chinlon Mountain Waterproof Shell Ski Windproof Winter Warm parka Jacket for Camping Hiking Skiing",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/61MuswtIWqL._AC_UL320_.jpg",
    
  },
  {
    id: 4,
    title: "Mens Casual Shirt",
    price: 900,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnJ73KRnVOWWJWSiY1aZ5toEC8IndGNwQrQ&usqp=CAU",
    
  },
  {
    id: 5,
    title:
      "Chain Bracelet",
    price: 6950,
    description:
      " chain bracelet",
    category: "jewelery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_IHyJrFLyMwmIDGO53FIYX1xn8s_9yvvjpw&usqp=CAU",
    
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 7500,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUU1vW7g7Ng1Cc3RonHFRI10iHw7miZF167r4DYedcNRn-1zoMoKhAUNfrMnEcteFOSA&usqp=CAU",
    
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 3999,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6W1epltG4sCNrBQAvbA-hcll1CHbVSJ06g&usqp=CAU",
    
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10999,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9yQz5Lri60rpGMQ5kSyXd25PYaXBTWcxIg&usqp=CAU",
    
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 999,
    description:
      "Portable Air Cooler, 4-In-1 Small Air Conditioner",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/31yu5ppbypL._SX300_SY300_QL70_FMwebp_.jpg",
  
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 699,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/41Iln5A+8HL._SY300_SX300_.jpg",
    
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 5000,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/41gL-LIx3lL._SX300_SY300_QL70_FMwebp_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 25000,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/71iIr9koTGL._AC_UF1000,1000_QL80_.jpg",
    
  },
  {
    id: 13,
    title: "LG 23.8 inch (60.45 cm) Borderless LED 1920x1080 Pixels ",
    price: 19999,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/615j5POH6hL._AC_UY218_.jpg",
    
  },
  {
    id: 14,
    title:
      "Samsung 123.9cm (49) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate ",
    price: 70000,
    description:
      "True immersion by 1000R display with 32:9 aspect ratio",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/41k-Y9vicZL._SX300_SY300_QL70_FMwebp_.jpg",
   
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 2599,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Winter/Winter%20jackets/The%20North%20Face%20McMurdo%20Down%20Parka%20%28winter%20jacket%29.jpg",
    
  },
  {
    id: 16,
    title:
      "woman's new winnter Jacket",
    price: 2599,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQsg2K250lOsANby2I4TPoLyP39dpw1euZA&usqp=CAU",
   
  },
  {
    id: 17,
    title: "Rain season special Raincoats",
    price: 3333,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5AtJx1kzynZxcD290e2IisoepMSLK7WD6w&usqp=CAU",
   
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 799,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsT7AGq2sMtV6FtV1GPVIIkcGaV36DppogAg&usqp=CAU",
    
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 699,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xACseROTBBBQn8SPm8TJYaMSXUgjSvbvCQ&usqp=CAU",
   
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 999,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXRtarvdVYLfYqGg9FTiqdRMES-9BTf-nzg&usqp=CAU",
    
  },
];

export default data;
