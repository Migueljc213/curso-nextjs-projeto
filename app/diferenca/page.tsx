import BotaoInterativo from "./BotaoInterativo"

export default function DiferencaPage() {
    console.log('Renderizando no Servidor')
    return (
        <div>
            <h1>Serve Component (Padrão)</h1>
            <p>Este texto foi gerado no backend;</p>
            <BotaoInterativo/>
        </div>
    )
}