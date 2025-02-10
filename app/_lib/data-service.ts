import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imageUrl:string) {
 

         const res = await fetch(imageUrl);
	 const buffer = await res.arrayBuffer();
 const { base64 } = await getPlaiceholder(Buffer.from(buffer));
	 return base64;
 
}