const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "/";

client.login("NTk5ODUzMDE2Mjk1ODAwODMz.XS2Qwg.OL55DaPhJAJupaafr9AOFB8yfuA");

client.on("message", message =>{
    if (!message.guild) return
    if (message.content[0] === prefix){
        let splitMessage = message.content.split(" ");
        if (splitMessage[0] === prefix + "dés"){
            
        }
    }
})

client.on('message', message=>{
    if(message.content[0] === prefix){
        if(message.content === prefix + 'serveur-mc'){
            message.channel.send({embed: {
                color: 3319145,
                description: 'Voici les infos concernant le serveur minecraft moddé!',
                fields:[{
                    name: 'Installation Twitch',
                    value:'Pour pouvoir nous rejoindre il te faudra télécharger l\'applicaiton Twitch via [ce lien](https://desktop.twitchsvc.net/installer/windows/TwitchSetup.exe?context=[usher-93200152]).' 
                },
                {
                    name: 'Installation ModPack',
                    value: 'Pour trouver le modPack aller dans **MODS / MINECRAFT / PARCOURIR LES PACKS DE MODS** et vous devez chercher **Enigmatica 2**. Prenez la version standard.'
                },
                {
                    name: 'Quelques petits réglages',
                    value: 'Dirigiez vous dans les paramètres (*au niveau de votre avatar en haut à droite*), rendez vous dans l\'onglet **Minecraft**, puis dans "Lanceur" et changer "Lanceur d\'origine" pour "Lanceur JAR". \n Puis aller dans les "Paramètres Java" et changer la RAM alloués en fonction de la puissance de votre ordinateur.'
                },
                {
                    name: 'Premier lancement',
                    value: 'Vous pouvez maintenant lancer le modpack depuis **MODS / MINECRAFT / MES PACKS DE MODS**. Le lanceur va s\'ouvrir mais n\'aura pas le profil **Enigmatica 2**. Il faut le **RELANCER**.'
                },
                {
                    name: 'On peut jouer!',
                    value: 'Maintenant que tout est installé, vous pouvez vous connecter sur le serveur en allant dans l\'onglet "Multijouer" en tapant l\'adresse ip suivante: ___newcal.minesr.com___' 
                }]
            }})
        }
    }
})
