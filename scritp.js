document.addEventListener('DOMContentLoaded', () => {
    const botoesOpcao = document.querySelectorAll('.btn-opcao');
    const formulario = document.getElementById('orcamento-form');
    const servicoTitulo = document.getElementById('servico-titulo');
    const servicoEscolhidoInput = document.getElementById('servico-escolhido');
    
    // --- Lógica para mostrar o formulário ao selecionar o serviço ---
    botoesOpcao.forEach(botao => {
        botao.addEventListener('click', () => {
            const servico = botao.getAttribute('data-servico');
            
            // Mapeia o valor do 'data-servico' para o texto que aparece no formulário
            let titulo = '';
        

            servicoTitulo.textContent = titulo; // Atualiza o título
            servicoEscolhidoInput.value = titulo; // Seta o valor real para o envio
            
            formulario.classList.remove('hidden'); // Mostra o formulário
            
            // Rola a tela para o formulário
            formulario.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- Lógica para enviar o formulário e redirecionar para o WhatsApp ---
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        // 1. Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const detalhes = document.getElementById('detalhes').value;
        const servico = servicoEscolhidoInput.value;
        
        // **IMPORTANTE**: Substitua SEUNUMERODOWHATSAPP pelo seu número real com código do país (ex: 5511987654321)
        const SEUNUMERODOWHATSAPP = "5561999160398"; 

        // 2. Monta a mensagem para o WhatsApp
        let mensagem = `*Solicitação de Orçamento - DZ7_ADESIVOS*\n\n`;
        mensagem += `*Serviço:* ${servico}\n`;
        mensagem += `*Nome:* ${nome}\n`;
        mensagem += `*Telefone:* ${telefone}\n\n`;
        mensagem += `*Detalhes do Pedido:*\n${detalhes}\n\n`;
        mensagem += `_Por favor, aguarde que em breve entraremos em contato!_`;

        // 3. Codifica a mensagem para URL
        const mensagemCodificada = encodeURIComponent(mensagem);

        // 4. Cria o link do WhatsApp
        const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B5561999160398&text&type=phone_number&app_absent=0";

        // 5. Redireciona o usuário
        window.open(whatsappLink);
        
        // Opcional: Limpa e esconde o formulário após o envio
        formulario.reset();
        formulario.classList.add('hidden');
        alert("Seu orçamento foi enviado para o WhatsApp! Em breve entraremos em contato.");
    });
});