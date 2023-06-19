import fs from "fs"
import path from "path"
const postFile = "/src/posts-data.json"

export async function getPostCollection() {
    let data = await fs.promises.readFile(path.join(process.cwd(), postFile), 'utf8');
    let dataObject: any = JSON.parse(data);
    return dataObject ? dataObject.posts : null
}