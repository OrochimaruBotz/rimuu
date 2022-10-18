let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, numberowner2, nameowner2, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
