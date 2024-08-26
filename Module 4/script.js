/* SKAPAD AV WILLIAM GRANDEZ */
/* 
    Använder mig av en form av en Namespace som skapar ett självkörande anonymt funktionellt uttryck (IIFE) 
    som organiserar koden som en modul. 
*/ 
let shoppingApp = (function () {
    // Lista för inköpsvaror och standardvaluta
    let shoppingList = []; // Skapar en tom lista som kommer att innehålla inköpsvaror.
    let currency = 'USD';   // Skapar en variabel som håller standardvalutan och sätter den initialt till 'USD'.

    // Funktion för att uppdatera shoppinglistan och dess totalbelopp
    function updateList() {
        let listContainer = document.getElementById('shopping-list'); // Hämtar referens till DOM-elementet med id 'shopping-list'.
        let totalElement = document.getElementById('total'); // Hämtar referens till DOM-elementet med id 'total'.
        let totalAmount = 0; // Variabel för att hålla det totala beloppet.

        // Rensa listan
        listContainer.innerHTML = ''; // Tömmer alltså innehållet i shoppinglistan i DOM.

        // Uppdaterar listan med denna funktion
        shoppingList.forEach(function (item, index) {
            let listItem = document.createElement('li'); // Skapar ett nytt li-element för varje inköpsvara.
            listItem.innerHTML = `
                <span class="item-name">${item.name}</span>
                <span class="item-price">${formatCurrency(item.price)}</span>
                <button onclick="shoppingApp.removeItem(${index})">Ta bort</button>
            `; 
            listContainer.appendChild(listItem); // Lägger till det nya li-elementet i shoppinglistan i DOM.
            totalAmount += item.price; // Lägger till priset på produkten till det totala beloppet.
        });

        // Uppdaterar det totala beloppet i DOM med formaterad valuta.
        totalElement.textContent = 'Totalt: ' + formatCurrency(totalAmount); 
    }

    // Funktion för att lägga till en produkt i shoppinglistan
    function addItem() {
        let itemName = document.getElementById('item').value.trim(); // Hämtar och därefter rensar produktnamnet från inmatningsfältet.
        let itemPrice = parseFloat(document.getElementById('price').value); // Hämtar och konverterar priset från inmatningsfältet till en flyttalsvärde.

        // Checkar igenom att priset är ett giltigt positivt nummer och att produktnamnet inte är tomt
        if (isNaN(itemPrice) || itemPrice <= 0 || itemName === '') { // Visar ett felmeddelande om valideringskriterierna inte uppfylls.
            alert('Ange ett giltigt produktnamn och pris.'); 
            return; // Avbryter funktionen om valideringen misslyckas.
        }

        // Lägger till en ny produkt i shoppinglistan med produktnamn och pris.
        shoppingList.push({
            name: itemName,
            price: itemPrice,
        });

        // Uppdaterar den visade listan och rensar inmatningsfälten
        updateList(); // Anropar funktionen för att uppdatera visningen av shoppinglistan.
        document.getElementById('item').value = ''; // Rensar inmatningsfältet för produktnamn.
        document.getElementById('price').value = ''; // Rensar inmatningsfältet för pris.
    }

    // Funktion för att rensa shoppinglistan och uppdatera visningen
    function clearList() {
        // Rensar inmatningsfälten och uppdaterar visningen
        document.getElementById('item').value = ''; // Rensar inmatningsfältet för produktnamn.
        document.getElementById('price').value = ''; // Rensar inmatningsfältet för pris.
        shoppingList = []; // Tömmer shoppinglistan genom att tilldela en tom array.
        updateList(); // Anropar funktionen för att uppdatera visningen av shoppinglistan.
    }

    // Funktion för att ta bort en produkt från shoppinglistan
    function removeItem(index) {
        // Ta bort produkten vid det angivna indexet från shoppinglistan
        shoppingList.splice(index, 1);
        updateList(); // Anropar funktionen för att uppdatera visningen av shoppinglistan.
    }

    // Funktion för att formatera valutan för visning
    function formatCurrency(amount) {
        let options = {
            style: 'currency', // Sätter stilen till 'currency' för valutaformatering.
            currency: currency, // Använder den aktuella valutan som definieras av variabeln 'currency'.
        };
        return amount.toLocaleString('en-US', options); // Använder toLocaleString för att formatera beloppet med angivna options.
    }

    // Funktion för att ändra valutan baserat på användarens val och uppdatera visningen
    function setCurrency() {
        currency = document.getElementById('currency').value;
        updateList(); // Anropar funktionen för att uppdatera visningen av shoppinglistan.
    }

    // Funktion för att spara den aktuella listan till lokal lagring
    function saveToLocalStorage() {
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList)); // Använder localStorage för att spara shoppinglistan som en JSON-sträng.
    }

    // Funktion för att ladda listan från lokal lagring vid sidans laddning
    function loadFromLocalStorage() {
        let storedList = localStorage.getItem('shoppingList'); // Hämtar shoppinglistan som en JSON-sträng från lokal lagring.
        
        if (storedList) {
            shoppingList = JSON.parse(storedList); // Konverterar den sparade JSON-strängen till en JavaScript-objektlista.
            updateList(); // Anropar funktionen för att uppdatera visningen av shoppinglistan i DOM.
        }
    }

    // Funktion för att spara den aktuella listan och visa en bekräftelse
    function saveList() {
        saveToLocalStorage(); // Anropar funktionen för att spara den aktuella listan till lokal lagring.
        alert('Listan är nu sparad!'); // Visar ett bekräftelsemeddelande.
        clearEntry(); // Anropar funktionen för att rensa inmatningsfälten och den aktuella listan efter sparande.
    }

    // Funktion för att rensa alla sparade listor och uppdatera visningen
    function clearSavedLists() {
        localStorage.removeItem('savedLists'); // Tar bort sparade listor från lokal lagring med nyckeln 'savedLists'.
        updateSavedLists(); // Anropar funktionen för att uppdatera visningen av sparade listor i DOM.
    }

    // Funktion för att ta bort en sparad lista vid det angivna indexet och uppdatera visningen
    function removeSavedList(index) {
        let savedLists = getSavedLists();
        savedLists.splice(index, 1);
        localStorage.setItem('savedLists', JSON.stringify(savedLists));
        updateSavedLists(); // Anropar funktionen för att uppdatera visningen av sparade listor i DOM.
    }

    // Funktion för att hämta sparade listor från lokal lagring
    function getSavedLists() {
        return JSON.parse(localStorage.getItem('savedLists')) || [];
    }

    // Funktion för att spara den aktuella listan som en sparad lista med ett användardefinierat namn
    function saveList() {
        let savedLists = getSavedLists(); // Hämtar befintliga sparade listor från lokal lagring.

        let listName = prompt('Ange ett namn för listan som ska sparas:'); // Frågar användaren efter ett namn för den sparade listan.

        if (!listName) {
            alert('Listans namn kan inte vara tomt. Listan blev inte sparad.'); // Visar ett felmeddelande om användaren inte anger ett namn.
            return; // Avbryter funktionen om användaren inte anger ett namn.
        }

        savedLists.push({ name: listName, items: [...shoppingList] }); // Lägger till den aktuella listan som en sparad lista med användardefinierat namn.

        localStorage.setItem('savedLists', JSON.stringify(savedLists)); // Sparar de uppdaterade sparade listorna till en lokal lagring.

        updateSavedLists(); // Anropar funktionen för att uppdatera visningen av sparade listor i DOM.
        clearEntry(); // Anropar funktionen för att rensa inmatningsfälten och den aktuella listan efter sparande.
    }

    // Funktion för att uppdatera visningen av sparade listor
    function updateSavedLists() {
        let savedListsContainer = document.getElementById('saved-lists');  // Hämtar behållaren för visning av sparade listor från DOM.
        savedListsContainer.innerHTML = ''; // Rensar innehållet i behållaren.

        let savedLists = getSavedLists(); // Hämtar sparade listor från lokal lagring.

        savedLists.forEach(function (savedList, index) {
            let listItem = document.createElement('div'); // Skapar ett nytt div-element för varje sparad lista.
            listItem.className = 'saved-list-item'; // Tilldelar klassen 'saved-list-item' till det skapade elementet.
            listItem.setAttribute('data-index', index); // Lägger till ett data-attribut för att lagra indexet.

            let listName = document.createElement('span'); // Skapar ett span-element för visning av listans namn.
            listName.className = 'saved-list-name'; // Tilldelar klassen 'saved-list-name' till det skapade elementet.
            listName.textContent = savedList.name; // Tilldelar textinnehållet som är listans namn.
            listItem.appendChild(listName); // Lägger till span-elementet i den skapade listan.

            let deleteButton = document.createElement('button'); // Skapar en knapp för att ta bort sparade listor.
            deleteButton.className = 'delete-button'; // Tilldelar klassen 'delete-button' till knappen.
            
            // Tilldelar HTML-kod för ett ikon för att representera en papperskorg.
            deleteButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg>
            `;


            deleteButton.onclick = function (event) {
                event.stopPropagation(); // Förhindrar att klickhändelsen propagerar uppåt och påverkar andra element.
                removeSavedList(index); // Anropar funktionen för att ta bort den sparade listan baserat på indexet.
            };

            listItem.appendChild(deleteButton); // Lägger till knappen för att ta bort i den skapade listan.

            savedListsContainer.appendChild(listItem); // Lägger till den skapade listan i behållaren för visning av sparade listor.

            listItem.addEventListener('click', function () {
                loadSavedList(savedList.items); // Lägger till ett klickhändelse-lyssnare för att ladda den sparade listan vid klick.
            });
        });

        savedListsContainer.style.display = savedLists.length ? 'block' : 'none'; // Visar eller döljer behållaren beroende på om det finns sparade listor.
    }

    // Funktion för att ladda alla sparade listor vid sidans laddning
    function loadAllSavedLists() {
        let savedLists = getSavedLists();// Hämtar alla sparade listor från lokal lagring.

        savedLists.forEach(function (savedList) {
            loadSavedList(savedList.items); // Laddar varje sparad lista.
        });
    }

    // Funktion för att ladda en sparad lista
    function loadSavedList(savedList) {
        shoppingList = savedList; // Tilldelar den sparade listan till den aktuella shoppinglistan.
        updateList(); // Anropar funktionen för att uppdatera visningen av shoppinglistan med den nya listan
    }

    // Funktion för att rensa inmatningsfälten och listan efter att ha sparat en lista
    function clearEntry() {
        document.getElementById('item').value = ''; // Rensar inmatningsfältet för produktnamn.
        document.getElementById('price').value = ''; // Rensar inmatningsfältet för pris.
        shoppingList = []; // Återställer den aktuella shoppinglistan till en tom lista.
        updateList(); // Anropar funktionen för att uppdatera visningen av shoppinglistan efter rensning.
    }

    // Händelselyssnare för ändring av valuta
    document.getElementById('currency').addEventListener('change', setCurrency);

    // Initialisera listan och sparade listor vid sidans laddning
    updateList(); // Uppdaterar visningen av shoppinglistan.
    loadFromLocalStorage(); // Laddar shoppinglistan från lokal lagring.
    updateSavedLists(); // Uppdaterar visningen av sparade listor.


    return {
        addItem: addItem, // Metod för att lägga till en produkt i shoppinglistan.
        clearList: clearList, // Metod för att rensa shoppinglistan.
        removeItem: removeItem, // Metod för att ta bort en produkt från shoppinglistan.
        saveList: saveList, // Metod för att spara den aktuella listan och visa en bekräftelse.
        clearSavedLists: clearSavedLists, // Metod för att rensa alla sparade listor och uppdatera visningen.
        loadAllSavedLists: loadAllSavedLists, // Metod för att ladda alla sparade listor vid sidans laddning.
    };
})();
