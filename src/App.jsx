import { useState } from "react"

export default function App() {
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [comments, setCommnts] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if(!email || !text) return;
      const newComments =  {
        id: Date.now(),
        email,
        text
      }
  setCommnts ([...comments, newComments])
  setEmail("")
  setText("")

    }
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      maxWidth: "400px"
    }}>
      <h1>Feed de Comentários</h1>
      <label htmlFor="text">Email</label>
      <input type="text"
       placeholder="Digite seu email"
       value={email} 
       onChange={(e) => setEmail(e.target.value)}
       />
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <label>Comentário</label>
        <textarea
          placeholder="Digite seu comentário..."
          rows={4} // define altura da textbox
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Enviar comentário</button>
      </div>
      <div>
        {comments.map((c) => (
          <div key={c.id}>
           <strong style={{
            color: "#08e300ff"
           }}>{c.email}</strong>
            <p style={{
              color: "#08e300ff"
            }}>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}