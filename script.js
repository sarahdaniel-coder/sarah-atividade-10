const monthYear = document.getElementById("monthYear"); // Título do mês e ano
const daysContainer = document.getElementById("days"); // Área onde os dias serão inseridos
const prevBtn = document.getElementById("prev"); // Botão anterior
const nextBtn = document.getElementById("next"); // Botão próximo
 
// Cria uma data inicial com o mês e ano atuais
let date = new Date();
 
// Função para renderizar o calendário
function renderCalendar() {
    // Pega o mês atual (0-11)
    const month = date.getMonth();
    // Pega o ano atual
    const year = date.getFullYear();
 
    // Define o nome do mês e o ano no cabeçalho
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    monthYear.textContent = `${monthNames[month]} ${year}`;
 
    // Pega o primeiro dia da semana do mês
    const firstDay = new Date(year, month, 1).getDay();
    // Pega o último dia do mês atual
    const lastDate = new Date(year, month + 1, 0).getDate();
    // Pega o último dia do mês anterior
    const prevLastDate = new Date(year, month, 0).getDate();
 
    // Limpa o container dos dias antes de renderizar novamente
    daysContainer.innerHTML = "";
 
    // Adiciona dias do mês anterior (em cinza)
    for (let x = firstDay; x > 0; x--) {
        const div = document.createElement("div");
        div.textContent = prevLastDate - x + 1;
        div.classList.add("other-month");
        daysContainer.appendChild(div);
    }
 
    // Adiciona dias do mês atual
    for (let i = 1; i <= lastDate; i++) {
        const div = document.createElement("div");
        div.textContent = i;
 
        // Destaca o dia atual
        const today = new Date();
        if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            div.classList.add("today");
        }
 
        daysContainer.appendChild(div);
    }
 
    // Preenche os dias do próximo mês para completar a grade
    const totalCells = daysContainer.childElementCount;
    const nextDays = 42 - totalCells; // 6 linhas x 7 colunas
    for (let j = 1; j <= nextDays; j++) {
        const div = document.createElement("div");
        div.textContent = j;
        div.classList.add("other-month");
        daysContainer.appendChild(div);
    }
}
 
// Eventos de clique para mudar o mês
prevBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1); // Volta um mês
    renderCalendar();
});
 
nextBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1); // Avança um mês
    renderCalendar();
});
 
// Renderiza o calendário assim que a página carrega
renderCalendar();
  