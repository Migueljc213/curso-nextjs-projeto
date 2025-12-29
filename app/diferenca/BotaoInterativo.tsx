'use client'

import { useState } from "react"

export default function BotaoInterativo() {
     console.log("Renderizando no Cliente");
    const [count, setCount] = useState(0)
    return (
        <button onClick={() => setCount(count + 1)}>
            Clique aqui {count}
        </button>
    )
}