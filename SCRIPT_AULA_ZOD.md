# 📚 Script de Aula: Validação com Zod no Next.js

## 🎯 Objetivos da Aula
- Entender o que é Zod e por que usar validação
- Aprender a criar schemas de validação
- Integrar Zod com React Hook Form
- Implementar validação em formulários Next.js
- Garantir type safety com TypeScript

---

## 📖 PARTE 1: Introdução ao Zod (5 minutos)

### O que é Zod?
"Hoje vamos aprender sobre **Zod**, uma biblioteca de validação TypeScript-first que nos permite criar schemas de validação de forma declarativa e type-safe."

**Pontos principais:**
- Zod é uma biblioteca JavaScript/TypeScript para validação de dados
- Criada por Colin McDonnell
- TypeScript-first: gera tipos automaticamente
- Declarativa: escrevemos o que queremos validar de forma clara
- Runtime validation: valida dados em tempo de execução

### Por que validar dados?
"Antes de começar, vamos entender por que validação é importante:"

1. **Segurança**: Previne dados inválidos ou maliciosos
2. **UX**: Feedback imediato para o usuário
3. **Confiabilidade**: Garante que os dados estão no formato esperado
4. **Type Safety**: TypeScript sabe exatamente o formato dos dados

---

## 📦 PARTE 2: Instalação e Setup (3 minutos)

### Instalando as dependências
"Para usar Zod com React Hook Form, precisamos instalar três pacotes:"

```bash
npm install zod @hookform/resolvers react-hook-form
```

**Explicar cada pacote:**
- `zod`: A biblioteca de validação
- `@hookform/resolvers`: Conecta Zod com React Hook Form
- `react-hook-form`: Gerenciamento de formulários (já deve estar instalado)

---

## 🔧 PARTE 3: Criando o Schema de Validação (10 minutos)

### O que é um Schema?
"Um schema é uma descrição da estrutura e regras que nossos dados devem seguir."

### Exemplo prático: Schema de Cadastro
"Vamos criar um schema para validar um formulário de cadastro com nome e email:"

```typescript
import z from "zod";

const schema = z.object({
  nome: z.string().min(3, "O nome precisa ter pelo menos 3 letras"),
  email: z
    .string()
    .email("Email é inválido")
    .min(3, "O email precisa ter pelo menos 3 letras"),
});
```

### Explicação linha por linha:

**1. `z.object({ ... })`**
- Cria um schema para um objeto
- Define a estrutura dos dados que queremos validar

**2. `nome: z.string()`**
- Define que `nome` deve ser uma string
- `.min(3, "mensagem")` - valida que tem no mínimo 3 caracteres
- A mensagem aparece quando a validação falha

**3. `email: z.string().email().min(3)`**
- Deve ser uma string
- `.email()` - valida formato de email
- `.min(3)` - valida tamanho mínimo
- **Importante**: As validações são encadeadas e executadas em ordem

### Validações comuns do Zod:
- `z.string()` - valida strings
- `z.number()` - valida números
- `z.email()` - valida formato de email
- `z.min()` / `z.max()` - valida tamanho
- `z.optional()` - campo opcional
- `z.refine()` - validação customizada

---

## 🔗 PARTE 4: Integração com React Hook Form (8 minutos)

### Por que React Hook Form?
"React Hook Form é uma das melhores bibliotecas para gerenciar formulários em React. Quando combinamos com Zod, temos validação poderosa e type-safe."

### Configurando o formulário
"Vamos ver como integrar o schema Zod com React Hook Form:"

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. Criar o schema (já vimos)
const schema = z.object({ ... });

// 2. Inferir o tipo TypeScript do schema
type CadastroSchema = z.infer<typeof schema>;

