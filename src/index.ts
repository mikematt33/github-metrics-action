import { getInput, setFailed } from '@actions/core'

interface Input {
  token: string
  repository: string
}

const getInputs = (): Input => {
  const result = {} as Input
  result.token = getInput('token')
  result.repository = getInput('repository')
  if (result.repository.includes('/')) {
    result.repository = result.repository.split('/')[1]
  }

  return result
}

export const run = async (): Promise<void> => {
  const inputs = getInputs()
  if (!inputs.token) return setFailed('`github-token` input is required')
  console.log(`Token: ${inputs.token}`)
  console.log(`Repository: ${inputs.repository}`)
}

run()
