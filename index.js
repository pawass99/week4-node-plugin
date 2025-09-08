import chalk from "chalk";
import figlet from "figlet";
import cowsay from "cowsay";
import dayjs from "dayjs";
import boxen from "boxen";
import { pastel } from "gradient-string";

const input = process.argv[2];

if (!input) {
  console.log(
    boxen(
        chalk.red(" Error: Harap masukkan Nama dan NIM."),
        {title: 'Error', titleAlignment: 'center', borderColor: "red"},
    )
);
  console.log(
    boxen(
        chalk.yellow('Contoh: node index.js "Pawas - 12345678"'),
        {title: 'Contoh', titleAlignment: 'center', borderColor: "yellow"})
);
  process.exit(1);
}

let [fullName, nim] = input.split("-").map(s => (s || "").trim());


if (!fullName) fullName = "Unknown";
if (!nim) nim = "NIM-Unknown";

const dataDiri =
  chalk.hex("#f2cdcd")("Name: ") + chalk.bold.redBright(fullName) + "\n" +
  chalk.hex("#cba6f7")("NIM: ") + chalk.bgHex("#cba6f7").black(nim);

console.log(
  boxen(dataDiri, {
    title: "Data Diri",
    titleAlignment: 'center',
    padding: 1,
    margin: 1,
    borderStyle: "double",    
    borderColor: "redBright", 
    align: "center"           
  })
);

const stego = cowsay.say({
    text: "Dijalanin aja dulu rawr",
    f: "stegosaurus",
  })

console.log(pastel(stego));


figlet.text(fullName, (err, data) => {
  if (err) {
    console.log("waduh ada yang salah nih...");
    console.dir(err);
    return;
  }
  console.log(pastel(data));
});