// 3. Configurar o formulário
const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
} = useForm<CadastroSchema>({
  resolver: zodResolver(schema), // Conecta Zod com React Hook Form
});
```

### Explicação dos conceitos:

**1. `z.infer<typeof schema>`**
- **MAGIA DO TYPESCRIPT!**
- Gera automaticamente o tipo TypeScript baseado no schema
- Se mudarmos o schema, o tipo muda automaticamente
- Garante type safety em todo o código

**2. `zodResolver(schema)`**
- Conecta o schema Zod com React Hook Form
- Faz a validação acontecer automaticamente
- Retorna erros no formato que React Hook Form espera

**3. `register()`**
- Registra os campos do formulário
- Conecta o input com a validação
- Gerencia o estado do campo

**4. `errors`**
- Objeto com todos os erros de validação
- Acessamos com `errors.nome` ou `errors.email`
- Contém a mensagem que definimos no schema

---

## 🎨 PARTE 5: Implementação no Formulário (10 minutos)

### Estrutura do formulário
"Vamos ver como usar tudo isso no JSX:"

```typescript
<form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register("nome")}
    className={errors.nome ? "border-red-500" : "border-gray-300"}
  />
  {errors.nome && (
    <span className="text-red-500">{errors.nome.message}</span>
  )}
</form>
```

### Explicação:

**1. `handleSubmit(onSubmit)`**
- Envolve nossa função de submit
- **Só chama `onSubmit` se a validação passar!**
- Se houver erros, mostra os erros e não submete

**2. `{...register("nome")}`**
- Spread operator aplica todas as props necessárias
- Conecta o input com React Hook Form
- Habilita validação em tempo real

**3. Feedback visual de erros**
- Mudamos a cor da borda quando há erro
- Mostramos a mensagem de erro abaixo do campo
- `errors.nome.message` vem direto do schema Zod!

**4. `isSubmitting`**
- Estado que indica se o formulário está sendo enviado
- Útil para desabilitar botão e mostrar loading
- Previne múltiplos submits

---

## 💡 PARTE 6: Fluxo Completo de Validação (5 minutos)

### Como funciona o fluxo?

1. **Usuário digita** → React Hook Form captura
2. **Usuário tenta submeter** → `handleSubmit` intercepta
3. **Zod valida** → Verifica todas as regras do schema
4. **Se válido** → Chama `onSubmit` com dados tipados
5. **Se inválido** → Mostra erros, não submete

### Exemplo prático:

**Cenário 1: Nome com 2 letras**
- Usuário digita "Jo"
- Tenta submeter
- Zod valida: ❌ "O nome precisa ter pelo menos 3 letras"
- Erro aparece, formulário não submete

**Cenário 2: Email inválido**
- Usuário digita "teste@"
- Tenta submeter
- Zod valida: ❌ "Email é inválido"
- Erro aparece, formulário não submete

**Cenário 3: Tudo válido**
- Nome: "João" ✅
- Email: "joao@email.com" ✅
- Zod valida: ✅ Tudo certo!
- `onSubmit` é chamado com dados tipados

---

## 🚀 PARTE 7: Type Safety em Ação (5 minutos)

### A mágica do TypeScript
"Uma das melhores coisas do Zod é a integração com TypeScript:"

```typescript
// O tipo é gerado automaticamente do schema!
type CadastroSchema = z.infer<typeof schema>;
// Resultado: { nome: string; email: string; }

// Agora temos type safety em toda a função
async function onSubmit(params: CadastroSchema) {
  // TypeScript sabe que params.nome é string
  // TypeScript sabe que params.email é string
  // Se tentarmos acessar params.idade → ERRO!
}
```

### Benefícios:
- **Autocomplete**: IDE sugere os campos corretos
- **Erros em tempo de compilação**: Detecta erros antes de rodar
- **Refatoração segura**: Mudar o schema atualiza todos os tipos
- **Documentação viva**: O schema é a documentação

---

## 🎓 PARTE 8: Boas Práticas e Dicas (4 minutos)

### 1. Mensagens de erro claras
"Use mensagens específicas e em português (ou idioma do usuário):"
```typescript
z.string().min(3, "O nome precisa ter pelo menos 3 letras")
// ✅ Bom: Específico e claro

