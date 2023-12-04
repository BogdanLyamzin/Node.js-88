import fs from "fs/promises";
import detectFileEncoding from "detect-file-encoding-and-language";

const func = async ()=> {
    const filepath = "./files/file.txt";
    // const buffer = await fs.readFile(filepath);
    // const text = buffer.toString();
    // console.log(text);
    // const text = await fs.readFile(filepath, "utf-8");
    // console.log(text);
    // const {encoding} = await detectFileEncoding(filepath);
    // const text = await fs.readFile(filepath, encoding);
    // console.log(text);
    // await fs.appendFile(filepath, "\nPHP the best");
    // await fs.writeFile(filepath, "Mojo forever");
    // await fs.appendFile("./files/file2.txt", "\nPHP the best");
    // await fs.writeFile("./files/file3.txt", "Mojo forever");
    await fs.unlink("./files/file3.txt")
}

func()

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
// })