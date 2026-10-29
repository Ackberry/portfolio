export const contributions = [
  {
    name: 'ferret-scan',
    organization: 'AWS Labs',
    url: 'https://github.com/awslabs/ferret-scan/pull/836',
    pullRequests: [
      {
        description: 'isolated PR checklist logs per run to prevent concurrent runs from overwriting output',
        number: 836,
        url: 'https://github.com/awslabs/ferret-scan/pull/836',
      },
    ],
  },
  {
    name: 'Kubernetes History Inspector',
    organization: 'Google Cloud Platform',
    url: 'https://github.com/GoogleCloudPlatform/khi',
    pullRequests: [
      {
        description: 'unified MCP workbench pagination defaults and ID formatting',
        number: 1186,
        url: 'https://github.com/GoogleCloudPlatform/khi/pull/1186',
      },
      {
        description: 'standardized klog parsing and reconstructed full log lines for control plane logs',
        number: 1162,
        url: 'https://github.com/GoogleCloudPlatform/khi/pull/1162',
      },
      {
        description: 'added local file-input support to Job-mode CLI generation and execution',
        number: 829,
        url: 'https://github.com/GoogleCloudPlatform/khi/pull/829',
      },
    ],
  },
  {
    name: 'go-github',
    organization: 'Google',
    url: 'https://github.com/google/go-github/pull/4379',
    pullRequests: [
      {
        description: 'added organization-level Copilot Spaces CRUD endpoints',
        number: 4379,
        url: 'https://github.com/google/go-github/pull/4379',
      },
    ],
  },
  {
    name: 'Pipeline',
    organization: 'Tekton',
    url: 'https://github.com/tektoncd/pipeline/pull/10275',
    pullRequests: [
      {
        description: 'documented StepAction support, catalog requirements, and Hub Resolver examples',
        number: 10275,
        url: 'https://github.com/tektoncd/pipeline/pull/10275',
      },
    ],
  },
] as const
