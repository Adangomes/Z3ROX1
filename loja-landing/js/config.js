// Tudo que muda de cliente para cliente fica aqui.
// Depois, estes dados virão do Supabase.
window.LOJA = {
  nome: "Rua 27",
  slogan: "Roupa que fala por você.",
  descricao: "Peças novas toda semana. Peça pelo WhatsApp e receba em casa.",
  whatsapp: "5500000000000", // só números, com 55 + DDD
  instagram: "https://instagram.com/seuinstagram",
  corPrincipal: "#2B4EFF",
  corApoio: "#FFC9D6",
  faixa: ["Novidades da semana", "Frete grátis acima de R$ 199", "Troca fácil", "Parcele em até 6x"],
  // img: coloque o link de uma foto (ou deixe "" para mostrar só a cor)
  categorias: [
    { nome: "Camisetas", texto: "Algodão pesado, caimento solto, cores que não desbotam.", cor: "#101820", tom: "escuro", img: "" },
    { nome: "Calças", texto: "Jeans e sarja com cintura alta e corte reto.", cor: "#2B4EFF", tom: "escuro", img: "" },
    { nome: "Jaquetas", texto: "Para o frio de verdade e para o ar-condicionado também.", cor: "#FFC9D6", tom: "claro", img: "" }
  ],
  produtos: [
    { nome: "Camiseta Boxy Preta", preco: "R$ 89,90", cor: "#1d2733", img: "" },
    { nome: "Calça Reta Jeans", preco: "R$ 189,90", cor: "#5b78c9", img: "" },
    { nome: "Jaqueta Corta-vento", preco: "R$ 229,90", cor: "#e7b6c2", img: "" },
    { nome: "Moletom Canguru", preco: "R$ 159,90", cor: "#9aa3ad", img: "" }
  ],
  beneficios: [
    { titulo: "Entrega rápida", texto: "Enviamos em até 24 horas depois do pagamento." },
    { titulo: "Troca em 7 dias", texto: "Não serviu? Troque sem complicação, pelo WhatsApp." },
    { titulo: "Atendimento de verdade", texto: "Você fala com a gente, não com um robô." }
  ],
  depoimentos: [
    { nome: "Camila, Recife", texto: "Chegou em dois dias e o tamanho veio certinho. Já fiz o segundo pedido." },
    { nome: "Rafael, Campinas", texto: "A jaqueta é igual às fotos. Atendimento muito rápido no WhatsApp." }
  ]
};
