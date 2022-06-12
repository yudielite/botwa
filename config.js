const fs = require("fs")
const chalk = require("chalk")

//Others
global.owner = ['6282210819939']
global.nomerowner = "6282210819939"
global.ownername = "Tama"
global.namebot = "NeoBase-MD"
global.sessionName = "session"
global.log0 = fs.readFileSync("./media/image/thumb.jpg")
global.qris = fs.readFileSync("./media/image/qris.jpg")
global.fonts = "© Tam-Store"

//Exif
global.packname = "By"
global.author = " © TamStore"

//Message
global.mess = {
success: '*Success!*',
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Digunakan Hanya Untuk Group!*',
private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
bot: '*Fitur Khusus Pengguna Nomor Bot*',
wait: '*Silahkan Menunggu!*',
ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}

//Pengguna
global.rkyt = []

//Limit
global.limitawal = {
premium: "Infinity",
free: 20
}

//Pembatas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})