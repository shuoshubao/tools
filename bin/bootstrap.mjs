import { writeFileSync } from 'fs'
import { removeSync, ensureFileSync } from 'fs-extra/esm'
import fetch from 'node-fetch'

removeSync('lib')

const fetchGithubRepo = path => {
  const url = ['https://api.github.com/repos/shuoshubao/nbfe/contents/packages/tools', path].join('/')
  return fetch(url, {
    headers: {
      Authorization: 'Bearer OAUTH-TOKEN'
    }
  }).then(res => res.json())
}

const fetchFileContent = async (filename, filepath) => {
  console.time(filename)
  const { content } = await fetchGithubRepo(filename)
  writeFileSync(filepath, Buffer.from(content, 'base64').toString())
  console.timeEnd(filename)
}

const fetchLibs = async () => {
  const list = await fetchGithubRepo('lib')
  for (const { name } of list) {
    const filepath = `lib/${name}`
    ensureFileSync(filepath)
    await fetchFileContent(filepath, filepath)
  }
}

fetchFileContent('CHANGELOG.md', 'src/CHANGELOG.md')
fetchLibs()
