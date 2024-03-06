import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const prisma = new PrismaClient();

async function imageToBase64(imageName) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  // Define the path to the image file
  const imagePath = path.join(
    __dirname,
    "../../public/images/assets/",
    imageName
  );

  const imagePathDef = path.join(
    __dirname,
    "../../public/images/assets/grifo.png"
  );

  try {
    let imageBuffer;
    let imageToUse = fs.existsSync(imagePath) ? imagePath : imagePathDef;

    if (fs.existsSync(imageToUse)) {
      // Read the image file synchronously
      imageBuffer = fs.readFileSync(imageToUse);

      // Compress SVG
      const base64String = imageBuffer.toString("base64");

      // Construct the data URI
      const mimeType = path.extname(imageToUse).slice(1); // Get the file extension
      const dataURI = `data:image/${mimeType};base64,${base64String}`;
      return dataURI;
    } else {
      console.error("Image not found:", imageName);
      return null;
    }
  } catch (error) {
    console.error(
      "Error reading, compressing, or converting the image:",
      error
    );
    return null;
  }
}

async function main() {
  // await prisma.product.deleteMany();

  // return;
  try {
    await prisma.product.createMany({
      data: [
        {
          id: 6,
          name: "Muggo",
          category: "Small couch",
          price: 750,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("muggo.png"),
          new: true,
        },
        {
          id: 7,
          name: "Pingky",
          category: "Cute couch",
          price: 10000,
          oldPrice: 20000,
          discount: "50",
          image: await imageToBase64("respira.png"),
          new: false,
        },
        {
          id: 8,
          name: "Potty",
          category: "Minimalist couch",
          price: 9000,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("muggo.png"),
          new: true,
        },
        {
          id: 9,
          name: "Glimmer",
          category: "Modern chandelier",
          price: 500,
          oldPrice: 750,
          discount: "33",
          image: await imageToBase64("respira.png"),
          new: false,
        },
        {
          id: 10,
          name: "Terra",
          category: "Terrarium coffee table",
          price: 300,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("syltherine.png"),
          new: true,
        },
        {
          id: 11,
          name: "Aqua",
          category: "Glass vase",
          price: 80,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("syltherine.png"),
          new: true,
        },
        {
          id: 12,
          name: "Cosmic",
          category: "Space-themed rug",
          price: 200,
          oldPrice: 300,
          discount: "33",
          image: await imageToBase64("cosmic.png"),
          new: false,
        },
        {
          id: 13,
          name: "Nova",
          category: "LED pendant light",
          price: 150,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("nova.png"),
          new: true,
        },
        {
          id: 14,
          name: "Rustico",
          category: "Rustic dining table",
          price: 1200,
          oldPrice: 1500,
          discount: "20",
          image: await imageToBase64("rustico.png"),
          new: false,
        },
        {
          id: 15,
          name: "Nebula",
          category: "Galaxy-inspired lamp",
          price: 100,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("nebula.png"),
          new: true,
        },
        {
          id: 16,
          name: "Serenity",
          category: "Zen garden set",
          price: 400,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("leviosa.png"),
          new: true,
        },
        {
          id: 17,
          name: "Zenith",
          category: "Minimalist bookshelf",
          price: 600,
          oldPrice: 800,
          discount: "25",
          image: await imageToBase64("zenith.png"),
          new: false,
        },
        {
          id: 18,
          name: "Eclipse",
          category: "Dark-themed curtains",
          price: 120,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("leviosa.png"),
          new: true,
        },
        {
          id: 19,
          name: "Lunar",
          category: "Moon-shaped side table",
          price: 180,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("lolito.png"),
          new: true,
        },
        {
          id: 20,
          name: "Aurora",
          category: "Northern Lights wall art",
          price: 90,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("respira.png"),
          new: true,
        },
        {
          id: 21,
          name: "Stella",
          category: "Star-patterned rug",
          price: 250,
          oldPrice: 300,
          discount: "17",
          image: await imageToBase64("stella.png"),
          new: false,
        },
        {
          id: 22,
          name: "Tropicana",
          category: "Tropical-themed cushion",
          price: 50,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("tropicana.png"),
          new: true,
        },
        {
          id: 23,
          name: "Cascade",
          category: "Waterfall desk lamp",
          price: 120,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("cascade.png"),
          new: true,
        },
        {
          id: 24,
          name: "Mystic",
          category: "Crystal ball decor",
          price: 70,
          oldPrice: null,
          discount: "",
          image: await imageToBase64("mystic.png"),
          new: true,
        },
      ],
    });

    console.log("Products created successfully!");
  } catch (error) {
    console.log("error", error);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
