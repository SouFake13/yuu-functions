Esse pacote é destinado aqueles que querem descomplicações na hora de fazer codigos ao seu bot, de modo que facilita o codigo. Por exemplo:

Site

```js
const { kiss } = require(`yuu-functions`)

console.log(`${kiss()}`)
```

Discord.

```js
const { kiss } = require(`yuu-functions`)
const Discord = require('discord.js')

let embed = new Discord.MessageEmbed()
.setTitle(`Beijo`)
.setDescription(`${message.author} Beijou ${message}`)
.setImage(kiss())
message.reply({embeds: [embed]})
```



Methods
```js
kiss()
hug()
memes()
slap()
cuddle()
poke()
cry()
feed()
tickle()
pat()
```

Creditos: FakezinLR#9359