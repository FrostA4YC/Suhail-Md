const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://aayc:swager@cluster0.ag6qq5w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_01_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyczZsZ2IzOXhvQjMxcGRsR0lmZ1F2L1lCMkdQZCtvR3JlL25TNDFrb1JRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDQyNTYxNjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBREQ0NTExMDlBNTJCNThGNzc2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjM4Mjg1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsV1ZVMm94YVRGQ1J2Y21GWnZHLXNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3ZTVmNzAwLWRmYTctNGJmYS1hNmRkLWY4NmExYWRlMDAyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDIyOCxcbiAgICAgIDE2OSxcbiAgICAgIDIwNyxcbiAgICAgIDE5MyxcbiAgICAgIDkyLFxuICAgICAgMTUsXG4gICAgICAxMjEsXG4gICAgICA3NCxcbiAgICAgIDEyNixcbiAgICAgIDUzLFxuICAgICAgMTg1LFxuICAgICAgMTQxLFxuICAgICAgMTI0LFxuICAgICAgMTYyLFxuICAgICAgOTEsXG4gICAgICAyMzksXG4gICAgICA0MixcbiAgICAgIDEwOSxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDE3NixcbiAgICAgIDI0OCxcbiAgICAgIDE2MCxcbiAgICAgIDE0NixcbiAgICAgIDE0OCxcbiAgICAgIDExOSxcbiAgICAgIDE0OSxcbiAgICAgIDE4MCxcbiAgICAgIDk1LFxuICAgICAgNjMsXG4gICAgICAyMDUsXG4gICAgICA3OSxcbiAgICAgIDczLFxuICAgICAgMjAwLFxuICAgICAgNDQsXG4gICAgICA5NixcbiAgICAgIDE0NSxcbiAgICAgIDc0LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnkxcWRzUEVJTFp0N0lHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqekROUityOWVweWhqWGFCYVZ4OEpVUEVaT3ZiOTZtdnhsTHVkSFg0K3lFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdRV2FUZFRnWnozUkkvcDB3TkhYTEQ2aHpId0t1OXdZbkU4MHZiTGliN3M3U2R6aWNnYnp3V0YySkM2ZXRrZ2ljZVU0d0JBTGZ4WnBsTzM2aEVPZWpRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm4zNmVabTkrbHh0R1M3bUlScWpmTWExS0NBVUJUUjh1M0pqT0U3RU52Rld1QmZmR0lKTi9jbXM0NkFzUHhLT0NNRUdNNTNOT1IvK3VUSUpwSlhmbEJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NDI1NjE2MjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODExNzA5NzI4MTEzMzU6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQcKlQ1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NDI1NjE2MjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYzODI4NTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFSWhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVJZi5qc29uIjogIntcImtleURhdGFcIjpcIkJBUVF2YkJ1NTB0QUc3OEFIS09IeGlRR1k5SXRRSW90OXFWSW9hQ2hGMEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIxODA1MTIyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE2Mjk1NDgwOTk2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUloLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaC9XejNNSnpKeldRSDhCMDQxcytwZzBzSkFCaElGZzNkRWF2MU53cjJFdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MjE4MDUxMjI4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjM4MjIzOTY2NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "¢",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
