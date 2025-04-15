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

// Logos (centralized for easier updates)
// Note: Some logos are placeholders or best guesses and might need updating for accuracy.
const LOGOS = {
  OPENAI:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
  ANTHROPIC:
    "https://storage.googleapis.com/sourcegraph-assets/anthropic-logo.png",
  FIREWORKS: "https://avatars.githubusercontent.com/u/133895017?s=200&v=4",
  DEEPINFRA: "https://deepinfra.com/images/logo_secondary.svg",
  GOOGLE:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  MISTRAL: "https://mistral.ai/images/logo-dark.svg",
  COHERE:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cohere_logo.svg/2560px-Cohere_logo.svg.png",
  PERPLEXITY:
    "https://seeklogo.com/images/P/perplexity-ai-logo-E611B5751F-seeklogo.com.png",
  OPENCHAT: "https://openchat.so/favicon.ico", // Placeholder - might need better logo
  DEEPSEEK: "https://deepseek.com/assets/images/logo.svg",
  GROQ: "https://groq.com/wp-content/uploads/2023/02/groq-inc-logo-grey.svg",
  CLOUDFLARE:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cloudflare_logo.svg/2560px-Cloudflare_logo.svg.png",
  LYNN: "https://lynn.ai/favicon.ico", // Placeholder - might need better logo
  REPLICATE: "https://replicate.com/static/logo.svg",
  AWS: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
  META: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
};

