import { z } from "zod";
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const schema = z.object({
  name: z.string(),
  bookName: z.string(),
  author: z.string(),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().regex(phoneRegex, "Please enter a valid number."),
});

export default schema
