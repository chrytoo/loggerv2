import { sendToLog } from '../system/modlog'

module.exports = {
  name: 'voiceChannelJoin',
  type: 'voiceChannelJoin',
  toggleable: true,
  run: function (bot, raw) {
    let channel = raw.channel
    let member = raw.member
    sendToLog(this.name, bot, {
      guildID: channel.guild.id,
      type: 'User Joined Voice Channel',
      changed: `► User: **${member.username}#${member.discriminator}**\n► User ID: **${member.id}**\n► Channel: **${channel.name}**\n► Channel ID: **${channel.id}**`,
      color: 8351671,
      against: member,
      simple: `**${member.username}#${member.discriminator}** joined voice channel: **${channel.name}**.`
    })
  }
}
