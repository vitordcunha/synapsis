# 📁 Estrutura do Projeto - Synapsis

## 🏗️ Organização do Código

### Estrutura de Pastas

```
src/
├── app/
│   └── page.tsx                    # Página principal (limpa e organizada)
└── components/
    ├── sections/                   # Seções da página principal
    │   ├── HeroSection.tsx         # Seção Hero/Principal
    │   ├── HowItWorksSection.tsx   # Seção "Como Funciona" (4 passos)
    │   └── PricingSection.tsx      # Seção de Preços
    └── ui/                         # Componentes UI reutilizáveis
        ├── cover.tsx
        ├── floating-navbar.tsx
        └── hover-border-gradient.tsx
```

## 📋 Descrição dos Componentes

### 🏠 `src/app/page.tsx`

- **Propósito**: Página principal limpa e organizada
- **Responsabilidades**:
  - Layout principal da aplicação
  - Header com logo e botão de contato
  - Navegação flutuante
  - Orquestração das seções principais

### 🎯 `src/components/sections/HeroSection.tsx`

- **Propósito**: Seção principal/hero da landing page
- **Conteúdo**:
  - Título principal com efeito Cover
  - Subtítulo descritivo
  - Call-to-action principal
- **Características**: Gradiente de texto, animações suaves

### ⚙️ `src/components/sections/HowItWorksSection.tsx`

- **Propósito**: Seção explicativa do processo de 4 passos
- **Conteúdo**:
  - **Passo 1**: Diagnóstico (tema azul)
  - **Passo 2**: Estratégia (tema amarelo)
  - **Passo 3**: Implementação (tema verde)
  - **Passo 4**: Resultados (tema roxo)
- **Características**:
  - Animações avançadas em cada card
  - Ilustrações interativas
  - Hover effects com cores temáticas
  - Design responsivo (1-4 colunas)

### 💰 `src/components/sections/PricingSection.tsx`

- **Propósito**: Seção de planos de pagamento
- **Conteúdo**:
  - **Setup & Diagnóstico**: Taxa única (R$ 1.000 - R$ 20.000)
  - **Plano Básico**: R$ 990/mês
  - **Plano Profissional**: R$ 2.490/mês (destaque "Mais Popular")
  - **Taxa por Uso Excedente**: R$ 0,20 por transação extra
- **Características**:
  - Cards com hover effects
  - Cores temáticas por plano
  - Design responsivo
  - CTAs claros

## 🎨 Design System

### Cores Temáticas

- **Diagnóstico**: Azul (`blue-500`, `blue-400`)
- **Estratégia**: Amarelo (`yellow-500`, `yellow-400`)
- **Implementação**: Verde (`green-500`, `green-400`)
- **Resultados**: Roxo (`purple-500`, `purple-400`)

### Animações

- **Pulse**: Para elementos que representam atividade/dados
- **Bounce**: Para indicadores de crescimento
- **Hover Effects**: Lift, glow, scale transforms
- **Staggered Delays**: Para sequência visual fluida

## 🔧 Tecnologias Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom components + Aceternity UI
- **Icons**: Tabler Icons
- **Animations**: CSS Transitions + Tailwind animations

## 📱 Responsividade

- **Mobile First**: Design responsivo iniciando pelo mobile
- **Breakpoints**:
  - `sm`: ≥640px
  - `md`: ≥768px (2 colunas no How It Works)
  - `lg`: ≥1024px (4 colunas no How It Works, 3 no Pricing)
  - `xl`: ≥1280px

## 🚀 Benefícios da Organização

### ✅ Vantagens

1. **Manutenibilidade**: Cada seção é independente
2. **Reusabilidade**: Componentes podem ser reutilizados
3. **Testabilidade**: Cada seção pode ser testada isoladamente
4. **Performance**: Possibilidade de lazy loading por seção
5. **Colaboração**: Desenvolvedores podem trabalhar em seções diferentes
6. **Escalabilidade**: Fácil adicionar novas seções

### 🔄 Próximos Passos

- Adicionar testes unitários por componente
- Implementar lazy loading para seções
- Criar storybook para documentação visual
- Adicionar animações mais avançadas (Framer Motion)
- Implementar analytics por seção
