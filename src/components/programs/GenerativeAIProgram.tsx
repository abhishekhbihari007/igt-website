import React from 'react';
import ProgramTemplate from '../ProgramTemplate';

const GenerativeAIProgram: React.FC = () => {
  const programData = {
    title: "Master Program in Generative AI",
    description: "In-depth training in building, training, and deploying generative models like Large Language Models (LLMs), GANs, Diffusion Models, and Transformer-based systems. Designed for the future of AI-driven content creation, automation, and intelligence.",
    duration: "12 Months",
    overview: "The Master's Program in Generative AI offers in-depth training in building, training, and deploying generative models like Large Language Models (LLMs), GANs, Diffusion Models, and Transformer-based systems. Designed for the future of AI-driven content creation, automation, and intelligence, this program combines theory and hands-on development using cutting-edge technologies.",
    careerOpportunities: [
      "Generative AI Engineer",
      "LLM Developer / NLP Scientist",
      "AI Research Scientist",
      "Data Scientist (AI/ML focus)",
      "Product Engineer – Conversational AI",
      "AI Consultant / Prompt Engineer",
      "Startup Founder in Creative AI / EdTech / HealthTech"
    ],
    keyAreas: [
      "Transformer Architectures (GPT, BERT, T5)",
      "Large Language Models & Fine-Tuning",
      "Text, Image, Audio, and Video Generation",
      "GANs and Diffusion Models",
      "Ethics, Bias, and Explainability in Generative AI",
      "Multimodal AI and Human-AI Interaction",
      "Prompt Engineering and Retrieval-Augmented Generation (RAG)"
    ],
    semester1: [
      "Introduction to Deep Learning - ANNs, CNNs, RNNs, PyTorch/TensorFlow basics",
      "Transformers & Attention Mechanisms - Encoder-decoder, self-attention, positional encoding",
      "Natural Language Processing - Tokenization, word embeddings, BERT, GPT architecture",
      "Generative Adversarial Networks (GANs) - Generator-discriminator models, DCGANs, conditional GANs",
      "Practical Lab I - Text generation, GAN image synthesis, HuggingFace fine-tuning"
    ],
    semester2: [
      "Large Language Models & Fine-Tuning - LLM APIs, parameter-efficient fine-tuning, instruction tuning",
      "Diffusion & Multimodal Models - Denoising models, DALL·E, Stable Diffusion, CLIP, Whisper",
      "Prompt Engineering & RAG Systems - Prompt types, chaining, vector databases, LangChain",
      "Ethics and Safety in GenAI - Bias, hallucinations, responsible deployment, governance",
      "Capstone Project - Build a GenAI app (chatbot, image AI, audio assistant, etc.)"
    ]
  };

  return <ProgramTemplate programData={programData} />;
};

export default GenerativeAIProgram;