z.string().min(3, "Erro")
// ❌ Ruim: Muito genérico
```

### 2. Validações encadeadas
"Você pode encadear múltiplas validações:"
```typescript
email: z
  .string()
  .email("Email inválido")
  .min(5, "Email muito curto")
  .max(100, "Email muito longo")
```

### 3. Campos opcionais
"Para campos opcionais, use `.optional()`:"
```typescript
telefone: z.string().optional()
// ou
telefone: z.string().min(10).optional()
```

### 4. Validação customizada
"Para regras complexas, use `.refine()`:"
```typescript
senha: z.string().refine(
  (val) => val.length >= 8,
  { message: "Senha deve ter pelo menos 8 caracteres" }
)
```

### 5. Reutilizar schemas
"Crie schemas reutilizáveis:"
```typescript
const emailSchema = z.string().email();
const nomeSchema = z.string().min(3);

const schema = z.object({
  nome: nomeSchema,
  email: emailSchema,
});
```

---

## 📝 PARTE 9: Resumo e Próximos Passos (3 minutos)

### O que aprendemos hoje:
✅ O que é Zod e por que usar  
✅ Como criar schemas de validação  
✅ Integração com React Hook Form  
✅ Type safety com TypeScript  
✅ Exibição de erros no formulário  

### Próximos passos sugeridos:
1. Adicionar mais campos ao formulário
2. Criar validações mais complexas (senha, confirmação de senha)
3. Validar no servidor também (Server Actions)
4. Explorar validações avançadas do Zod

### Recursos:
- Documentação Zod: https://zod.dev
- React Hook Form: https://react-hook-form.com
- Exemplo completo no código do projeto

---

## 🎬 PARTE 10: Demonstração Prática (10 minutos)

### Demonstração ao vivo:
1. **Mostrar o código funcionando**
   - Abrir o formulário no navegador
   - Testar validações em tempo real
   - Mostrar erros aparecendo

2. **Testar cenários:**
   - Nome muito curto
   - Email inválido
   - Formulário válido

3. **Mostrar type safety:**
   - Tentar acessar campo inexistente no TypeScript
   - Mostrar autocomplete funcionando

4. **Q&A**
   - Responder perguntas dos alunos
   - Resolver dúvidas específicas

---

## 💬 Roteiro de Fala Sugerido

### Abertura (1 min)
"Olá pessoal! Hoje vamos aprender sobre validação de formulários usando Zod, uma biblioteca poderosa que nos permite criar validações type-safe de forma muito simples."

### Desenvolvimento
- Fale de forma clara e pausada
- Demonstre o código enquanto explica
- Faça perguntas para engajar: "Alguém já usou validação antes?"
- Use exemplos práticos: "Imagine que você está criando um formulário de cadastro..."

### Encerramento (1 min)
"Espero que tenham gostado! Zod é uma ferramenta essencial para criar formulários robustos e type-safe. Pratiquem em casa e qualquer dúvida, me chamem!"

---

## 📌 Checklist para a Aula

- [ ] Ter o projeto rodando (`npm run dev`)
- [ ] Abrir o formulário de cadastro no navegador
- [ ] Ter o código aberto no editor
- [ ] Preparar exemplos de validação para mostrar
- [ ] Ter a documentação do Zod aberta (caso precise)
- [ ] Preparar respostas para perguntas comuns

---

## ❓ Perguntas Frequentes (FAQ)

**P: Posso usar Zod sem React Hook Form?**  
R: Sim! Zod funciona sozinho, mas React Hook Form facilita muito a integração.

**P: Zod valida no servidor também?**  
R: Sim! Você pode usar o mesmo schema no cliente e no servidor.

**P: Como valido campos condicionais?**  
R: Use `.refine()` ou `.superRefine()` para validações complexas.

**P: Zod é melhor que Yup?**  
R: Depende do caso, mas Zod tem melhor integração com TypeScript.

**P: Posso usar Zod com outros frameworks?**  
R: Sim! Zod funciona com qualquer framework JavaScript/TypeScript.

---

**Boa aula! 🚀**

