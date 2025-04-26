const cases = {
    knife: {
        price: 300,
        items: ["★ Karambit | Fade", "★ Bayonet | Slaughter", "★ M9 Bayonet | Tiger Tooth"]
    },
    covert: {
        price: 50,
        items: ["AK-47 | Fire Serpent", "AWP | Asiimov", "Desert Eagle | Blaze"]
    },
    prisma: {
        price: 20,
        items: ["MAC-10 | Neon Rider", "P250 | See Ya Later", "MP9 | Starlight Protector"]
    }
};

let selectedCase = null;
let balance = 1000;
let inventory = [];

document.querySelectorAll('.case').forEach(caseEl => {
    caseEl.addEventListener('click', () => {
        selectedCase = caseEl.dataset.case;
        document.getElementById('open-btn').disabled = false;
    });
});

document.getElementById('open-btn').addEventListener('click', () => {
    if (!selectedCase) return;

    const caseData = cases[selectedCase];
    if (balance < caseData.price) {
        alert("Недостаточно средств!");
        return;
    }

    balance -= caseData.price;
    updateBalance();

    const roller = document.getElementById('roller');
    roller.innerHTML = '';

    const strip = document.createElement('div');
    strip.className = 'strip';

    const pool = [];
    for (let i = 0; i < 50; i++) {
        const item = getRandomItem(caseData.items);
        pool.push(item);
    }

    pool.forEach(name => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = name;
        strip.appendChild(div);
    });

    roller.appendChild(strip);

    strip.style.left = '0px';
    strip.style.animation = 'spin 4s ease-out forwards';

    setTimeout(() => {
        const wonItem = pool[25]; // Центральный
        alert(`Выпало: ${wonItem}`);
        inventory.push({ name: wonItem, price: getRandomPrice(caseData.price) });
        updateInventory();
    }, 4000);
});

function updateBalance() {
    document.getElementById('balance').textContent = `$${balance}`;
}

function updateInventory() {
    const invList = document.getElementById('inventory-list');
    invList.innerHTML = '';

    inventory.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} — <b>$${item.price}</b>
            <button onclick="sellItem(${index})">Продать</button>`;
        invList.appendChild(li);
    });
}

function sellItem(index) {
    balance += inventory[index].price;
    inventory.splice(index, 1);
    updateBalance();
    updateInventory();
}

function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function getRandomPrice(base) {
    return Math.floor(base * (0.8 + Math.random() * 1.2));
}


