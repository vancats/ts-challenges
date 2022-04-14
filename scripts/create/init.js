const clear = require('clear')
const { figletLog } = require('../utils/log')
const inquirer = require('./inquirer')
const update = require('./update')

module.exports = async() => {
  clear()
  await figletLog('**CREATE**')
  const { id, en, zh, difficulty } = await inquirer()
  const isUpdate = update({ id, en, zh, difficulty })
  isUpdate && figletLog('**SUCCESS**')
}
