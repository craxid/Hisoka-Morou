import { fileURLToPath } from "url"
import fs from "fs"

// limit
const limit = {
   free: 100,
   premium: 500,
   VIP: "Unlimited",
   download: {
      free: 30000000, // use byte
      premium: 100000000, // use byte
      VIP: 1130000000, // use byte 
   }
}


export default {
   limit,
   APIs: {
      xzn: {
         URI: 'https://xzn.wtf',
         Key: "i dont know"
      }
   },

   msg: {
      owner: 'Perintah ini hanya dapat digunakan oleh Owner!',
      group: 'Perintah ini hanya dapat digunakan di group!',
      private: 'Perintah ini hanya dapat digunakan di private chat!',
      admin: 'Perintah ini hanya dapat digunakan oleh admin group!',
      botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut',
      bot: 'Fitur ini hanya dapat diakses oleh Bot',
      locked: 'Fitur ini telah dinonaktifkan!',
      media: 'Reply media...',
      error: "Sepertinya ada kesalahan. bot gagal dalam mengeksekusi...",
      quoted: "Reply message...",
      wait: "",
      premium: "Perintah ini hanya dapat digunakan oleh pengguna premium!",
      vip: "Perintah ini hanya dapat digunakan oleh pengguna VIP!",
      dlFree: `File over ${formatSize(limit.download.free)} can only be accessed by premium users`,
      dlPremium: `WhatsApp Web cannot send files larger than ${formatSize(limit.download.premium)}`,
      dlVIP: `WhatsApp cannot send files larger than ${formatSize(limit.download.VIP)}`
   },

   options: {
      public: true,
      URI: "database.json", // use mongo or file json
      owner: ["6285892734101"],
      pathCommand: 'commands'
   },

   Exif: {
      packId: "https://instagram.com/dede_klender",
      packName: `Sticker ini Dibuat Oleh :`,
      packPublish: "Akebi Bot",
      packEmail: "dev@akebi.eu.org",
      packWebsite: "https://instgaram.com/ded_klender",
      androidApp: "",
      iOSApp: "",
      categories: ['😹', '😎', '😱'],
      isAvatar: 0
   },

   session: {
      Path: "session",
      Name: ""
   }
}

function formatSize(bytes) {
   if (bytes >= 1000000024) { bytes = (bytes / 1000000024).toFixed(2) + " GB"; }
   else if (bytes >= 1000024) { bytes = (bytes / 1000024).toFixed(2) + " MB"; }
   else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
   else if (bytes > 1) { bytes = bytes + " bytes"; }
   else if (bytes == 1) { bytes = bytes + " byte"; }
   else { bytes = "0 bytes"; }
   return bytes;
}

let fileP = fileURLToPath(import.meta.url)
fs.watchFile(fileP, () => {
    fs.unwatchFile(fileP)
    console.log(`Update File "${fileP}"`)
    import(`${import.meta.url}?update=${Date.now()}`)
})
