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
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_43_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkwLFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNiTDV4MUprV2RXOVN1dGVHZm83cUhDTG40dFRZdjlMeTZoUXBGMmlmOEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NDI1NjE2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EyNjk2Q0U4QjcwQzE1MzUxRkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MDU4NjEwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImU2bk9VX19tUnBtT0oyMXFPdGxQTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWNkMjJjY2QtYmY1Ni00ZDQ3LWE1YmYtMTY0OTMzNzZmMjAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDczLFxuICAgICAgMTAwLFxuICAgICAgMTUxLFxuICAgICAgMzksXG4gICAgICAxMDcsXG4gICAgICAxNDksXG4gICAgICAxNCxcbiAgICAgIDE2OSxcbiAgICAgIDk0LFxuICAgICAgOTAsXG4gICAgICA0MixcbiAgICAgIDE2OSxcbiAgICAgIDgwLFxuICAgICAgMjE1LFxuICAgICAgMTU1LFxuICAgICAgNzgsXG4gICAgICAyMzMsXG4gICAgICA0OCxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICAxMTYsXG4gICAgICAxNzgsXG4gICAgICAxODAsXG4gICAgICAxOTYsXG4gICAgICAxOTksXG4gICAgICA2LFxuICAgICAgMTYwLFxuICAgICAgOTMsXG4gICAgICAxNCxcbiAgICAgIDQ3LFxuICAgICAgMTg1LFxuICAgICAgMjQ5LFxuICAgICAgMTQyLFxuICAgICAgMzksXG4gICAgICA1OSxcbiAgICAgIDQ3LFxuICAgICAgMTk5LFxuICAgICAgNDcsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWR0pRS01WWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NDI1NjE2MjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODExNzA5NzI4MTEzMzU6MjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi5Y2QXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTldvODZvTEVLbjQ0TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKYmxmRmRrYjQvWGxjeW5DeG4yN1NiTERzOStaZnVKb0hnZ0d0SVFHejNJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkIySHF4NXFzQ2wwUEQ4ZEw0ZFZvbzNTU2xNRTF4ZU00RjBhMlRMWkxRckJvd1E2dVRuOE1CZHFXK2ZoOWhPeFFPNFRJU0VWRWY3aWtMbWxvbU02eERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndDRUh3dWRnUjZGdThBSlE0WitGYWpobmdaU01OZmJWdmVncHFWTkJ1R2JoVzQwbVpPQkoraStnemp5ZGFXNlI1V0g3TmtaRzUxaXg0c09CdVB0WkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDQyNTYxNjI6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDU4NjA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzQzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDNDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzNG5VZDNPT2drZ245dExoSVVVRlF0VENMQ1R3dzA0RW8wcXRMUVEyZ3NnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNDI3NTk3NjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzA1ODYwNzI4OVwifSIKfQ=="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "'",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "shisᴜɪ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ayc",


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
