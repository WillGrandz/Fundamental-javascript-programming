/* KODEN ÄR SKRIVEN AV HELEN GRANDEZ*/

// Skapar ett Namespace för att undvika förvirring med andra kodsnuttar
const MittDiagram = {};

// JSON-data, exempeldata för diagrammet (detta kan man ersätta med riktig data senare)
MittDiagram.inledandeData = {
    labels: ['Webbsidan', 'ATL - Atlanta', 'LAX - Los Angeles', 'ORD - Chicago', 'DFW - Dallas/Ft. Worth'],
    datasets: [{
        label: 'Månadsvis',
        data: [10, 20, 15, 25, 30],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 3,
        fill: false
    }]
};

// Hämtar referensen till canvaselementet med id 'mittDiagram' och dess 2D-kontext
MittDiagram.ctx = document.getElementById('mittDiagram').getContext('2d');

// Skapar ett nytt Chart-objekt och tilldelar dess referens till MittDiagram.mittDiagram
MittDiagram.mittDiagram = new Chart(MittDiagram.ctx, {
    // Typen av diagram (i det här fallet, ett linjediagram)
    type: 'line',

    // Data för diagrammet, initialt satt till MittDiagram.inledandeData
    data: MittDiagram.inledandeData,

    // Inställningar för diagrammet, inklusive responsivitet och skalningsalternativ
    options: {
        responsive: true,  // Gör diagrammet responsivt för att anpassa sig till olika skärmstorlekar
        maintainAspectRatio: false,  // Tillåter att diagrammet ändrar sitt sidoförhållande
        scales: {
            y: {
                beginAtZero: true  // Startar y-axeln från noll för bättre visualisering
            }
        }
    }
});


// Funktion för att uppdatera diagrammet med ny information
MittDiagram.uppdateraDiagram = function(nyData) {
    // Uppdaterar diagrammets data och ritar om det
    MittDiagram.mittDiagram.data = nyData;
    MittDiagram.mittDiagram.update();
};

// Simulerar regelbundna uppdateringar (detta kan ersättas med riktig data senare)
setInterval(() => {
    // Genererar en slumpmässig uppsättning data för att simulera uppdateringar
    const nyData = {
        labels: ['Webbsidan', 'ATL - Atlanta', 'LAX - Los Angeles', 'ORD - Chicago', 'DFW - Dallas/Ft. Worth'],
        datasets: [{
            label: 'Uppdaterad data',
            data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 50)),
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 3,
            fill: false
        }]
    };
    // Anropar funktionen för att uppdatera diagrammet med den nya datan
    MittDiagram.uppdateraDiagram(nyData);
}, 3000);



// Skapar ett Namespace för att undvika globala konflikter
const InteraktivDiagram = {};

// JavaScript Hover-effekt för diagrammet och footer
InteraktivDiagram.diagramContainer = document.querySelector('.diagram-container');
InteraktivDiagram.footer = document.querySelector('footer');

// Lägger till en händelselyssnare för mouseenter (när muspekaren går över) på diagramContainer-elementet
InteraktivDiagram.diagramContainer.addEventListener('mouseenter', () => {
    // Förstorar diagrammet vid hover för visuell feedback
    InteraktivDiagram.diagramContainer.style.transform = 'scale(1.02)';
});

    // Lägger till en händelselyssnare för mouseleave (när muspekaren lämnar) på diagramContainer-elementet
    InteraktivDiagram.diagramContainer.addEventListener('mouseleave', () => {
        // Återställer diagramstorleken till normal vid hover exit
        InteraktivDiagram.diagramContainer.style.transform = 'scale(1)';
    });

        // Lägger till en händelselyssnare för mouseenter (när muspekaren går över) på footer-elementet
        InteraktivDiagram.footer.addEventListener('mouseenter', () => {
            // Ändrar textfärgen i footern till en annan nyans vid hover för enkel interaktion
            InteraktivDiagram.footer.style.color = '#D6DBDF';
        });

            // Lägger till en händelselyssnare för mouseleave (när muspekaren lämnar) på footer-elementet
            InteraktivDiagram.footer.addEventListener('mouseleave', () => {
                // Återställer textfärgen i footern till en annan nyans vid hover exit
                InteraktivDiagram.footer.style.color = '#ECF0F1';
            });

                // JavaScript Tooltip och Länkfunktionalitet
                InteraktivDiagram.diagramContainerJS = document.getElementById('diagramContainer');
                InteraktivDiagram.footerLink = document.getElementById('footerLink');

            // Lägger till en händelselyssnare för mouseover (hover) på diagramContainerJS-elementet
            InteraktivDiagram.diagramContainerJS.addEventListener('mouseover', () => {
                // Hämtar därefter referens till tooltip-elementet inuti diagramContainerJS
                const tooltip = InteraktivDiagram.diagramContainerJS.querySelector('.tooltip');
                
                // Uppdaterar sen tooltip-innehållet för att visa extra information
                tooltip.innerHTML = "<p>Klicka för mer information</p>";
            });

        // Lägger till en händelseslyssnare för klick på diagramContainerJS-elementet
        InteraktivDiagram.diagramContainerJS.addEventListener('click', () => {
            // Simulerar öppning av en ny sida med mer information när användaren klickar
            window.open('https://Detta-är-en-påhittad-länk.com', '_blank');
        });

    // Lägger till en händelselyssnare för mouseover (hover) på footerLink-elementet
    InteraktivDiagram.footerLink.addEventListener('mouseover', () => {
        // Ändrar länktexten till "Läs mer om mig" vid hover för att öka användarinteraktionen
        InteraktivDiagram.footerLink.innerHTML = "Läs mer om mig";
    });

// Lägger till en händelselyssnare för mouseout (när muspekaren lämnar) på footerLink-elementet
InteraktivDiagram.footerLink.addEventListener('mouseout', () => {
    // Återställer länktexten till "Skapad av Helen Grandez" när muspekaren lämnar länken
    InteraktivDiagram.footerLink.innerHTML = "Skapad av Helen Grandez";
});

