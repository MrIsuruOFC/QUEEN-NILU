/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QUEENNILU;;;sz9wETrR#7V92nwJFnRIfI-DY5VjqxlnyVU7xr0YSybkLClWFvSU' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://isurucm1_user:NveZZiL2Dpb69vTeYGpAdFUyk6l63AG9@dpg-cl88be76e7vc73a3hbg0-a.frankfurt-postgres.render.com/isurucm1'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94766632281'

global.OWNER_NAME = '『 ᴍʀ | ɪꜱᴜʀᴜ ᴄᴍ 』'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'BLOCK!!!' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'

global.FOOTER = 'Queen Nilu 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = 'ᴍʀ ɪꜱᴜʀᴜ ᴄᴍ' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ɴɪʟᴜ-ᴍᴅ' // Caption

global.ALIVELOGO = 'https://i.ibb.co/2Zyg4dX/20231228-195725.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = true

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'true' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/Ko2HfqBt5mjEsmV9fY7Bsq' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: doom_music_00" //ur yt chanel name
global.socialm = "GitHub: MrIsuruOFC" //ur github or insta name
global.location = "Srilanka, galle" //ur location
