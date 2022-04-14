const inquirer = require('inquirer')
const { log } = require('../utils/log')

module.exports = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'id',
          message: 'please input id of type-challenges',
        },
        {
          type: 'input',
          name: 'en',
          message: 'please input en-title of type-challenges',
        },
        {
          type: 'input',
          name: 'zh',
          message: 'please input zh-title of type-challenges',
        },
        {
          type: 'list',
          name: 'difficulty',
          message: 'Please select difficulty',
          default: 'easy',
          choices: [
            {
              name: 'easy',
              value: 'easy',
            },
            {
              name: 'medium',
              value: 'medium',
            },
            {
              name: 'hard',
              value: 'hard',
            },
          ],
        },
      ])
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        log(err.message || err.msg, 'red')
        reject(err)
      })
  })
}
