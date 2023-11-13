class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const autor = document.createElement("p");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const titulo = document.createElement("h1");
    titulo.textContent = this.getAttribute("title");

    const descricao = document.createElement("h3");
    descricao.textContent = this.getAttribute("description");

    const otherInfo = document.createElement("p");

    content.appendChild(autor);
    content.appendChild(titulo);
    content.appendChild(descricao);
    content.appendChild(otherInfo);

    const image = document.createElement("div");
    image.setAttribute("class", "image");
    const thumbnail = document.createElement("img");
    thumbnail.src = this.getAttribute("photo") || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaa6mEKV5O61980XsJKT-O4Ud2wGEz1TxWN7WWqWJBw&s";
    image.appendChild(thumbnail);

    componentRoot.appendChild(content);
    componentRoot.appendChild(image);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
        display: flex;
        width: 700px;
        justify-content: space-between;
        flex-direction: row;
        box-shadow: -22px 24px 27px 2px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: -22px 24px 27px 2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -22px 24px 27px 2px rgba(0, 0, 0, 0.75);
      }
      
      .content,
      .image {
        margin: auto;
      }
      
      .image {
        margin: auto;
      }
      
      .image img {
        max-width: 100%;
        border-radius: 50%;
      }
      
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
      }
      
      .content > h1 {
        margin-top: 15px;
        font-size: 30px;
      }
      
      .content h3 {
        color: gray;
      }
      
    `;
    return style;
  }
}

customElements.define("card-news", CardNews);
