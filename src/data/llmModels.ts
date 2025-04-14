// Data structure for LLM model information
export interface LLMModel {
  id: string;
  name: string;
  provider: {
    name: string;
    logo: string;
  };
  quality: number;
  context: string;
  inputPrice: number;
  outputPrice: number;
  knowledge: string;
  clearRate?: string;
}

// Sample data for LLM models
export const llmModels: LLMModel[] = [
  {
    id: "gpt-4",
    name: "gpt-4",
    provider: {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
    },
    quality: 100,
    context: "128K",
    inputPrice: 10,
    outputPrice: 30,
    knowledge: "2023-12",
  },
  {
    id: "gpt-4-turbo",
    name: "gpt-4-turbo",
    provider: {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
    },
    quality: 98,
    context: "128K",
    inputPrice: 5,
    outputPrice: 15,
    knowledge: "2023-12",
  },
  {
    id: "gpt-3.5-turbo",
    name: "gpt-3.5-turbo",
    provider: {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
    },
    quality: 82,
    context: "16K",
    inputPrice: 0.5,
    outputPrice: 1.5,
    knowledge: "2023-04",
  },
  {
    id: "claude-3-opus",
    name: "claude-3-opus",
    provider: {
      name: "Anthropic",
      logo: "https://storage.googleapis.com/sourcegraph-assets/anthropic-logo.png",
    },
    quality: 99,
    context: "200K",
    inputPrice: 15,
    outputPrice: 75,
    knowledge: "2023-08",
  },
  {
    id: "claude-3-sonnet",
    name: "claude-3-sonnet",
    provider: {
      name: "Anthropic",
      logo: "https://storage.googleapis.com/sourcegraph-assets/anthropic-logo.png",
    },
    quality: 91,
    context: "200K",
    inputPrice: 3,
    outputPrice: 15,
    knowledge: "2023-08",
  },
  {
    id: "claude-3-haiku",
    name: "claude-3-haiku",
    provider: {
      name: "Anthropic",
      logo: "https://storage.googleapis.com/sourcegraph-assets/anthropic-logo.png",
    },
    quality: 85,
    context: "200K",
    inputPrice: 0.25,
    outputPrice: 1.25,
    knowledge: "2023-08",
  },
  {
    id: "mistral-large",
    name: "mistral-large",
    provider: {
      name: "Mistral AI",
      logo: "https://mistral.ai/images/logo-dark.svg",
    },
    quality: 90,
    context: "32K",
    inputPrice: 2,
    outputPrice: 6,
    knowledge: "2023-12",
  },
  {
    id: "mistral-medium",
    name: "mistral-medium",
    provider: {
      name: "Mistral AI",
      logo: "https://mistral.ai/images/logo-dark.svg",
    },
    quality: 86,
    context: "32K",
    inputPrice: 0.27,
    outputPrice: 0.81,
    knowledge: "2023-12",
  },
  {
    id: "mistral-small",
    name: "mistral-small",
    provider: {
      name: "Mistral AI",
      logo: "https://mistral.ai/images/logo-dark.svg",
    },
    quality: 78,
    context: "32K",
    inputPrice: 0.2,
    outputPrice: 0.6,
    knowledge: "2023-12",
  },
  {
    id: "llama-70b",
    name: "llama-70b",
    provider: {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
    },
    quality: 78,
    context: "4K",
    inputPrice: 0,
    outputPrice: 0,
    knowledge: "2023-07",
  },
];
