const fs = require('fs')
const path = require('path')
const { log } = require('../utils/log')

const update = ({ id, en, zh, difficulty }) => {
  en = en.replace(/\s/g, '')
  if (createProject(en)) {
    fs.writeFileSync(
      `src/${en}/template.ts`,
      '',
    )

    fs.writeFileSync(
      `src/${en}/test-cases.ts`,
      '',
    )

    fs.writeFileSync(
      `src/${en}/README.md`,
      `# ${zh}\r\n\r\nfor example\r\n\r\n\`\`\`ts\r\n\r\n\`\`\``,
    )

    const challenges = updateDataJson({
      id,
      en,
      zh,
      difficulty,
    })

    updateMarkdown(challenges)
    return true
  }
  return false
}

const updateDataJson = ({ id, en, zh, difficulty }) => {
  const challenges = JSON.parse(fs.readFileSync('./public/challenges.json'))
  challenges.push({
    id,
    en,
    zh,
    difficulty,
    path: `./src/${en}/README.md`,
  })
  challenges.sort((a, b) => a.id - b.id)
  fs.writeFileSync('./public/challenges.json', JSON.stringify(challenges, null, 2))
  return challenges
}

const updateMarkdown = (challenges) => {
  let md = '<h1>CHALLENGES</h1>'

  const easy = []
  const medium = []
  const hard = []
  challenges.forEach(challenge => {
    switch (challenge.difficulty) {
      case 'easy':
        easy.push(challenge)
        break
      case 'medium':
        medium.push(challenge)
        break
      case 'hard':
        hard.push(challenge)
        break
      default:
        break
    }
  })

  md += `<br><img src="https://img.shields.io/badge/easy-${easy.length}-7aad0c" alt="${easy.length}"/><br>`
  easy.forEach(title => {
    const alias = `${title.id}_${title.zh.replace(/-/g, '_')}`
    md += `<a href="${title.path}"><img src="https://img.shields.io/badge/${alias}-7aad0c" alt="${title.zh}" /></a> `
  })

  md += `<br><br><img src="https://img.shields.io/badge/medium-${medium.length}-d9901a" alt="${medium.length}"/><br>`
  medium.forEach(title => {
    const alias = `${title.id}_${title.zh.replace(/-/g, '_')}`
    md += `<a href="${title.path}"><img src="https://img.shields.io/badge/${alias}-7aad0c" alt="13" alt="${title.zh}"/></a> `
  })

  md += `<br><br><img src="https://img.shields.io/badge/hard-${hard.length}-de3d37" alt="${hard.length}"/><br>`
  hard.forEach(title => {
    const alias = `${title.id}_${title.zh.replace(/-/g, '_')}`
    md += `<a href="${title.path}"><img src="https://img.shields.io/badge/${alias}-7aad0c" alt="${title.zh}" /></a> `
  })

  fs.writeFileSync('./README.md', md)
}

const createProject = (en) => {
  if (checkHasPath(`src/${en}`)) {
    log('Duplicate path exists', 'red')
    return false
  }
  fs.mkdirSync(`src/${en}`)
  return true
}

const checkHasPath = (path) => {
  try {
    fs.accessSync(getPath(path), fs.constants.F_OK)
    return true
  }
  catch (err) {
    return false
  }
}

const getPath = (p) => {
  return path.resolve(path.resolve(__dirname, '../../'), p)
}

module.exports = update
