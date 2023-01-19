const fs = require('fs');
const https = require('https');
const http = require('http')
  
// URL of the image
const url = 'https://images.pexels.com/photos/15067956/pexels-photo-15067956.jpeg';
// Download...
const dotenv = require('dotenv').config();

// Server.....
const server = http.createServer();
server.on('request', (req,res) => {
   const rsteam = fs.createReadStream("files/file.txt")
   rsteam.pipe(res);
});
server.listen(8080, "127.0.0.1")
// Telegram
const TelegramBot = require('node-telegram-bot-api');
const internal = require('stream');
const { isErrored } = require('stream');
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


// Listen for any kind of message. There are different kinds o
bot.onText(/\/pin(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    var randomstring = require('randomstring')
    // send a message to the chat acknowledging receipt of their message
   bot.sendMessage(chatId, `Your text id ${randomstring.generate(5)}`);
  const doc = 'READ.txt'
  
  const url1 = 'https://telegram.org/img/t_logo.png';
  bot.sendDocument(chatId, doc);
  bot.sendDocument(chatId, url1);
  bot.sendMessage('PONG !!');
      bot.sendMessage('PONG!')

  });
  bot.onText(/\/dem(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    var randomstring = require('randomstring')
    // send a message to the chat acknowledging receipt of their message
   bot.sendMessage(chatId, `Your text id ${randomstring.generate(5)}`);
  const doc = 'READ.txt'
 
  const photo = `png.png`
  const url1 = 'https://telegram.org/img/t_logo.png';
  bot.sendDocument(chatId, doc);
  bot.sendDocument(chatId, url1);
  bot.sendMessage('PONG PONG PONG ');
  bot.sendPhoto(chatId,photo)
      bot.sendMessage('DEMO WHY DO YOU NEED !! ')
  });
  bot.onText(/\/star(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    
    const doc = 'READ.txt'
    bot.sendDocument(chatId, doc)
     bot.sendContact(chatId,`+917498553750`,`Pawit Sahare [Admin]`)
     var options = ['Yes I love', 'No', 'Never'];
     bot.sendPoll(chatId,'Do you love India',options)

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'I am alive ');
    bot.sendMessage(chatId, 'ALL FILE IN STORAGE JUST TYPE\n /storage')
  });
  bot.onText(/\/storag(.+)/, (msg, match) => {
    const chatId = msg.chat.id;

     const doc = 'READ.txt'
     const file = 'files/file.txt'
    try {
      const chatId = msg.chat.id;
      bot.sendDocument(chatId,file)
    } catch (error) {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId,error);
    } 
         
     bot.sendContact(chatId,`+917498553750`,`Pawit Sahare [Admin]`)
     var options = ['Yes I love', 'No', 'Never'];
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'THE FILES IN file.txt DONT OPEN IT \n BECAUSE THIS IS A BASE64 FILE THAT CAN CRASH \n YOUR DEVICE');
    bot.sendMessage(chatId, 'THE FILE NAME IS file.txt rename this to \n  your extension like .png,.zip,.tar , etc...');
    bot.sendDice(chatId);
    var media = ['https://t.me/+f6X-wqFea9RhZjA9']
    const documen = `${process.env.DOAMIN_NAME}`;
    bot.sendPoll(chatId,'Do you love India',options)
   
   bot.sendMessage(chatId,`Wait dont send any msg ,\n Pulling a link `)
   bot.sendMessage(chatId,`${process.env.DOMAIN_NAME}`)
   bot.sendMessage(chatId,`${process.env.DOMAIN_NAME}`)
   bot.sendMessage(chatId,`${process.env.DOMAIN_NAME}`)
   bot.sendMessage(chatId,`${process.env.DOMAIN_NAME}`)
   bot.sendMessage(chatId,`${process.env.DOMAIN_NAME}`)
   bot.sendMessage(chatId,`${process.env.DOMAIN_NAME}`)
   // he
  
   
//text="<a href='https://www.google.com/'>Google</a>",parse_mode=ParseMode.HTML)
  });
  //
  //
//Download Steps  
bot.onText(/\/download (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
    
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, `Wait your link is processing ${resp} /n if not response plese use https:// not http:// and any link support \n \n LIKE  :- \n https://lh3.googleusercontent.com/GfRWVEScEhyu_mcrN9oDSHpBQTrvqyoYng1-K1WPiczpxhIcAv-ZPeklpz9mcTn3pO8l=s2000-w2000 `);
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, `If you need download then \n type /download+<url> example /download https://lh3.ggpht.com/OtJO23U6A1iYjMxP6cj4N47F0MOlI5cuOl75WBWirSNXI2kCgBZSQwfraiBnpqTW0Pg=s2000-w2000 \n and open this link to download https://${process.env.DOMAIN_NAME} `);
    // dOWNLOAD PART
  
const url = resp;
url.replace('http://', 'https://')
   bot.sendMessage('If you notice link invailad you can see logs by using /error')

// if error

try {
    https.get(url, (res) => {
        // Image will be stored at this path
        const path = `${__dirname}/files/file.txt`;
        const filePath = fs.createWriteStream(path);
        res.pipe(filePath);
        bot.sendMessage( chatId, 'Downloading . . .');
        filePath.on('finish', () => {
            filePath.close();
            bot.sendMessage(chatId, `Download Completed Now go to this link ${process.env.DOMAIN_NAME} `);
        });
    });
    
} catch (error) {
   const chatId = msg.chat.id;
    bot.sendMessage(chatId,error);
    console.log("This is not a Link");
    fs.writeFile('error.txt', error, function(err){
        if(err){
            return console.log(err);
        }
        console.log('Created')
    });
}   
bot.sendMessage('If you notice link invailad you can see logs by using /error')

    
  });
  bot.onText(/\/tes(.+)/, (msg, match) => {
    bot.sendMessage(chatId, `If you need download then \n type /download+<url> example /download https://lh3.ggpht.com/OtJO23U6A1iYjMxP6cj4N47F0MOlI5cuOl75WBWirSNXI2kCgBZSQwfraiBnpqTW0Pg=s2000-w2000 \n and open this link to download https://${process.env.DOMAIN_NAME} \n i am downaa `);
  });

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
   
    // send a message to the chat acknowledging receipt of their message
  try {
   const docsa = 'error.txt'
    bot.sendDocument(chatId,docsa)
  } catch (error) {
    console.log(error)
  }  
    bot.sendMessage(chatId, 'NOTE - IF ERROR I SEND A ERROR FILE READ \n If not enjoy');
  });