// LLM models data based on the provided image
// Quality and Knowledge data filled based on image where available, inferred or marked Unknown otherwise.
export const llmModels: LLMModel[] = [
  // GPT-4.1 Models
  {
    id: "gpt-4.1",
    name: "gpt-4.1",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 100,
    context: "1M",
    inputPrice: 2.0,
    outputPrice: 8.0,
    knowledge: "2024-03",
  },
  {
    id: "gpt-4.1-mini",
    name: "gpt-4.1-mini",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 85,
    context: "1M",
    inputPrice: 0.4,
    outputPrice: 1.6,
    knowledge: "2024-03",
  },
  {
    id: "gpt-4.1-nano",
    name: "gpt-4.1-nano",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 75,
    context: "1M",
    inputPrice: 0.1,
    outputPrice: 0.4,
    knowledge: "2024-03",
  },
  // OpenAI
  {
    id: "gpt-4o",
    name: "gpt-4o",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 100,
    context: "128K",
    inputPrice: 5,
    outputPrice: 15,
    knowledge: "2023-10",
  },
  {
    id: "gpt-4o-2024-08-06",
    name: "gpt-4o-2024-08-06",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 100,
    context: "128K",
    inputPrice: 2.5,
    outputPrice: 10,
    knowledge: "2023-10",
  },
  {
    id: "gpt-4o-mini",
    name: "gpt-4o-mini",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 85,
    context: "128K",
    inputPrice: 0.15,
    outputPrice: 0.6,
    knowledge: "2023-10",
  },
  {
    id: "gpt-4o-2024-05-13",
    name: "gpt-4o-2024-05-13",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 100,
    context: "128K",
    inputPrice: 5,
    outputPrice: 15,
    knowledge: "2023-10",
  },
  {
    id: "gpt-4-turbo-2024-04-09",
    name: "gpt-4-turbo-2024-04-09",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 94,
    context: "128K",
    inputPrice: 10,
    outputPrice: 30,
    knowledge: "2023-12",
  },
  {
    id: "gpt-4",
    name: "gpt-4",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 84,
    context: "8K",
    inputPrice: 30,
    outputPrice: 60,
    knowledge: "2021-09",
  },
  {
    id: "gpt-4-32k",
    name: "gpt-4-32k",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 84,
    context: "32K",
    inputPrice: 60,
    outputPrice: 120,
    knowledge: "2021-09",
  }, // Quality inferred
  {
    id: "gpt-3.5-turbo-0125",
    name: "gpt-3.5-turbo-0125",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 67,
    context: "16K",
    inputPrice: 0.5,
    outputPrice: 1.5,
    knowledge: "2021-09",
  },
  {
    id: "gpt-3.5-turbo-instruct",
    name: "gpt-3.5-turbo-instruct",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 60,
    context: "4K",
    inputPrice: 1.5,
    outputPrice: 2,
    knowledge: "2021-09",
  }, // Knowledge inferred

  // Anthropic
  {
    id: "claude-3-opus",
    name: "claude-3-opus",
    provider: { name: "Anthropic", logo: LOGOS.ANTHROPIC },
    quality: 100,
    context: "200K",
    inputPrice: 15,
    outputPrice: 75,
    knowledge: "2023-08",
  },
  {
    id: "claude-3-sonnet",
    name: "claude-3-sonnet",
    provider: { name: "Anthropic", logo: LOGOS.ANTHROPIC },
    quality: 85,
    context: "200K",
    inputPrice: 3,
    outputPrice: 15,
    knowledge: "2023-08",
  },
  {
    id: "claude-3-haiku",
    name: "claude-3-haiku",
    provider: { name: "Anthropic", logo: LOGOS.ANTHROPIC },
    quality: 78,
    context: "200K",
    inputPrice: 0.25,
    outputPrice: 1.25,
    knowledge: "2023-08",
  },
  {
    id: "claude-2.1",
    name: "claude-2.1",
    provider: { name: "Anthropic", logo: LOGOS.ANTHROPIC },
    quality: 66,
    context: "200K",
    inputPrice: 8,
    outputPrice: 24,
    knowledge: "2023-08",
  }, // Knowledge inferred
  {
    id: "claude-2.0",
    name: "claude-2.0",
    provider: { name: "Anthropic", logo: LOGOS.ANTHROPIC },
    quality: 72,
    context: "100K",
    inputPrice: 8,
    outputPrice: 24,
    knowledge: "2023-08",
  }, // Knowledge inferred
  {
    id: "claude-instant-1.2",
    name: "claude-instant-1.2",
    provider: { name: "Anthropic", logo: LOGOS.ANTHROPIC },
    quality: 65,
    context: "100K",
    inputPrice: 0.8,
    outputPrice: 2.4,
    knowledge: "2023-08",
  }, // Knowledge inferred

  // Fireworks
  {
    id: "llama-3.1-405b-instruct-fw",
    name: "llama-3.1-405b-instruct",
    provider: { name: "Fireworks", logo: LOGOS.FIREWORKS },
    quality: 100,
    context: "128K",
    inputPrice: 3,
    outputPrice: 3,
    knowledge: "Unknown",
  },

  // DeepInfra
  {
    id: "llama-3.1-70b-instruct-di",
    name: "llama-3.1-70b-instruct",
    provider: { name: "DeepInfra", logo: LOGOS.DEEPINFRA },
    quality: 95,
    context: "128K",
    inputPrice: 0.52,
    outputPrice: 0.75,
    knowledge: "Unknown",
  },
  {
    id: "llama-3.1-8b-instruct-di",
    name: "llama-3.1-8b-instruct",
    provider: { name: "DeepInfra", logo: LOGOS.DEEPINFRA },
    quality: 66,
    context: "128K",
    inputPrice: 0.09,
    outputPrice: 0.09,
    knowledge: "Unknown",
  },
  {
    id: "llama-3-70b-instruct-di",
    name: "llama-3-70b-instruct",
    provider: { name: "DeepInfra", logo: LOGOS.DEEPINFRA },
    quality: 88,
    context: "8K",
    inputPrice: 0.59,
    outputPrice: 0.79,
    knowledge: "2023-12",
  },
  {
    id: "llama-3-8b-instruct-di",
    name: "llama-3-8b-instruct",
    provider: { name: "DeepInfra", logo: LOGOS.DEEPINFRA },
    quality: 58,
    context: "8K",
    inputPrice: 0.08,
    outputPrice: 0.08,
    knowledge: "2023-12",
  },
  {
    id: "gemma-7b-it-di",
    name: "gemma-7b-it",
    provider: { name: "DeepInfra", logo: LOGOS.DEEPINFRA },
    quality: 59,
    context: "8K",
    inputPrice: 0.07,
    outputPrice: 0.07,
    knowledge: "2024-02",
  },

  // Google
  {
    id: "gemini-pro",
    name: "gemini-pro",
    provider: { name: "Google", logo: LOGOS.GOOGLE },
    quality: 66,
    context: "32K",
    inputPrice: 0.5,
    outputPrice: 1.5,
    knowledge: "2023-04",
  },
  {
    id: "gemini-1.5-pro",
    name: "gemini-1.5-pro",
    provider: { name: "Google", logo: LOGOS.GOOGLE },
    quality: 88,
    context: "1M",
    inputPrice: 3.5,
    outputPrice: 10.5,
    knowledge: "2023-04",
  }, // Assuming price per 1M tokens from image text ($3.5/$10.5)
  {
    id: "gemini-flash-1.5",
    name: "gemini-flash-1.5",
    provider: { name: "Google", logo: LOGOS.GOOGLE },
    quality: 68,
    context: "2.8M",
    inputPrice: 0.075,
    outputPrice: 0.3,
    knowledge: "2023-04",
  }, // Context appears as 2.8M? Check source. Price inferred from Gemini Pro ratio, may be wrong.

  // Mistral
  {
    id: "mistral-large",
    name: "mistral-large",
    provider: { name: "Mistral", logo: LOGOS.MISTRAL },
    quality: 84,
    context: "32K",
    inputPrice: 8,
    outputPrice: 24,
    knowledge: "2023-12",
  },
  {
    id: "mistral-medium",
    name: "mistral-medium",
    provider: { name: "Mistral", logo: LOGOS.MISTRAL },
    quality: 76,
    context: "32K",
    inputPrice: 2.7,
    outputPrice: 8.1,
    knowledge: "2023-12",
  },
  {
    id: "mistral-small",
    name: "mistral-small",
    provider: { name: "Mistral", logo: LOGOS.MISTRAL },
    quality: 73,
    context: "32K",
    inputPrice: 2,
    outputPrice: 6,
    knowledge: "2023-12",
  },
  {
    id: "mistral-8x7b",
    name: "mistral-8x7b",
    provider: { name: "Mistral", logo: LOGOS.MISTRAL },
    quality: 68,
    context: "32K",
    inputPrice: 0.7,
    outputPrice: 0.7,
    knowledge: "2023-12",
  }, // Knowledge inferred
  {
    id: "mistral-7b",
    name: "mistral-7b",
    provider: { name: "Mistral", logo: LOGOS.MISTRAL },
    quality: 40,
    context: "32K",
    inputPrice: 0.25,
    outputPrice: 0.25,
    knowledge: "2023-12",
  }, // Knowledge inferred

  // Cohere
  {
    id: "command-r-plus",
    name: "command-r-plus",
    provider: { name: "Cohere", logo: LOGOS.COHERE },
    quality: 80,
    context: "128K",
    inputPrice: 3,
    outputPrice: 15,
    knowledge: "2024-03",
  },
  {
    id: "command-r",
    name: "command-r",
    provider: { name: "Cohere", logo: LOGOS.COHERE },
    quality: 67,
    context: "4K",
    inputPrice: 0.5,
    outputPrice: 1.5,
    knowledge: "2024-03",
  },
  {
    id: "command",
    name: "command",
    provider: { name: "Cohere", logo: LOGOS.COHERE },
    quality: 45,
    context: "4K",
    inputPrice: 0.3,
    outputPrice: 0.6,
    knowledge: "Unknown",
  }, // Quality inferred

  // Perplexity
  {
    id: "pplx-70b-online",
    name: "pplx-70b-online",
    provider: { name: "Perplexity", logo: LOGOS.PERPLEXITY },
    quality: 45,
    context: "4K",
    inputPrice: 1,
    outputPrice: 1,
    knowledge: "Online",
  }, // Quality inferred
  {
    id: "pplx-7b-online",
    name: "pplx-7b-online",
    provider: { name: "Perplexity", logo: LOGOS.PERPLEXITY },
    quality: 35,
    context: "4K",
    inputPrice: 0.2,
    outputPrice: 0.2,
    knowledge: "Online",
  }, // Quality inferred

  // OpenChat
  {
    id: "openchat-7b",
    name: "openchat-7b",
    provider: { name: "OpenChat", logo: LOGOS.OPENCHAT },
    quality: 56,
    context: "8K",
    inputPrice: 0.13,
    outputPrice: 0.13,
    knowledge: "Unknown",
  },

  // DeepSeek
  {
    id: "deepseek-v2",
    name: "deepseek-v2",
    provider: { name: "DeepSeek", logo: LOGOS.DEEPSEEK },
    quality: 60,
    context: "32K",
    inputPrice: 0.14,
    outputPrice: 0.28,
    knowledge: "Unknown",
  }, // Quality inferred

  // Groq
  {
    id: "llama-3-70b-groq",
    name: "llama-3-70b",
    provider: { name: "Groq", logo: LOGOS.GROQ },
    quality: 88,
    context: "8K",
    inputPrice: 0.59,
    outputPrice: 0.79,
    knowledge: "2023-12",
  },
  {
    id: "llama-3-8b-groq",
    name: "llama-3-8b",
    provider: { name: "Groq", logo: LOGOS.GROQ },
    quality: 58,
    context: "8K",
    inputPrice: 0.05,
    outputPrice: 0.1,
    knowledge: "2023-12",
  },
  {
    id: "llama-2-70b-groq",
    name: "llama-2-70b",
    provider: { name: "Groq", logo: LOGOS.GROQ },
    quality: 52,
    context: "4K",
    inputPrice: 0.64,
    outputPrice: 0.8,
    knowledge: "2023-07",
  }, // Knowledge inferred
  {
    id: "llama-2-7b-groq",
    name: "llama-2-7b",
    provider: { name: "Groq", logo: LOGOS.GROQ },
    quality: 27,
    context: "2K",
    inputPrice: 0.1,
    outputPrice: 0.1,
    knowledge: "2023-07",
  }, // Knowledge inferred
  {
    id: "mistral-8x7b-groq",
    name: "mistral-8x7b",
    provider: { name: "Groq", logo: LOGOS.GROQ },
    quality: 88,
    context: "32K",
    inputPrice: 0.27,
    outputPrice: 0.27,
    knowledge: "2023-12",
  }, // Reused quality from llama-3-70b, check source. Knowledge inferred.
  {
    id: "gemma-7b-groq",
    name: "gemma-7b",
    provider: { name: "Groq", logo: LOGOS.GROQ },
    quality: 59,
    context: "8K",
    inputPrice: 0.1,
    outputPrice: 0.1,
    knowledge: "2024-02",
  }, // Knowledge inferred

  // Cloudflare
  {
    id: "llama-2-7b-chat-fp16-cf",
    name: "llama-2-7b-chat-fp16",
    provider: { name: "Cloudflare", logo: LOGOS.CLOUDFLARE },
    quality: 30,
    context: "3K",
    inputPrice: 0.56,
    outputPrice: 0.66,
    knowledge: "2023-07",
  }, // Quality inferred
  {
    id: "llama-2-7b-chat-int8-cf",
    name: "llama-2-7b-chat-int8",
    provider: { name: "Cloudflare", logo: LOGOS.CLOUDFLARE },
    quality: 30,
    context: "2K",
    inputPrice: 0.16,
    outputPrice: 0.24,
    knowledge: "2023-07",
  }, // Quality inferred
  {
    id: "mistral-7b-instruct-cf",
    name: "mistral-7b-instruct",
    provider: { name: "Cloudflare", logo: LOGOS.CLOUDFLARE },
    quality: 32,
    context: "32K",
    inputPrice: 0.11,
    outputPrice: 0.19,
    knowledge: "2023-12",
  }, // Quality inferred

  // Lynn
  {
    id: "llama-3-soliloquy-8b-lynn",
    name: "llama-3-soliloquy-8b",
    provider: { name: "Lynn", logo: LOGOS.LYNN },
    quality: 30,
    context: "24K",
    inputPrice: 0.1,
    outputPrice: 0.1,
    knowledge: "2023-12",
  }, // Quality inferred

  // Replicate
  {
    id: "meta-llama-3-70b-instruct-rep",
    name: "meta-llama-3-70b-instruct",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 80,
    context: "8K",
    inputPrice: 0.65,
    outputPrice: 2.75,
    knowledge: "2023-12",
  }, // Quality inferred
  {
    id: "meta-llama-3-8b-instruct-rep",
    name: "meta-llama-3-8b-instruct",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 50,
    context: "8K",
    inputPrice: 0.05,
    outputPrice: 0.25,
    knowledge: "2023-12",
  }, // Quality inferred
  {
    id: "llama-2-13b-rep",
    name: "llama-2-13b",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 40,
    context: "4K",
    inputPrice: 0.1,
    outputPrice: 0.5,
    knowledge: "2023-07",
  }, // Quality inferred
  {
    id: "llama-2-13b-chat-rep",
    name: "llama-2-13b",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 40,
    context: "4K",
    inputPrice: 0.1,
    outputPrice: 0.5,
    knowledge: "2023-07",
  }, // Name is duplicate, check if this is intended. Quality inferred.
  {
    id: "llama-2-7b-rep",
    name: "llama-2-7b",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 30,
    context: "4K",
    inputPrice: 0.05,
    outputPrice: 0.25,
    knowledge: "2023-07",
  }, // Quality inferred
  {
    id: "llama-2-70b-rep",
    name: "llama-2-70b",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 52,
    context: "4K",
    inputPrice: 0.65,
    outputPrice: 2.75,
    knowledge: "2023-07",
  }, // Quality inferred
  {
    id: "mistral-7b-v0.1-rep",
    name: "mistral-7b-v0.1",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 30,
    context: "32K",
    inputPrice: 0.05,
    outputPrice: 0.25,
    knowledge: "2023-12",
  }, // Quality inferred
  {
    id: "mistral-7b-instruct-v0.2-rep",
    name: "mistral-7b-instruct-v0.2",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 30,
    context: "32K",
    inputPrice: 0.05,
    outputPrice: 0.25,
    knowledge: "2023-12",
  }, // Quality inferred
  {
    id: "mixtral-8x7b-instruct-v0.1-rep",
    name: "mixtral-8x7b-instruct-v0.1",
    provider: { name: "Replicate", logo: LOGOS.REPLICATE },
    quality: 80,
    context: "32K",
    inputPrice: 0.3,
    outputPrice: 1,
    knowledge: "2023-12",
  }, // Quality inferred

  // AWS Bedrock (assuming AWS prefix for name where applicable)
  {
    id: "jurassic-2-ultra-aws",
    name: "jurassic-2-ultra",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 70,
    context: "32K",
    inputPrice: 18.8,
    outputPrice: 18.8,
    knowledge: "Unknown",
  }, // Quality inferred
  {
    id: "jurassic-2-mid-aws",
    name: "jurassic-2-mid",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 60,
    context: "32K",
    inputPrice: 12.5,
    outputPrice: 12.5,
    knowledge: "Unknown",
  }, // Quality inferred
  {
    id: "titan-text-lite-aws",
    name: "titan-text-lite",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 50,
    context: "32K",
    inputPrice: 0.3,
    outputPrice: 0.4,
    knowledge: "Unknown",
  }, // Quality inferred
  {
    id: "titan-text-express-aws",
    name: "titan-text-express",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 55,
    context: "32K",
    inputPrice: 0.8,
    outputPrice: 1.6,
    knowledge: "Unknown",
  }, // Quality inferred
  {
    id: "claude-instant-aws",
    name: "claude-instant",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 65,
    context: "32K",
    inputPrice: 0.8,
    outputPrice: 2.4,
    knowledge: "2023-08",
  }, // Knowledge inferred, context seems different than Anthropic, check source
  {
    id: "claude-3-sonnet-aws",
    name: "claude-3-sonnet",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 85,
    context: "32K",
    inputPrice: 3,
    outputPrice: 15,
    knowledge: "2023-08",
  }, // Context seems different than Anthropic, check source
  {
    id: "claude-3-haiku-aws",
    name: "claude-3-haiku",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 78,
    context: "32K",
    inputPrice: 0.25,
    outputPrice: 1.25,
    knowledge: "2023-08",
  }, // Context seems different than Anthropic, check source
  {
    id: "command-aws",
    name: "command",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 45,
    context: "32K",
    inputPrice: 1.5,
    outputPrice: 2,
    knowledge: "Unknown",
  }, // Quality inferred
  {
    id: "llama-2-chat-13b-aws",
    name: "llama-2-chat-13b",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 37,
    context: "32K",
    inputPrice: 0.75,
    outputPrice: 1,
    knowledge: "2023-07",
  }, // Quality inferred
  {
    id: "llama-2-chat-70b-aws",
    name: "llama-2-chat-70b",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 52,
    context: "32K",
    inputPrice: 1.95,
    outputPrice: 2.56,
    knowledge: "2023-07",
  }, // Quality inferred
  {
    id: "mistral-7b-aws",
    name: "mistral-7b",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 40,
    context: "32K",
    inputPrice: 0.15,
    outputPrice: 0.2,
    knowledge: "2023-12",
  }, // Knowledge inferred
  {
    id: "mistral-8x7b-aws",
    name: "mistral-8x7b",
    provider: { name: "AWS", logo: LOGOS.AWS },
    quality: 88,
    context: "32K",
    inputPrice: 0.45,
    outputPrice: 0.7,
    knowledge: "2023-12",
  }, // Knowledge inferred

  // OpenAI (Older/Preview)
  {
    id: "gpt-4-0125-preview",
    name: "gpt-4-0125-preview",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 100,
    context: "128K",
    inputPrice: 10,
    outputPrice: 30,
    knowledge: "2023-12",
  },
  {
    id: "gpt-4-1106-preview",
    name: "gpt-4-1106-preview",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 100,
    context: "128K",
    inputPrice: 10,
    outputPrice: 30,
    knowledge: "2023-04",
  },
  {
    id: "gpt-4-vision-preview",
    name: "gpt-4-vision-preview",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 100,
    context: "128K",
    inputPrice: 10,
    outputPrice: 30,
    knowledge: "2023-04",
  }, // Vision pricing might differ
  {
    id: "gpt-3.5-turbo-1106",
    name: "gpt-3.5-turbo-1106",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 60,
    context: "4K",
    inputPrice: 1,
    outputPrice: 2,
    knowledge: "2021-09",
  }, // Quality inferred
  {
    id: "gpt-3.5-turbo-0613",
    name: "gpt-3.5-turbo-0613",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 60,
    context: "4K",
    inputPrice: 1.5,
    outputPrice: 2,
    knowledge: "2021-09",
  }, // Quality inferred
  {
    id: "gpt-3.5-turbo-16k-0613",
    name: "gpt-3.5-turbo-16k-0613",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 60,
    context: "4K",
    inputPrice: 3,
    outputPrice: 4,
    knowledge: "2021-09",
  }, // Context seems wrong (16k vs 4k), check source. Quality inferred.
  {
    id: "gpt-3.5-turbo-0301",
    name: "gpt-3.5-turbo-0301",
    provider: { name: "OpenAI", logo: LOGOS.OPENAI },
    quality: 60,
    context: "4K",
    inputPrice: 1.5,
    outputPrice: 2,
    knowledge: "2021-09",
  }, // Quality inferred
];
