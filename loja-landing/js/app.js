const { createElement: h, useEffect, useRef, useState } = React;
const C = window.LOJA;

const zap = (msg) =>
  "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg);

/* Aparece quando entra na tela */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!("IntersectionObserver" in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return h("div", {
    ref,
    className: "reveal " + (on ? "in " : "") + className,
    style: { transitionDelay: delay + "ms" }
  }, children);
}

function Foto({ cor, img, nome }) {
  return h("div", { className: "ph", style: { background: cor } },
    img ? h("img", { src: img, alt: nome, loading: "lazy" }) : null);
}

function Topo() {
  return h("header", { className: "top" },
    h("div", { className: "wrap" },
      h("a", { className: "logo", href: "#topo" }, C.nome),
      h("a", { className: "btn", href: zap("Oi! Vim pelo site da " + C.nome) }, "Chamar no WhatsApp")
    )
  );
}

function Hero() {
  return h("section", { className: "hero", id: "topo" },
    h("div", { className: "wrap" },
      h("h1", null, C.slogan),
      h("p", null, C.descricao),
      h("div", { className: "acts" },
        h("a", { className: "btn alt", href: "#produtos" }, "Ver peças"),
        h("a", { className: "btn", href: C.instagram }, "Instagram")
      )
    )
  );
}

function Faixa() {
  const texto = C.faixa.join("   ✦   ") + "   ✦   ";
  return h("div", { className: "marquee", "aria-hidden": "true" },
    h("div", null, texto + texto)
  );
}

function Categorias() {
  return h("section", { className: "sec" },
    h("div", { className: "wrap" },
      h("h2", null, "Escolha por categoria"),
      h("div", { className: "stack" },
        C.categorias.map((c, i) =>
          h("article", {
            key: c.nome,
            className: "cat " + (c.tom === "escuro" ? "escuro" : "claro"),
            style: { background: c.cor, top: 84 + i * 20 + "px" }
          },
            c.img ? h("img", { className: "cat-img", src: c.img, alt: "", loading: "lazy" }) : null,
            h("div", { className: "cat-txt" },
              h("h3", null, c.nome),
              h("p", null, c.texto)
            )
          )
        )
      )
    )
  );
}

function Produtos() {
  return h("section", { className: "sec", id: "produtos" },
    h("div", { className: "wrap" },
      h("h2", null, "Mais pedidas"),
      h("div", { className: "grid" },
        C.produtos.map((p, i) =>
          h(Reveal, { key: p.nome, delay: (i % 2) * 120 },
            h("div", { className: "prod" },
              h(Foto, { cor: p.cor, img: p.img, nome: p.nome }),
              h("h3", null, p.nome),
              h("p", { className: "preco" }, p.preco),
              h("a", { className: "btn peq", href: zap("Quero a peça: " + p.nome) }, "Pedir no WhatsApp")
            )
          )
        )
      )
    )
  );
}

function Beneficios() {
  return h("section", { className: "sec" },
    h("div", { className: "wrap" },
      h("div", { className: "bens" },
        C.beneficios.map((b, i) =>
          h(Reveal, { key: b.titulo, delay: i * 100 },
            h("div", { className: "ben" },
              h("h3", null, b.titulo),
              h("p", null, b.texto)
            )
          )
        )
      )
    )
  );
}

function Depoimentos() {
  return h("section", { className: "sec" },
    h("div", { className: "wrap" },
      h("h2", null, "Quem comprou, falou"),
      h("div", { className: "deps" },
        C.depoimentos.map((d, i) =>
          h(Reveal, { key: d.nome, delay: i * 120 },
            h("blockquote", null,
              h("p", null, "“" + d.texto + "”"),
              h("cite", null, d.nome)
            )
          )
        )
      )
    )
  );
}

function Final() {
  return h("section", { className: "sec" },
    h("div", { className: "wrap" },
      h(Reveal, null,
        h("div", { className: "final" },
          h("h2", null, "Viu algo que gostou?"),
          h("p", null, "Mande uma mensagem e separamos a sua peça."),
          h("a", { className: "btn alt", href: zap("Oi! Quero fazer um pedido.") }, "Falar com a " + C.nome)
        )
      )
    )
  );
}

function Rodape() {
  return h("footer", { className: "rodape" },
    h("div", { className: "wrap" },
      h("span", null, "© " + new Date().getFullYear() + " " + C.nome),
      h("a", { href: "admin/" }, "Login para ajuste"),
      h("span", null, "Feito por MydiSistem")
    )
  );
}

function App() {
  useEffect(() => {
    document.title = C.nome + " | " + C.slogan;
    const s = document.documentElement.style;
    s.setProperty("--accent", C.corPrincipal);
    s.setProperty("--soft", C.corApoio);
  }, []);
  return h(React.Fragment, null,
    h(Topo), h(Hero), h(Faixa), h(Categorias),
    h(Produtos), h(Beneficios), h(Depoimentos), h(Final), h(Rodape)
  );
}

const raiz = document.createElement("div");
document.body.appendChild(raiz);
ReactDOM.createRoot(raiz).render(h(App));
